import { Component, OnInit } from '@angular/core';
import { NyTimesService } from '../service/ny-times.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html'
})
export class TopStoriesComponent implements OnInit {
  topStoriesBySection = [];

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

  goToHome() {
    this.router.navigate(['home']);
  }
}
