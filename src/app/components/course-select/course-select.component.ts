import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesList } from 'src/app/interfaces/courses-list';
import { GetAPIService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss'],
})
export class CourseSelectComponent implements OnInit {
  constructor(private router: Router, private api: GetAPIService) {}

  coursesInfo;

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      console.warn('get API data', data);
      this.setup(data as CoursesList);
    });
  }

  setup(data: CoursesList): void {
    console.warn(data.courses);
    this.coursesInfo = data.courses;
  }

  redirectToScoreCard() {
    console.log();
  }

  onCourseSelect() {
    console.log('Course Selected');
    let courseButton = document.getElementById('courseSelectionButton');
    console.log(courseButton);
    courseButton.removeAttribute('disabled');
  }
}
