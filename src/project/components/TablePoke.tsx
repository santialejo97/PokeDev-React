import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { PokemonResponse } from "../interfaces/pokemonResponse.interface";
import { BadgeCustomerPoke } from "./BadgeCustomerPoke";
import type { pokeType } from "../interfaces";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { usePokemonStore } from "../store/pokemon.store";

interface TablePokeProp {
  pokemons: PokemonResponse[];
}

export const TablePoke = ({ pokemons }: TablePokeProp) => {
  const { setPokemon } = usePokemonStore();

  return (
    <>
      <Table className="">
        <TableHeader>
          <TableRow className=" bg-poke-fire-accent-table-header rounded-lg ">
            <TableHead>ESPÈCIMEN</TableHead>
            <TableHead>TIPOS</TableHead>
            <TableHead>PS</TableHead>
            <TableHead>ATQ</TableHead>
            <TableHead>DEF</TableHead>
            <TableHead>AT.ESP</TableHead>
            <TableHead>DEF.ESP</TableHead>
            <TableHead>VEL</TableHead>
            <TableHead className="text-right">ACCIONES</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pokemons &&
            pokemons.map((pokemon) => (
              <TableRow key={pokemon.id}>
                <TableCell className="font-medium">{pokemon.name}</TableCell>
                <TableCell>
                  {pokemon.types.map((type) => (
                    <BadgeCustomerPoke
                      type={type.type.name as pokeType}
                      key={`${type.type.name}-${pokemon.id}`}
                    />
                  ))}
                </TableCell>
                {pokemon.stats.map((stat) => (
                  <TableCell key={stat.stat.name}>{stat.base_stat}</TableCell>
                ))}

                <TableCell className="text-right">
                  <Button
                    onClick={() => setPokemon(pokemon)}
                    variant="outline"
                    size="sm"
                  >
                    <Eye />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};
