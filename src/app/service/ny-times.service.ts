import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NyTimesService {
  private url = 'https://api.nytimes.com/svc/topstories/v2/home.json';
  private apiKey = '3LHAOnUFTRGnsksTOfJGpUGicAnbetwW';

  constructor(private http: HttpClient) { }

  async getHomeTopStories() {
    return await this.http.get(`${this.url}?api-key=${this.apiKey}`).toPromise();
  }
}
