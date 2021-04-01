import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseSelectComponent } from '../components/course-select/course-select.component';
import { ScoreCardTableComponent } from '../components/score-card-table/score-card-table.component';

const routes: Routes = [
  {path: '', redirectTo: 'course-select', pathMatch: 'full'},
  {path: 'course-select', component: CourseSelectComponent},
  {path: 'score-card', component: ScoreCardTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
