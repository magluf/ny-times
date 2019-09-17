import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { HomeComponent } from './home/home.component';
import { StoryDetailsComponent } from './story-details/story-details.component';
import { LeavingComponent } from './leaving/leaving.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'Home' }
  },
  {
    path: 'top-stories',
    component: TopStoriesComponent,
    data: { animation: 'TopStories' }
  },
  {
    path: 'story-details/:section/:sectionIndex/:storyIndex',
    component: StoryDetailsComponent,
    data: { animation: 'StoryDetails' }
  },
  {
    path: 'leaving/:section/:sectionIndex/:storyIndex',
    component: LeavingComponent,
    data: { animation: 'Leaving' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
