import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-story-details',
  templateUrl: './story-details.component.html'
})
export class StoryDetailsComponent implements OnInit {
  story;
  constructor(@Inject(DOCUMENT) private document: Document, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.story = JSON.parse(localStorage.getItem('topStoriesBySection'))[this.route.snapshot.params.sectionIndex][
      this.route.snapshot.params.storyIndex
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(window.innerWidth);
  }

  isMobile() {
    return window.innerWidth <= 800;
  }

  goToTopStories() {
    this.router.navigate(['top-stories']);
  }

  goToStory(url) {
    window.open(url, '_blank');
  }
}
