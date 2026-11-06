import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";

type PokemonState = {
  pokemon: PokemonResponse | undefined;
  isShowPokemon: boolean;
  listPokemonsFavorite: PokemonResponse[];
  setPokemon: (pokemon: PokemonResponse) => void;
  clearPokemon: () => void;
  deletePokemonFavorite: (pokemonId: number) => void;
  addPokemonFavorite: (pokemon: PokemonResponse) => void;
};

export const usePokemonStore = create<PokemonState>()(
  devtools(
    persist(
      (set) => ({
        listPokemonsFavorite: [],
        pokemon: undefined,
        isShowPokemon: false,
        setPokemon: (pokemon: PokemonResponse) => {
          set({ pokemon, isShowPokemon: true });
        },
        clearPokemon: () => {
          set({ pokemon: undefined, isShowPokemon: false });
        },
        deletePokemonFavorite: (pokemonId: number) => {
          set((state) => {
            return {
              ...state,
              listPokemonsFavorite: state.listPokemonsFavorite.filter(
                (pokemon) => pokemon.id !== pokemonId,
              ),
            };
          });
        },
        addPokemonFavorite: (pokemon: PokemonResponse) => {
          set((state) => {
            return {
              ...state,
              listPokemonsFavorite: [...state.listPokemonsFavorite, pokemon],
            };
          });
        },
      }),
      {
        name: "pokemon-storage",
        partialize: (state) => ({
          listPokemonsFavorite: state.listPokemonsFavorite,
        }),
      },
    ),
  ),
);
