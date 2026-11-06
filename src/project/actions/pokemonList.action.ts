import { pokemonApi } from "@/api/PokemonApi";
import type { PokemonListResponse } from "../interfaces/pokemonList.interface";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";
import type {
  Pokemon,
  PokemonSpecieResponse,
} from "../interfaces/pokemon.interface";

import { normalizarDataPokemon } from "@/lib/utils";

export const pokemonListAction = async (
  limit: number = 10,
  offset: number = 0,
): Promise<PokemonResponse[]> => {
  try {
    const { data } = await pokemonApi.get<PokemonListResponse>(
      `pokemon?limit=${limit}&offset=${offset}`,
    );

    const pokemons: PokemonResponse[] = await Promise.all(
      data.results.map(async (pokemon) => {
        const idPokemon = pokemon.url.split("/").at(-2);

        const { data } = await pokemonApi.get<Pokemon>(`pokemon/${idPokemon}`);

        const { data: generationPokemon } =
          await pokemonApi.get<PokemonSpecieResponse>(
            `pokemon-species/${idPokemon}`,
          );

        return normalizarDataPokemon(data, generationPokemon.generation.name);
      }),
    );

    return pokemons;
  } catch (error) {
    throw error;
  }
};
