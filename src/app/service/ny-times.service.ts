import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './credentials'; // gitignored.

@Injectable()
export class NyTimesService {
  private url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';

  constructor(private http: HttpClient) {}

  getHomeTopStories() {
    return this.http.get(`${this.url}/${apiKey}`);
  }
}
