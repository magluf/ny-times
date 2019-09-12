import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '../service/ny-times.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  topStories;
  topStoriesBySection;
  constructor(private router: Router, private nyTimesService: NyTimesService) {}

  async ngOnInit(): Promise<any> {
    await this.getTopStories();
    this.topStoriesBySection = this.groupTopStoriesBySection(this.topStories);
    localStorage.setItem('topStoriesBySection', JSON.stringify(this.topStoriesBySection));
  }

  goToTopStories() {
    this.router.navigate(['top-stories']);
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
    const storiesBySection = [];

    for (const story of topStories) {
      if (!sectionArray.includes(story.section)) {
        sectionArray.push(story.section);
      }
    }

    for (const section of sectionArray) {
      storiesBySection.push(topStories.filter(el => el.section === section));
    }

    return storiesBySection;
  }
}
