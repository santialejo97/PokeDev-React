import {
  BoneFracture,
  HeartPlus,
  Rabbit,
  Shield,
  ShieldPlus,
  Swords,
  X,
  type LucideIcon,
} from "lucide-react";
import { BadgeCustomerPoke } from "./BadgeCustomerPoke";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";
import type { pokeType } from "../interfaces";
import { usePokemonStore } from "../store/pokemon.store";
import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
} from "@/components/ui/progress";
import { useRef } from "react";
import { useGSAP, gsap } from "@/lib/gsap";

interface CardDetailPokeProps {
  pokemon: PokemonResponse;
}

interface DataStats {
  name: string;
  icon: LucideIcon;
  color: string;
}

export const statNames: Record<string, DataStats> = {
  hp: {
    name: "PS",
    icon: HeartPlus,
    color: "bg-red-500",
  },
  attack: { name: "Ataque", icon: Swords, color: "bg-orange-500" },
  defense: { name: "Defensa", icon: Shield, color: "bg-yellow-500" },
  "special-attack": {
    name: "Ataque especial",
    icon: BoneFracture,
    color: "bg-blue-500",
  },
  "special-defense": {
    name: "Defensa especial",
    icon: ShieldPlus,
    color: "bg-green-500",
  },
  speed: { name: "Velocidad", icon: Rabbit, color: "bg-purple-500" },
};

export const CardDetailPoke = ({ pokemon }: CardDetailPokeProps) => {
  const { clearPokemon } = usePokemonStore();
  const containerDetail = useRef<HTMLElement | null>(null);
  const artwork =
    pokemon.sprites.other["official-artwork"].front_default ||
    pokemon.sprites.other.showdown.front_default ||
    pokemon.sprites.front_default ||
    "";

  useGSAP(
    () => {
      if (!containerDetail.current) return;
      gsap.to(containerDetail.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power4.out",
      });
    },
    {
      scope: containerDetail,
      revertOnUpdate: true,
      dependencies: [pokemon.id],
    },
  );

  return (
    <article
      ref={containerDetail}
      style={{
        opacity: 0,
        transform: "translateY(60px) scale(0.96)",
      }}
      className="relative flex min-h-0 flex-1 flex-col overflow-y-auto rounded-2xl border border-border bg-(--poke-card-bg) p-5 shadow-xl transition-all duration-300 hover:border-foreground/20 hover:shadow-2xl hover:shadow-red-500/5"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-sm font-bold tracking-wider text-muted-foreground">
          #{pokemon.id}
        </span>
        <button
          type="button"
          onClick={clearPokemon}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted/60 text-muted-foreground transition-colors hover:bg-red-500/20 hover:text-red-400"
          title="Cerrar ficha"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="relative mb-5 flex h-full w-full items-center justify-center rounded-xl border border-border bg-(--poke-panel-bg)">
        <img
          src={artwork}
          alt={pokemon.name}
          className=" absolute z-1000000 h-40 w-40 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {pokemon.name}
        </h2>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {pokemon.types.map((type) => (
            <BadgeCustomerPoke
              type={type.type.name as pokeType}
              key={`${type.type.name}-${pokemon.id}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-5 space-y-4">
        {pokemon.stats.map((stat) => {
          const mapStat = statNames[stat.stat.name];
          const Icon = mapStat.icon;

          return (
            <Progress key={stat.stat.name} value={stat.base_stat} max={100}>
              <ProgressLabel className="flex w-full items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <Icon className="h-3.5 w-3.5" />
                  {mapStat.name.toUpperCase()}
                </span>
                <span className="font-mono text-xs font-semibold text-foreground">
                  {stat.base_stat}
                </span>
              </ProgressLabel>
              <ProgressTrack>
                <ProgressIndicator className={mapStat.color} />
              </ProgressTrack>
            </Progress>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-(--poke-panel-bg) p-2.5 text-center">
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Altura
          </span>
          <span className="block text-sm font-bold text-foreground">
            {pokemon.height / 10} m
          </span>
        </div>
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Peso
          </span>
          <span className="block text-sm font-bold text-foreground">
            {pokemon.weight / 10} kg
          </span>
        </div>
        <div>
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Exp. Base
          </span>
          <span className="block text-sm font-bold text-foreground">
            {pokemon.base_experience}
          </span>
        </div>
      </div>
    </article>
  );
};
