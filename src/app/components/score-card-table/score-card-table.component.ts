import { Component, OnInit } from '@angular/core';
import { ComplexCourse } from 'src/app/interfaces/complex-course';
import { Data } from 'src/app/interfaces/data';
import { GetAPIService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-score-card-table',
  templateUrl: './score-card-table.component.html',
  styleUrls: ['./score-card-table.component.scss'],
})
export class ScoreCardTableComponent implements OnInit {
  constructor(private api: GetAPIService) {}

  courseData;

  ngOnInit(): void {
    this.api.apiCall('18300').subscribe((data) => {
      console.warn('get API data', data);
      console.log(data);
      let reformattedData = data as Data;
      this.setup(reformattedData.data as ComplexCourse);
    });
  }
  setup(data: ComplexCourse): void {
    console.warn(data);
    this.courseData = data;
    console.warn(this.courseData.courseId);
  }
}
