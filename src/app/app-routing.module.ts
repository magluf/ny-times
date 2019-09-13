import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { HomeComponent } from './home/home.component';
import { StoryDetailsComponent } from './story-details/story-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent
  },
  {
    path: 'story-details/:section/:sectionIndex/:storyIndex',
    component: StoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
