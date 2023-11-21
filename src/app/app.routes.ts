import {Routes} from '@angular/router';
import {SearchComponent} from "./features/movie/infraestructure/ui/search/search.component";

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./features/movie/infraestructure/ui/search/search.component').then(c => c.SearchComponent)
  }
];
