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
    let Filled1 = false;
    let Filled2 = false;
    let Filled3 = false;
    let Filled4 = false;
    let Filled5 = false;
    let Filled6 = false;
    let Filled7 = false;
    let Filled8 = false;
    let Filled9 = false;
    let Filled10 = false;
    let Filled11 = false;
    let Filled12 = false;
    let Filled13 = false;
    let Filled14 = false;
    let Filled15 = false;
    let Filled16 = false;
    let Filled17 = false;
    let Filled18 = false;
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
      if (score != 0) {
        switch (i) {
          case 1:
            Filled1 = true;
            break;
          case 2:
            Filled2 = true;
            break;
          case 3:
            Filled3 = true;
            break;
          case 4:
            Filled4 = true;
            break;
          case 5:
            Filled5 = true;
            break;
          case 6:
            Filled6 = true;
            break;
          case 7:
            Filled7 = true;
            break;
          case 8:
            Filled8 = true;
            break;
          case 9:
            Filled9 = true;
            break;
          case 10:
            Filled10 = true;
            break;
          case 11:
            Filled11 = true;
            break;
          case 12:
            Filled12 = true;
            break;
          case 13:
            Filled13 = true;
            break;
          case 14:
            Filled14 = true;
            break;
          case 15:
            Filled15 = true;
            break;
          case 16:
            Filled16 = true;
            break;
          case 17:
            Filled17 = true;
            break;
          case 18:
            Filled18 = true;
            break;
          default:
            break;
        }
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

    if (
      Filled1 &&
      Filled2 &&
      Filled3 &&
      Filled4 &&
      Filled5 &&
      Filled6 &&
      Filled7 &&
      Filled8 &&
      Filled9 &&
      Filled10 &&
      Filled11 &&
      Filled12 &&
      Filled13 &&
      Filled14 &&
      Filled15 &&
      Filled16 &&
      Filled17 &&
      Filled18
    ) {
      this.getResponse(playerNumb);
    }
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

  getResponse(playerNumb): void {
    let playerResponseElem = document.getElementById('ResponseText');
    let playerNameEl = document.getElementById(
      `Player${playerNumb}Name`
    ) as HTMLInputElement;
    let playerName = playerNameEl.value as string;
    if (playerName == '') {
      playerName = `Player ${playerNumb}`;
    }
    let playerTotal = (document.getElementById(`_${playerNumb}Tot`)
      .innerText as unknown) as number;
    let parTotal = (document.getElementById('parTot')
      .innerText as unknown) as number;
    let playerScore = playerTotal - parTotal;
    let responseLine = '';
    responseLine += `Good job ${playerName}! You finished! Your total was ${playerTotal} , compared to the Par, ${parTotal}. Your score (your total minus the par) is ${playerScore}!`;
    if (playerScore > 0) {
      responseLine += ' Better Luck Next Time!';
    } else if (playerScore == 0) {
      responseLine += ' Right on Target!';
    } else {
      responseLine += " Wow, that's amazing!";
    }
    if (playerResponseElem.innerText.includes(responseLine)) {
      return;
    } else {
      playerResponseElem.innerText += responseLine;
      playerResponseElem.innerHTML += `<br>`;
    }
  }
}
