import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

import { PokemonResponse } from '../models/pokemon';

@Service()
export class Pokemon {

  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=20'
    );
  }

}