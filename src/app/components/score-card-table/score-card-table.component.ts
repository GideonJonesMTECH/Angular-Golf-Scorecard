import { Component, OnInit } from '@angular/core';
import { GetAPIService } from '../../services/get-api.service';

@Component({
  selector: 'app-score-card-table',
  templateUrl: './score-card-table.component.html',
  styleUrls: ['./score-card-table.component.scss'],
})
export class ScoreCardTableComponent implements OnInit {
  constructor(private api: GetAPIService) {}

  ngOnInit(): void {
    this.api.apiCall('18300').subscribe((data) => {
      console.warn('get API data', data);
      let coursesInfo = data;
      console.log(coursesInfo);
    });
  }
}
