import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from './credentials'; // gitignored.

@Injectable()
export class NyTimesService {
  private url = 'https://api.nytimes.com/svc/topstories/v2/home.json';

  constructor(private http: HttpClient) {}

  async getHomeTopStories() {
    return await this.http.get(`${this.url}?api-key=${apiKey}`).toPromise();
  }
}
