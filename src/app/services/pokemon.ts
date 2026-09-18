import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

import { PokemonDetailResponse, PokemonResponse } from '../models/pokemon';

@Service()
export class Pokemon {

  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20'
    );
  }

  getDetail(url: string) {
    return this.http.get<PokemonDetailResponse>(url);
  }

}