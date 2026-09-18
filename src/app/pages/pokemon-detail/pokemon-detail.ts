import { Component, inject } from '@angular/core';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';

import { Pokemon } from '../../services/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  imports: [AsyncPipe, TitleCasePipe, RouterLink],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.scss'
})
export class PokemonDetail {

  private readonly route = inject(ActivatedRoute);
  private readonly pokemon = inject(Pokemon);

  readonly detail$ = this.route.queryParamMap.pipe(
    switchMap(params => this.pokemon.getDetail(params.get('url')!))
  );

}
