import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  turns:any[]=[
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
    {text:"", active:false},
  ];
  
   initialTurn=0;
   hideX:boolean=false;
   hideO:boolean=false;

  constructor() {}

  ngOnInit(): void {
  }

 setMove(index:any): void {
    this.turns[index].active=true;
    this.initialTurn++;
    if(this.initialTurn%2){
      this.turns[index].text="X";
    }else{
      this.turns[index].text="O";
    }if(this.turns[0].text=="X"&&this.turns[1].text=="X"&&this.turns[2].text=="X"||
      this.turns[3].text=="X"&&this.turns[4].text=="X"&&this.turns[5].text=="X"||
      this.turns[6].text=="X"&&this.turns[7].text=="X"&&this.turns[8].text=="X"||
      this.turns[0].text=="X"&&this.turns[3].text=="X"&&this.turns[6].text=="X"||
      this.turns[1].text=="X"&&this.turns[4].text=="X"&&this.turns[7].text=="X"||
      this.turns[2].text=="X"&&this.turns[5].text=="X"&&this.turns[8].text=="X"||
      this.turns[0].text=="X"&&this.turns[4].text=="X"&&this.turns[8].text=="X"||
      this.turns[2].text=="X"&&this.turns[4].text=="X"&&this.turns[6].text=="X"){
      this.hideX=true;
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
    }
  }
}
