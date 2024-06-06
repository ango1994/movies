import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MovieListComponent, SearchBarComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {}
