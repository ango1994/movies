import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Movie } from '../interfaces/movie';
import { Search } from '../interfaces/search';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'https://api.themoviedb.org/3';
  private searchResult = new BehaviorSubject<Array<Movie>>([]);
  searchResult$ = this.searchResult.asObservable();
  constructor(private http: HttpClient) {}

  searchByTitle(title: string) {
    this.http
      .get<Search>(
        `${this.apiUrl}/search/movie?query=${title}&include_adult=false&language=es-ES&page=1`
      )
      .subscribe((res) => {
        this.searchResult.next(res.results);
      });
  }
}
