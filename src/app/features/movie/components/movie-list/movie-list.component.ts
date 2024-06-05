import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Array<Movie> = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.searchResult$.subscribe((data) => {
      this.movies = data;
    });
  }
}
