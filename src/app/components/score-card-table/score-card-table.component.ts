import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplexCourse } from 'src/app/interfaces/complex-course';
import { GetAPIService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-score-card-table',
  templateUrl: './score-card-table.component.html',
  styleUrls: ['./score-card-table.component.scss'],
})
export class ScoreCardTableComponent implements OnInit {
  constructor(private api: GetAPIService, private route: ActivatedRoute) {}

  courseData;
  playerCount = 1;
  frontPlayers = [];
  backPlayers = [];
  frontHoles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  backHoles = [10, 11, 12, 13, 14, 15, 16, 17, 18];
  teeBoxes = [];
  //Par
  parOut = 0;
  parIn = 0;

  ngOnInit(): void {
    this.apiCall();
  }

  apiCall(): void {
    const id = +this.route.snapshot.paramMap.get('courseId');
    this.playerCount = +this.route.snapshot.paramMap.get(
      'playerCount'
    ) as number;

    this.api.apiCall((id as unknown) as string).subscribe((data) => {
      console.warn('get API data', data);
      this.setup(data as ComplexCourse);
    });
  }

  setup(data): void {
    this.courseData = data.data;
    //#region PlayerCount Setup
    console.warn(
      `Setup recieved. Players: ${this.playerCount}. Data:`,
      this.courseData
    );
    let halfPlayers = Math.round(this.playerCount / 2);
    for (let i = 1; i <= this.playerCount; i++) {
      if (i <= halfPlayers) {
        this.frontPlayers.push(i);
      } else if (i > halfPlayers) {
        this.backPlayers.push(i);
      }
    }
    //#endregion

    //#region TeeBox Setup
    let teeBoxData = this.courseData.holes[0].teeBoxes;
    console.log(teeBoxData);
    for (let i = 0; i < teeBoxData.length; i++) {
      if (teeBoxData[i].teeColorType != null) {
        this.teeBoxes.push(i);
      }
    }
    console.log(this.teeBoxes);
    this.setEquals(this.courseData);
    //#endregion
  }

  updateScore(playerNumb): void {
    console.log(`Update Score triggered: Player ${playerNumb}`);
    let outTot = 0;
    let inTot = 0;
    for (let i = 1; i < this.courseData.holes.length + 1; i++) {
      let scoreElem = document.getElementById(
        `_${playerNumb}Hole${i}Score`
      ) as HTMLInputElement;
      let score = scoreElem.valueAsNumber;
      if (isNaN(score)) score = 0;
      console.log(score);
      if (i < this.backHoles[0]) {
        outTot += score;
      } else {
        inTot += score;
      }
    }
    document.getElementById(
      `_${playerNumb}Out`
    ).innerText = (outTot as unknown) as string;
    console.log(`OUT: ${outTot}`);

    document.getElementById(
      `_${playerNumb}In`
    ).innerText = (inTot as unknown) as string;
    console.log(`IN: ${inTot}`);

    document.getElementById(
      `_${playerNumb}Tot`
    ).innerText = ((((inTot as number) +
      outTot) as number) as unknown) as string;
  }

  setEquals(data): void {
    for (let i = 0; i < this.frontHoles[this.frontHoles.length - 1]; i++) {
      this.parOut += data.holes[i].teeBoxes[0].par;
    }
    for (
      let i = this.backHoles[0] - 1;
      i < this.backHoles[this.backHoles.length - 1];
      i++
    ) {
      this.parIn += data.holes[i].teeBoxes[0].par;
    }
    console.log(
      `Par Out: ${this.parOut} | Par In: ${this.parIn} | Par Total: ${
        this.parIn + this.parOut
      }`
    );
  }
}
