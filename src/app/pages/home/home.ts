import { Component, signal } from '@angular/core';
import { PokemonTable } from '../../components/pokemon-table/pokemon-table';

@Component({
  selector: 'app-home',
  imports: [
    PokemonTable
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }

  dummy_method() {
    return "This is a dummy method in the Home component.";
  }

  dummy_property = "This is a dummy property in the Home component.";

}