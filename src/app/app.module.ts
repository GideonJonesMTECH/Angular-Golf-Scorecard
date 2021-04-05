import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseSelectComponent } from './components/course-select/course-select.component';
import { ScoreCardTableComponent } from './components/score-card-table/score-card-table.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

import { MaterialModule } from './modules/material.module';

import { HttpClientModule } from '@angular/common/http';
import { CourseSelectionComponent } from './components/course-selection/course-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseSelectComponent,
    ScoreCardTableComponent,
    TopNavbarComponent,
    CourseSelectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MaterialModule,
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
