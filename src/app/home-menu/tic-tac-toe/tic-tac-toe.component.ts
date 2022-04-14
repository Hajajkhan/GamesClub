import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  turns:any[]=[
    {text:""},
    {text:""},
    {text:""},
    {text:""},
    {text:""},
    {text:""},
    {text:""},
    {text:""},
    {text:""},
  ];
  
   initialTurn=0;
   hideX:boolean=false;
   hideXturn:boolean=true;
   hideOturn:boolean=false;
   hideO:boolean=false;
   firstPlayer:string="First Player";
   secondPlayer:string="Second Player";
   hideDiv:boolean=false;
   inputDisabled:boolean=false;
   resetButton:boolean=false;
   hideTie:boolean=false;

  constructor() {}

  ngOnInit(): void {
  }

 setMove(index:any): void {
      this.initialTurn++;
      this.initialTurn<=9;
    if(this.initialTurn%2==1){
      this.turns[index].text="X";
      this.hideXturn=false;
      this.hideOturn=true;
    }else if(this.initialTurn%2==0){
      this.turns[index].text="O";
      this.hideXturn=true;
      this.hideOturn=false;

    }if(this.turns[0].text=="X"&&this.turns[1].text=="X"&&this.turns[2].text=="X"||
      this.turns[3].text=="X"&&this.turns[4].text=="X"&&this.turns[5].text=="X"||
      this.turns[6].text=="X"&&this.turns[7].text=="X"&&this.turns[8].text=="X"||
      this.turns[0].text=="X"&&this.turns[3].text=="X"&&this.turns[6].text=="X"||
      this.turns[1].text=="X"&&this.turns[4].text=="X"&&this.turns[7].text=="X"||
      this.turns[2].text=="X"&&this.turns[5].text=="X"&&this.turns[8].text=="X"||
      this.turns[0].text=="X"&&this.turns[4].text=="X"&&this.turns[8].text=="X"||
      this.turns[2].text=="X"&&this.turns[4].text=="X"&&this.turns[6].text=="X"){
      this.hideX=true;
      this.resetButton=true;
    }else
    if(this.turns[0].text=="O"&&this.turns[1].text=="O"&&this.turns[2].text=="O"||
      this.turns[3].text=="O"&&this.turns[4].text=="O"&&this.turns[5].text=="O"||
      this.turns[6].text=="O"&&this.turns[7].text=="O"&&this.turns[8].text=="O"||
      this.turns[0].text=="O"&&this.turns[3].text=="O"&&this.turns[6].text=="O"||
      this.turns[1].text=="O"&&this.turns[4].text=="O"&&this.turns[7].text=="O"||
      this.turns[2].text=="O"&&this.turns[5].text=="O"&&this.turns[8].text=="O"||
      this.turns[0].text=="O"&&this.turns[4].text=="O"&&this.turns[8].text=="O"||
      this.turns[2].text=="O"&&this.turns[4].text=="O"&&this.turns[6].text=="O"){
      this.hideO=true;
      this.resetButton=true;
    }
  }

  startGame(){
    this.hideDiv=true;
    this.inputDisabled=true;
    console.log(this.firstPlayer);
    console.log(this.secondPlayer)
  }
  restart(){
    this.hideDiv=false;
    this.inputDisabled=false;
    this.resetButton=false;
    this.hideX=false;
    this.hideO=false;
    this.initialTurn=0;
    this.turns.forEach(data=>{
      data.text="";
    })
  }
}
