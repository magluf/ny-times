import { Component, OnInit } from '@angular/core';
import { NyTimesService } from './service/ny-times.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ny-times';
  topStories;

  constructor(private nyTimesService: NyTimesService) {}

  ngOnInit(): void {
    this.nyTimesService.getHomeTopStories().subscribe(data => (this.topStories = data));
    console.log(this.topStories);
  }
}
