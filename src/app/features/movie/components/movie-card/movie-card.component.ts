import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie: Movie = {} as Movie;
}
