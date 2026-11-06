import { pokemonApi } from "@/api/PokemonApi";
import type {
  Pokemon,
  PokemonSpecieResponse,
} from "../interfaces/pokemon.interface";
import { normalizarDataPokemon } from "@/lib";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";

export const pokemonDetailAction = async (
  name: string,
): Promise<PokemonResponse[]> => {
  try {
    const { data } = await pokemonApi.get<Pokemon>(`pokemon/${name}`);

    const { data: generationPokemon } =
      await pokemonApi.get<PokemonSpecieResponse>(`pokemon-species/${data.id}`);

    return [normalizarDataPokemon(data, generationPokemon.generation.name)];
  } catch (error) {
    throw error;
  }
};
