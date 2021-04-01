import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseSelectComponent } from './components/course-select/course-select.component';
import { ScoreCardTableComponent } from './components/score-card-table/score-card-table.component';
import { ScoreCardPlayerRowComponent } from './components/score-card-player-row/score-card-player-row.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';

import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CourseSelectComponent,
    ScoreCardTableComponent,
    TopNavbarComponent,
    ScoreCardPlayerRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
