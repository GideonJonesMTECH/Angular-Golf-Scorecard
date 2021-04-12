import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesList } from 'src/app/interfaces/courses-list';
import { GetAPIService } from 'src/app/services/get-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-select',
  templateUrl: './course-select.component.html',
  styleUrls: ['./course-select.component.scss'],
})
export class CourseSelectComponent implements OnInit {
  constructor(private router: Router, private api: GetAPIService) {}

  coursesInfo;
  selectedCourse = false;
  selectedPlayers = false;

  ngOnInit(): void {
    this.api.apiCall().subscribe((data) => {
      console.warn('get API data', data);
      this.setup(data as CoursesList);
    });
  }

  goToScoreCard(data): void {
    console.log(data);
    this.router.navigateByUrl(
      `score-card/${data.courseForm}/${data.playerCount}`
    );
  }

  setup(data: CoursesList): void {
    console.warn(data.courses);
    this.coursesInfo = data.courses;
  }

  onCourseSelect() {
    this.selectedCourse = true;
    console.log('Course Selected');
    if (this.selectedCourse && this.selectedPlayers) {
      let courseButton = document.getElementById('courseSelectionButton');
      courseButton.removeAttribute('disabled');
    }
  }
  onPlayerSelect() {
    this.selectedPlayers = true;
    console.log('Player Selected');
    if (this.selectedCourse && this.selectedPlayers) {
      let courseButton = document.getElementById('courseSelectionButton');
      courseButton.removeAttribute('disabled');
    }
  }
}
