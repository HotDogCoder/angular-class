import { Component, inject } from '@angular/core';

import { Pokemon } from '../../services/pokemon';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-table',
  imports: [AsyncPipe],
  templateUrl: './pokemon-table.html',
  styleUrl: './pokemon-table.scss'
})
export class PokemonTable {

  private readonly pokemon = inject(Pokemon);

  readonly pokemons$ = this.pokemon.getAll();

}