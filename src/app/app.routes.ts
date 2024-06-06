import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FilmComponent } from './features/movie/pages/film/film.component';
import { SearchComponent } from './features/movie/pages/search/search.component';

export const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'film/:title', component: FilmComponent },
];
