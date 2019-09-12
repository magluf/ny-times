import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NyTimesService } from './service/ny-times.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HomeComponent } from './home/home.component';
import { TopStoriesComponent } from './top-stories/top-stories.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, TopStoriesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AngularSvgIconModule, BrowserAnimationsModule],
  providers: [NyTimesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
