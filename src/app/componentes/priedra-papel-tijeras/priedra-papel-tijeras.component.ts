import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-priedra-papel-tijeras',
  templateUrl: './priedra-papel-tijeras.component.html',
  styleUrls: ['./priedra-papel-tijeras.component.css']
})
export class PriedraPapelTijerasComponent implements OnInit {

  constructor() { }
// tslint:disable-next-line: member-ordering
  scores = [0 , 0]; // store the scores. index 0 is you. index 1 is player 2.
// tslint:disable-next-line: member-ordering
  weapons = [
    'rock',
    'paper',
    'scissors'
  ];
  playerSelected = -1;
  enemySelected  = -1;
  loading = false; // we're going to show a loading spinner when waiting for the enemy pick.
  isResultShow = false;
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0;

  ngOnInit() {
  }
  pick( weapon: number): void {
    // return immediately when still loading. You don't want
    // the user to spam the button.
    if (this.loading) { return; }
    this.loading = true;
    this.playerSelected = weapon;

   // create a delay to simulate enemy's turn.
    setTimeout( () => {
      this.loading = false;
      // generate a number from 0 -2
      const randomNum =  Math.floor(Math.random() * 3 ) ;
      this.enemySelected = randomNum;
      this.checkResult();
      this.isResultShow = true;
    },  Math.floor(Math.random()  * 500 ) + 200);
  }

  reset(): void {
   this.scores = [0, 0];
  }
  checkResult(): void {
    const playerPick = this.playerSelected;
    const enemyPick = this.enemySelected;
   // if you and the enemy have the same weapon, then it is a tie.
// tslint:disable-next-line: triple-equals
    if ( playerPick ==  enemyPick) {
     this.theResult = 2;
// tslint:disable-next-line: triple-equals
   } else if ( (playerPick - enemyPick + 3) % 3 == 1)    {
       // YOU WIN
       this.theResult = 0;
       this.scores[0] = this.scores[0] + 1;
     } else {
       // YOU LOSE
       this.theResult = 1;
       this.scores[1] = this.scores[1] + 1;
     }
  }
}
