import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '../service/ny-times.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html'
})
export class TopStoriesComponent implements OnInit {
  topStories = [];
  topStoriesBySection = [];

  constructor(private nyTimesService: NyTimesService, private router: Router) {}

  async ngOnInit() {
    await this.getTopStories();
    this.topStoriesBySection = this.groupTopStoriesBySection(this.topStories);
    console.log(this.topStoriesBySection);
    this.testingTopStoriesArray();
  }

  testingTopStoriesArray() {
    for (const stories of this.topStoriesBySection) {
      for (const story of stories) {
        console.log(story);
      }
    }
  }

  toggleAccordian(event, index) {
    const element = event.target;
    element.classList.toggle('active');
    if (this.topStoriesBySection[index].isActive) {
      this.topStoriesBySection[index].isActive = false;
    } else {
      this.topStoriesBySection[index].isActive = true;
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
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

  goToHome() {
    this.router.navigate(['home']);
  }
}
