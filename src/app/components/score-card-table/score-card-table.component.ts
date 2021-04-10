import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplexCourse } from 'src/app/interfaces/complex-course';
import { Data } from 'src/app/interfaces/data';
import { GetAPIService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-score-card-table',
  templateUrl: './score-card-table.component.html',
  styleUrls: ['./score-card-table.component.scss'],
})
export class ScoreCardTableComponent implements OnInit {
  constructor(private api: GetAPIService, private route: ActivatedRoute) {}

  //#region variables
  playerCount = 8;
  halfPlayerNumb = 4;
  courseData;
  teeBoxElement;
  html = '';
  frontPlayers = [];
  backPlayers = [];
  frontHoles;

  //#region Player1Vars
  OneScore1;
  OneScore2;
  OneScore3;
  OneScore4;
  OneScore5;
  OneScore6;
  OneScore7;
  OneScore8;
  OneScore9;
  OneScore10;
  OneScore11;
  OneScore12;
  OneScore13;
  OneScore14;
  OneScore15;
  OneScore16;
  OneScore17;
  OneScore18;
  OneoutTotal;
  OneinTotal;
  Onetotal;
  //#endregion
  //#region Player2Vars
  TwoScore1;
  TwoScore2;
  TwoScore3;
  TwoScore4;
  TwoScore5;
  TwoScore6;
  TwoScore7;
  TwoScore8;
  TwoScore9;
  TwoScore10;
  TwoScore11;
  TwoScore12;
  TwoScore13;
  TwoScore14;
  TwoScore15;
  TwoScore16;
  TwoScore17;
  TwoScore18;
  TwooutTotal;
  TwoinTotal;
  Twototal;
  //#endregion
  //#region Player3Vars
  ThreeScore1;
  ThreeScore2;
  ThreeScore3;
  ThreeScore4;
  ThreeScore5;
  ThreeScore6;
  ThreeScore7;
  ThreeScore8;
  ThreeScore9;
  ThreeScore10;
  ThreeScore11;
  ThreeScore12;
  ThreeScore13;
  ThreeScore14;
  ThreeScore15;
  ThreeScore16;
  ThreeScore17;
  ThreeScore18;
  ThreeoutTotal;
  ThreeinTotal;
  Threetotal;
  //#endregion
  //#region Player4Vars
  FourScore1;
  FourScore2;
  FourScore3;
  FourScore4;
  FourScore5;
  FourScore6;
  FourScore7;
  FourScore8;
  FourScore9;
  FourScore10;
  FourScore11;
  FourScore12;
  FourScore13;
  FourScore14;
  FourScore15;
  FourScore16;
  FourScore17;
  FourScore18;
  FouroutTotal;
  FourinTotal;
  Fourtotal;
  //#endregion
  //#region Player5Vars
  FiveScore1;
  FiveScore2;
  FiveScore3;
  FiveScore4;
  FiveScore5;
  FiveScore6;
  FiveScore7;
  FiveScore8;
  FiveScore9;
  FiveScore10;
  FiveScore11;
  FiveScore12;
  FiveScore13;
  FiveScore14;
  FiveScore15;
  FiveScore16;
  FiveScore17;
  FiveScore18;
  FiveoutTotal;
  FiveinTotal;
  Fivetotal;
  //#endregion
  //#region Player6Vars
  SixScore1;
  SixScore2;
  SixScore3;
  SixScore4;
  SixScore5;
  SixScore6;
  SixScore7;
  SixScore8;
  SixScore9;
  SixScore10;
  SixScore11;
  SixScore12;
  SixScore13;
  SixScore14;
  SixScore15;
  SixScore16;
  SixScore17;
  SixScore18;
  SixoutTotal;
  SixinTotal;
  Sixtotal;
  //#endregion
  //#region Player7Vars
  SevenScore1;
  SevenScore2;
  SevenScore3;
  SevenScore4;
  SevenScore5;
  SevenScore6;
  SevenScore7;
  SevenScore8;
  SevenScore9;
  SevenScore10;
  SevenScore11;
  SevenScore12;
  SevenScore13;
  SevenScore14;
  SevenScore15;
  SevenScore16;
  SevenScore17;
  SevenScore18;
  SevenoutTotal;
  SeveninTotal;
  Seventotal;
  //#endregion
  //#region Player8Vars
  EightScore1;
  EightScore2;
  EightScore3;
  EightScore4;
  EightScore5;
  EightScore6;
  EightScore7;
  EightScore8;
  EightScore9;
  EightScore10;
  EightScore11;
  EightScore12;
  EightScore13;
  EightScore14;
  EightScore15;
  EightScore16;
  EightScore17;
  EightScore18;
  EightoutTotal;
  EightinTotal;
  Eighttotal;
  //#endregion

