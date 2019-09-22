import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leaving',
  templateUrl: './leaving.component.html'
})
export class LeavingComponent implements OnInit {
  story;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.story = JSON.parse(localStorage.getItem('topStoriesBySection'))[this.route.snapshot.params.sectionIndex][
      this.route.snapshot.params.storyIndex
    ];
    this.waitALittle();
  }

  goToTopStories() {
    this.router.navigate(['top-stories']);
  }

  waitALittle() {
    setTimeout(() => {
      this.goToStory(this.story.url);
      this.goToTopStories();
    }, 2500);
  }

  goToStory(url) {
    window.open(url, '_blank');
  }
}
