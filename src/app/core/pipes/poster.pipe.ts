import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../features/movie/interfaces/movie';

@Pipe({
  name: 'poster',
  standalone: true,
})
export class PosterPipe implements PipeTransform {
  transform(posterPath: string, ...args: unknown[]): unknown {
    if (posterPath) {
      return 'https://image.tmdb.org/t/p/w92/' + posterPath;
    } else {
      return 'assets/no_image.webp';
    }
  }
}
