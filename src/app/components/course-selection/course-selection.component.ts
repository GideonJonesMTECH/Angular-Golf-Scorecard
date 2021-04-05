import { Component, Input, OnInit } from '@angular/core';
import { SimpCourse } from 'src/app/interfaces/simp-course';

@Component({
  selector: 'app-course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.scss'],
})
export class CourseSelectionComponent implements OnInit {
  @Input()
  info: SimpCourse;

  constructor() {}

  ngOnInit(): void {}
}
