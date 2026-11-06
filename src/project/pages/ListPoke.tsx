import { LayoutGrid, TableOfContents } from "lucide-react";
import { GridPoke } from "../components/GridPoke";
import { useRef, useState } from "react";
import { useGSAP, gsap, cn } from "@/lib";
import { TablePoke } from "../components/TablePoke";
import { usePokemonList } from "../hooks/usePokemonGrid";
import { usePokemonStore } from "../store/pokemon.store";
import { CardDetailPoke } from "../components";

export const ListPoke = () => {
  const { isShowPokemon, pokemon } = usePokemonStore();
  const { queryDetail, queryList, isSearching } = usePokemonList();
  const [mode, setMode] = useState<number>(1);
  const containerGrid = useRef<HTMLDivElement>(null);

  const { data } = queryList;
  const { data: pokemonsDetail } = queryDetail;
  const pokemons =
    mode == 1 || !isSearching ? data?.pages.flat() : pokemonsDetail;

  const changeMode = (mode: number) => {
    setMode(mode);
  };

  useGSAP(
    () => {
      if (!containerGrid.current) return;
      gsap.fromTo(
        containerGrid.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
      );
    },
    {
      dependencies: [mode],
      revertOnUpdate: true,
    },
  );

  return (
    <>
      <div className="flex flex-col gap-2 min-h-0 h-full">
        <div className="flex gap-1 shrink-0">
          <button
            className="cursor-pointer border p-2 rounded flex gap-0.5"
            onClick={() => changeMode(1)}
          >
            <LayoutGrid />
            cartas
          </button>
          <button
            className="cursor-pointer border p-2 rounded flex gap-0.5"
            onClick={() => changeMode(2)}
          >
            <TableOfContents />
            Tabla
          </button>
        </div>

        {/* Seccion del grid de las tarjetas de pokemons */}
        <div className="flex min-h-0 flex-1 gap-4 overflow-hidden">
          <div
            ref={containerGrid}
            className={cn(
              "min-h-0 flex-4 min-w-0 p-3",
              "overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden",
            )}
          >
            {mode == 1 ? (
              <GridPoke
                queryDetail={queryDetail}
                isSearching={isSearching}
                queryList={queryList}
              />
            ) : (
              <TablePoke pokemons={pokemons!} />
            )}
          </div>
          {isShowPokemon && pokemon && <CardDetailPoke pokemon={pokemon} />}
        </div>
      </div>
    </>
  );
};
