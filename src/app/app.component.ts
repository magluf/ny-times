import { Component, OnInit } from '@angular/core';
import { NyTimesService } from './service/ny-times.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ny-times';
  topStories = [];
  groupedTopStoriesBySection = {};

  constructor(private nyTimesService: NyTimesService) {}

  async ngOnInit() {
    await this.getTopStories();
    this.groupedTopStoriesBySection = this.groupTopStoriesBySection(this.topStories);
  }

  async getTopStories() {
    let res: any;
    await this.nyTimesService
      .getHomeTopStories()
      .then(data => {
        res = data;
        this.topStories = res.results;
      })
      .catch(error => console.log(error));
  }

  groupTopStoriesBySection(topStories) {
    const sectionArray = [];
    const storiesBySection = {};

    for (const story of topStories) {
      if (!sectionArray.includes(story.section)) {
        sectionArray.push(story.section);
      }
    }

    for (const section of sectionArray) {
      storiesBySection[section] = topStories.filter(el => el.section === section);
    }

    return storiesBySection;
  }
}
