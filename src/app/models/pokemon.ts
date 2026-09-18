export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string | null;
  };
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  abilities: {
    slot: number;
    is_hidden: boolean;
    ability: { name: string; url: string };
  }[];
  stats: {
    base_stat: number;
    stat: { name: string; url: string };
  }[];
}