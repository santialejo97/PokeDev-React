import type { pokeType } from "../interfaces";

export const typeColors = {
  normal: { color: "bg-type-normal", title: "Normal" },
  fire: { color: "bg-type-fire", title: "Fuego" },
  water: { color: "bg-type-water", title: "Agua" },
  grass: { color: "bg-type-grass", title: "Planta" },
  electric: { color: "bg-type-electric", title: "Eléctrico" },
  ice: { color: "bg-type-ice", title: "Hielo" },
  fighting: { color: "bg-type-fighting", title: "Lucha" },
  poison: { color: "bg-type-poison", title: "Veneno" },
  ground: { color: "bg-type-ground", title: "Tierra" },
  flying: { color: "bg-type-flying", title: "Volador" },
  psychic: { color: "bg-type-psychic", title: "Psíquico" },
  bug: { color: "bg-type-bug", title: "Bicho" },
  rock: { color: "bg-type-rock", title: "Roca" },
  ghost: { color: "bg-type-ghost", title: "Fantasma" },
  dragon: { color: "bg-type-dragon", title: "Dragón" },
  dark: { color: "bg-type-dark", title: "Siniestro" },
  steel: { color: "bg-type-steel", title: "Acero" },
  fairy: { color: "bg-type-fairy", title: "Hada" },
};

export const useBadge = (type: pokeType) => {
  return {
    color: typeColors[type as keyof typeof typeColors].color,
    title: typeColors[type as keyof typeof typeColors].title,
  };
};
