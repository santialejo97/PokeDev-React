export interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;

  sprites: {
    front_default: string | null;
    front_shiny: string | null;
    other: {
      "official-artwork": {
        front_default: string | null;
        front_shiny: string | null;
      };
      dream_world: {
        front_default: string | null;
      };
      showdown: {
        front_default: string | null;
      };
    };
  };

  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];

  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];

  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];

  cries: {
    latest: string | null;
    legacy: string | null;
  };
  generation: {
    name: string | null;
  };
}