  //#endregion

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('courseId');
    this.playerCount = +this.route.snapshot.paramMap.get('playerCount');
    this.halfPlayerNumb = this.playerCount - Math.round(this.playerCount / 2);
    for (let i = 1; i < this.playerCount + 1; i++) {
      if (i < this.halfPlayerNumb) {
        switch (i) {
          case 1:
            this.frontPlayers.push('One');
            break;
          case 2:
            this.frontPlayers.push('Two');
            break;
          case 3:
            this.frontPlayers.push('Three');
            break;
          case 4:
            this.frontPlayers.push('Four');
            break;
          case 5:
            this.frontPlayers.push('Five');
            break;
          case 6:
            this.frontPlayers.push('Six');
            break;
          case 7:
            this.frontPlayers.push('Seven');
            break;
          case 8:
            this.frontPlayers.push('Eight');
            break;
          default:
            break;
        }
      } else {
        switch (i) {
          case 1:
            this.frontPlayers.push('One');
            break;
          case 2:
            this.frontPlayers.push('Two');
            break;
          case 3:
            this.frontPlayers.push('Three');
            break;
          case 4:
            this.frontPlayers.push('Four');
            break;
          case 5:
            this.frontPlayers.push('Five');
            break;
          case 6:
            this.frontPlayers.push('Six');
            break;
          case 7:
            this.frontPlayers.push('Seven');
            break;
          case 8:
            this.frontPlayers.push('Eight');
            break;
          default:
            break;
        }
      }
    }
    this.api.apiCall((id as unknown) as string).subscribe((data) => {
      let reformattedData = data as Data;
      this.setup(reformattedData.data as ComplexCourse);
    });
  }

  setup(data: ComplexCourse): void {
    this.courseData = data;
    this.frontHoles = data.holes.length - Math.round(data.holes.length / 2) - 1;
    for (let i = 0; i < this.courseData.holes[0].teeBoxes.length; i++) {
      if (this.courseData.holes[0].teeBoxes[i].teeColorType != null) {
        this.html += this.makeTeeBoxRows(this.courseData, i);
      }
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
      sleep(500).then(() => {
        el.innerHTML += this.html;
      });
    } else {
      sleep(2000).then(() => {
        this.findTeeBoxElem();
      });
    }
  }

  updateScore(): void {
    console.log(`row changed!`);
    for (let i = this.playerCount; i > 0; i--) {
      let outScore = 0;
      let inScore = 0;
      for (let j = 0; j < this.courseData.holes.length; j++) {
        if (j < 9) {
          let score = document.getElementById(`${i}Score${j}`).innerText;
          score == null
            ? (outScore += 0)
            : (outScore += (score as unknown) as number);
        } else {
          let score = document.getElementById(`${i}Score${j}`).innerText;
          score == null
            ? (inScore += 0)
            : (inScore += (score as unknown) as number);
        }
      }
      document.getElementById(`${i}outTotal`).innerText = outScore + '';
      document.getElementById(`${i}inTotal`).innerText = inScore + '';
      document.getElementById(`${i}total`).innerText = inScore + outScore + '';
    }
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
