import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { PokemonDetail } from './pages/pokemon-detail/pokemon-detail';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'about', component: About },
      { path: 'pokemon-detail', component: PokemonDetail }
    ]
  }
];