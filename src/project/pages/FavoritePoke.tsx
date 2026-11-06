import { cn } from "@/lib";
import { CardPoke } from "../components";
import { usePokemonStore } from "../store/pokemon.store";

export const FavoritePoke = () => {
  const { listPokemonsFavorite } = usePokemonStore();

  return (
    <div className="flex h-full min-h-0 flex-col">
      <h1 className="shrink-0 text-2xl font-bold text-slate-100 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        Pokémon Favoritos{" "}
        <span className="mr-1.5 text-lg font-normal text-slate-400">
          {listPokemonsFavorite.length} número de pokemones capturados.
        </span>
      </h1>

      <div
        className={cn(
          "mt-4 grid flex-1 min-h-0 min-w-0 grid-cols-2 gap-4 p-3",
          "md:grid-cols-3 lg:grid-cols-4",
          "content-start overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden",
        )}
      >
        {listPokemonsFavorite.map((pokemon) => (
          <CardPoke key={pokemon.id} pokemon={pokemon} isFavorite={true} />
        ))}
      </div>
    </div>
  );
};
