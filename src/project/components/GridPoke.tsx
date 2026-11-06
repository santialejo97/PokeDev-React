import { useEffect, useRef } from "react";
import { Spinner } from "@/components/ui/spinner";
import { CardPoke } from "./CardPoke";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";
import type {
  InfiniteData,
  UseInfiniteQueryResult,
  UseQueryResult,
} from "@tanstack/react-query";

interface GridPokeProp {
  queryList: UseInfiniteQueryResult<
    InfiniteData<PokemonResponse[], unknown>,
    Error
  >;
  isSearching: boolean;
  queryDetail: UseQueryResult<PokemonResponse[], Error>;
}

export const GridPoke = ({
  isSearching,
  queryDetail,
  queryList,
}: GridPokeProp) => {
  const {
    hasNextPage,
    isFetching,
    isLoading,
    fetchNextPage,
    data,
    isError,
    isFetchingNextPage,
  } = queryList;
  const {
    data: pokemon,
    isLoading: lodingPokemon,
    isError: errorPokemon,
  } = queryDetail;

  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasNextPage || isFetching) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);
  }, [fetchNextPage, hasNextPage, isFetching]);

  const pokemons = data?.pages.flat();

  if (isLoading || lodingPokemon) {
    return (
      <div className="w-full flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (isError || errorPokemon) {
    return (
      <div className="w-full flex items-center justify-center">
        Error consultando pokemones
      </div>
    );
  }

  if (isSearching) {
    return (
      <section>
        <div className="grid lg:grid-cols-5 gap-3 md:grid-cols-4 sm:grid-cols-2">
          {pokemon?.map((pokemon) => (
            <CardPoke key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="grid lg:grid-cols-5 gap-3 md:grid-cols-4 sm:grid-cols-2">
        {pokemons?.map((pokemon) => (
          <CardPoke key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div ref={sentinelRef} className="h-10 flex items-center justify-center">
        {isFetchingNextPage && <Spinner />}
      </div>
    </section>
  );
};
