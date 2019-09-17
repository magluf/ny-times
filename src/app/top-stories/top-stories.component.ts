import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NyTimesService } from '../service/ny-times.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html'
})
export class TopStoriesComponent implements OnInit {
  topStoriesBySection = [];

  @ViewChild('topStoriesPanel', { static: false }) private topStoriesPanel: ElementRef;

  constructor(private router: Router) {}

  async ngOnInit() {
    this.topStoriesBySection = JSON.parse(localStorage.getItem('topStoriesBySection'));
    console.log(this.topStoriesBySection);
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

  goToStoryDetails(section, i, j) {
    section = section.replace(/\s+/g, '-').toLowerCase();
    section = section.replace(/\./g, '');
    this.router.navigate(['story-details', section, i, j]);
  }

  goToHome() {
    this.router.navigate(['home']);
  }
}
