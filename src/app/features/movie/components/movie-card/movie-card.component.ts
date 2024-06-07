import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { RouterModule } from '@angular/router';
import { YearPipe } from '../../../../core/pipes/year.pipe';
import { PosterPipe } from '../../../../core/pipes/poster.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterModule, YearPipe, PosterPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css',
})
export class MovieCardComponent {
  @Input() movie: Movie = {} as Movie;
}
