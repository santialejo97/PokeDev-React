import { ArrowRight, Heart } from "lucide-react";
import { BadgeCustomerPoke } from "./BadgeCustomerPoke";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";
import type { pokeType } from "../interfaces";
import { usePokemonStore } from "../store/pokemon.store";

interface CardPokeProp {
  pokemon: PokemonResponse;
  isFavorite?: boolean;
}

export const CardPoke = ({ pokemon, isFavorite }: CardPokeProp) => {
  const {
    setPokemon,
    listPokemonsFavorite,
    addPokemonFavorite,
    deletePokemonFavorite,
  } = usePokemonStore();

  const isPokemonListeFavorite = listPokemonsFavorite.some(
    (fav) => fav.id === pokemon.id,
  );

  return (
    <article className="group relative flex flex-col  rounded-2xl border border-border bg-(--poke-card-bg) p-5 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-2xl hover:shadow-red-500/5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-sm font-bold tracking-wider text-muted-foreground">
          #{pokemon.id}
        </span>
        <button
          onClick={() => {
            if (isPokemonListeFavorite) {
              deletePokemonFavorite(pokemon.id);
            } else {
              addPokemonFavorite(pokemon);
            }
          }}
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-muted-foreground transition-colors hover:bg-red-500/20 hover:text-red-400"
          title="Guardar en favoritos"
        >
          {isPokemonListeFavorite ? (
            <Heart color="red" fill="red" />
          ) : (
            <Heart />
          )}
        </button>
      </div>

      <div className="relative mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-(--poke-panel-bg)">
        <div className="absolute inset-0 bg-radial from-red-500/10 via-transparent to-transparent opacity-60" />
        <img
          src={pokemon.sprites.front_default!}
          alt="Charizard"
          className="relative z-10 h-36 w-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xl font-bold tracking-tight text-foreground">
            {pokemon.name}
          </h3>
          <span className="text-xs font-medium text-muted-foreground">
            {pokemon.generation.name}
          </span>
        </div>

        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {pokemon.types.map((type) => (
            <BadgeCustomerPoke
              type={type.type.name as pokeType}
              key={`${type.type.name}-${pokemon.id}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl border border-border bg-(--poke-panel-bg) p-2.5 text-center">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Altura
          </span>
          <span className="block text-sm font-bold text-foreground">
            {pokemon.height / 10} m
          </span>
        </div>
        <div className="border-l border-border">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Peso
          </span>
          <span className="block text-sm font-bold text-foreground">
            {pokemon.weight / 10} kg
          </span>
        </div>
      </div>

      {!isFavorite && (
        <button
          type="button"
          onClick={() => setPokemon(pokemon)}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-(--poke-card-bg) px-4 py-2.5 text-xs font-semibold tracking-wide text-secondary-foreground shadow transition-colors hover:border-red-500/40 hover:bg-(--poke-card-bg)/80 hover:text-foreground"
        >
          <span>Ver Ficha Completa</span>
          <ArrowRight />
        </button>
      )}
    </article>
  );
};
