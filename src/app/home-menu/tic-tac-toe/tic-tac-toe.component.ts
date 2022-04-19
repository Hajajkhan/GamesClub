import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {

  //main array where we are applying functionality
  turns: any[] = [
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
    { text: '', disabled:false},
  ];

  //pushing an element on click of any button
  resultant: any[] = [];

  //variables that are bind in html side with *ngIf
  hideX: boolean = false;
  hideXturn: boolean = true;
  hideOturn: boolean = false;
  hideO: boolean = false;
  hideDiv: boolean = false;
  inputDisabled: boolean = false;
  resetButton: boolean = false;
  hideTie: boolean = false;

  //globally variables
  initialTurn = 0;
  firstPlayer: string = 'First Player';
  secondPlayer: string = 'Second Player';
  
  constructor() {}

  ngOnInit(): void {}

  //main Function where applying functionality on every move
  setMove(index: any): void {
    this.initialTurn++;
    this.initialTurn <= 9;
    if (this.initialTurn % 2 == 1) {
      this.turns[index].text = 'X';
      this.turns[index].disabled=true;
      this.resultant.splice(index, 0, 'X');
      this.hideXturn = false;
      this.hideOturn = true;
    } else 
      if (this.initialTurn % 2 == 0) {
      this.turns[index].text = 'O';
      this.turns[index].disabled=true;
      this.resultant.splice(index, 0, 'O');
      this.hideXturn = true;
      this.hideOturn = false;
    }else 
    if (
      (this.turns[0].text == 'X' &&
        this.turns[1].text == 'X' &&
        this.turns[2].text == 'X') ||
      (this.turns[3].text == 'X' &&
        this.turns[4].text == 'X' &&
        this.turns[5].text == 'X') ||
      (this.turns[6].text == 'X' &&
        this.turns[7].text == 'X' &&
        this.turns[8].text == 'X') ||
      (this.turns[0].text == 'X' &&
        this.turns[3].text == 'X' &&
        this.turns[6].text == 'X') ||
      (this.turns[1].text == 'X' &&
        this.turns[4].text == 'X' &&
        this.turns[7].text == 'X') ||
      (this.turns[2].text == 'X' &&
        this.turns[5].text == 'X' &&
        this.turns[8].text == 'X') ||
      (this.turns[0].text == 'X' &&
        this.turns[4].text == 'X' &&
        this.turns[8].text == 'X') ||
      (this.turns[2].text == 'X' &&
        this.turns[4].text == 'X' &&
        this.turns[6].text == 'X')
    ) {
      this.hideX = true;
      this.resetButton = true;
      this.hideOturn = false;
      this.turns.forEach(data=>{
        data.disabled=true;
      })    
      } else 
      if (
      (this.turns[0].text == 'O' &&
        this.turns[1].text == 'O' &&
        this.turns[2].text == 'O') ||
      (this.turns[3].text == 'O' &&
        this.turns[4].text == 'O' &&
        this.turns[5].text == 'O') ||
      (this.turns[6].text == 'O' &&
        this.turns[7].text == 'O' &&
        this.turns[8].text == 'O') ||
      (this.turns[0].text == 'O' &&
        this.turns[3].text == 'O' &&
        this.turns[6].text == 'O') ||
      (this.turns[1].text == 'O' &&
        this.turns[4].text == 'O' &&
        this.turns[7].text == 'O') ||
      (this.turns[2].text == 'O' &&
        this.turns[5].text == 'O' &&
        this.turns[8].text == 'O') ||
      (this.turns[0].text == 'O' &&
        this.turns[4].text == 'O' &&
        this.turns[8].text == 'O') ||
      (this.turns[2].text == 'O' &&
        this.turns[4].text == 'O' &&
        this.turns[6].text == 'O')
    ) {
      this.hideO = true;
      this.resetButton = true;
      this.hideXturn = false;
      this.turns.forEach(data=>{
        data.disabled=true;
      })
    }else
    if (
      this.resultant.length == this.turns.length &&
      this.hideO == false &&
      this.hideX == false
    ) {
      this.hideTie = true;
      this.resetButton = true;
      this.hideOturn = false;
      this.hideXturn = false;
    }
  }

  //Start game function on the click of start button in HTML
  startGame() {
    this.hideDiv = true;
    this.inputDisabled = true;
  }

  //Restart Function where DOM will be refresh onclick
  restart() {
    window.location.reload();
  }
}
