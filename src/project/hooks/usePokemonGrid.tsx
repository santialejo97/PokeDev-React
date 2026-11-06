import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { pokemonListAction } from "../actions/pokemonList.action";
import { useSearchParams } from "react-router";
import { pokemonDetailAction } from "../actions/pokemonDetail.action";

export const usePokemonList = () => {
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get("query") || undefined;
  const isSearching = querySearch !== undefined;

  const queryList = useInfiniteQuery({
    queryKey: ["pokemons", "list"],
    queryFn: ({ pageParam }) => pokemonListAction(10, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) {
        return undefined;
      }

      return allPages.length * 10;
    },

    staleTime: 1000 * 60 * 5,
    enabled: !isSearching,
  });

  const queryDetail = useQuery({
    queryKey: ["pokemons", "detail", querySearch],
    queryFn: () => pokemonDetailAction(querySearch!),
    staleTime: 1000 * 60 * 5,
    enabled: isSearching,
    retry: false,
  });

  return {
    queryList,
    queryDetail,
    isSearching,
    querySearch,
  };
};

export const usePokemonListTable = () => {
  const query = useQuery({
    queryKey: ["pokemons", "table"],
    queryFn: () => pokemonListAction(),
    staleTime: 1000 * 60 * 5,
  });

  return query;
};
