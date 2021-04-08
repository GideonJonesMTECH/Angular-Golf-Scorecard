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

  playerCount = 8;
  halfPlayerNumb = this.playerCount - Math.round(this.playerCount / 2);
  courseData;
  teeBoxElement;
  html = '';
  frontPlayers = [];
  backPlayers = [];

  ngOnInit(): void {
    for (let i = 0; i < this.playerCount; i++) {
      if (i < this.halfPlayerNumb) {
        this.frontPlayers.push(i + 1);
      } else {
        this.backPlayers.push(i + 1);
      }
    }
    this.api.apiCall('11819').subscribe((data) => {
      let reformattedData = data as Data;
      this.setup(reformattedData.data as ComplexCourse);
    });
  }
  setup(data: ComplexCourse): void {
    this.courseData = data;
    for (let i = 0; i < this.courseData.holes[0].teeBoxes.length; i++) {
      this.html += this.makeTeeBoxRows(this.courseData, i);
    }
    this.findTeeBoxElem();
  }

  makeTeeBoxRows(data, teeBoxNumb): string {
    if (data.holes) {
      console.log(teeBoxNumb);
      // console.log(data.holes);
      let html = ``;
      let inTot = 0,
        outTot = 0;
      let holeCount = data.holes.length;
      let holesFront = holeCount - Math.round(holeCount / 2) - 1;
      // console.log(`Teebox ${teeBoxNumb}`);
      html += `<tr style="background-color:${data.holes[0].teeBoxes[teeBoxNumb].teeHexColor}`;
      if (data.holes[0].teeBoxes[teeBoxNumb].teeColorType == 'black')
        html += `; color: white`;
      html += `"><th style="text-transform: uppercase; text-align: center; padding: 15px; border: 1px solid black; border-collapse: collapse;">${data.holes[0].teeBoxes[teeBoxNumb].teeColorType}</th>`;
      for (let j = 0; j <= holesFront; j++) {
        html += `<td style="text-align: center; padding: 15px; border: 1px solid black; border-collapse: collapse;">${data.holes[j].teeBoxes[teeBoxNumb].yards}`;
        inTot += data.holes[j].teeBoxes[teeBoxNumb].yards;
      }
      html += `<th style="text-align: center; padding: 15px; border: 1px solid black; border-collapse: collapse;">${inTot}</th>`;
      for (let j = holesFront + 1; j < holeCount; j++) {
        html += `<td style="text-align: center; padding: 15px; border: 1px solid black; border-collapse: collapse;">${data.holes[j].teeBoxes[teeBoxNumb].yards}`;
        outTot += data.holes[j].teeBoxes[teeBoxNumb].yards;
      }
      html += `<th style="text-align: center; padding: 15px; border: 1px solid black; border-collapse: collapse;">${outTot}</th>`;
      html += `<th style="text-align: center; padding: 15px; border: 1px solid black; border-collapse: collapse;">${
        inTot + outTot
      }</th>
        </tr>`;
      return html;
    } else {
      this.makeTeeBoxRows(data, teeBoxNumb);
      return '';
    }
  }

  findTeeBoxElem(): void {
    const el = document.getElementById('courseTable');
    if (el) {
      console.log(el);
      sleep(500).then(() => {
        el.innerHTML += this.html;
      });
    } else {
      sleep(2000).then(() => {
        this.findTeeBoxElem();
      });
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
