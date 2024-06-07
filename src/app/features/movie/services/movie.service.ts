import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { Search } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'https://api.themoviedb.org/3';
  private searchResult = new BehaviorSubject<Array<Movie>>([]);
  searchResult$ = this.searchResult.asObservable();
  private genres: { [key: string]: string } = {};
  constructor(private http: HttpClient) {
    this.getGenres();
  }

  private getGenres() {
    this.http
      .get<{ genres: { id: number; name: string }[] }>(
        'https://api.themoviedb.org/3/genre/movie/list?language=es'
      )
      .pipe(
        catchError((error) => {
          return of({ genres: [] });
        })
      )
      .subscribe((res) => {
        res.genres.forEach((genre) => {
          this.genres[genre.id] = genre.name;
        });
      });
  }

  searchByTitle(title: string) {
    this.http
      .get<Search>(
        `${this.apiUrl}/search/movie?query=${title}&include_adult=false&language=es-ES&page=1`
      )
      .pipe(
        map((res) => {
          res.results.forEach(
            (movie) =>
              (movie.genres = movie.genre_ids.map((id) => this.genres[id]))
          );
          return res;
        })
      )
      .subscribe((res) => {
        this.searchResult.next(res.results);
      });
  }
}
