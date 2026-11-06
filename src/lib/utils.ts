import type { Pokemon } from "@/project/interfaces/pokemon.interface";
import type { PokemonResponse } from "@/project/interfaces/pokemonResponse.interface";

export { cn } from "cn";

export const normalizarDataPokemon = (
  data: Pokemon,
  generation: string | null,
): PokemonResponse => ({
  id: data.id,
  name: data.name,
  height: data.height,
  weight: data.weight,
  base_experience: data.base_experience,

  sprites: {
    front_default: data.sprites.front_default,
    front_shiny: data.sprites.front_shiny,
    other: {
      "official-artwork": {
        front_default: data.sprites.other!["official-artwork"].front_default,
        front_shiny: data.sprites.other!["official-artwork"].front_shiny,
      },
      dream_world: {
        front_default: data.sprites.other!.dream_world.front_default,
      },
      showdown: {
        front_default: data.sprites.other!.showdown.front_default,
      },
    },
  },

  types: data.types.map((item: any) => ({
    slot: item.slot,
    type: {
      name: item.type.name,
      url: item.type.url,
    },
  })),

  stats: data.stats.map((item: any) => ({
    base_stat: item.base_stat,
    effort: item.effort,
    stat: {
      name: item.stat.name,
      url: item.stat.url,
    },
  })),

  abilities: data.abilities.map((item: any) => ({
    ability: {
      name: item.ability.name,
      url: item.ability.url,
    },
    is_hidden: item.is_hidden,
    slot: item.slot,
  })),

  cries: {
    latest: data.cries.latest,
    legacy: data.cries.legacy,
  },

  generation: {
    name: generation,
  },
});
