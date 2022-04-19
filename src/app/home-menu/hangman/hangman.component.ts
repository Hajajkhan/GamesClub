import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadWord } from './Hangman Store/hangman.actions';
import { HangmanService } from './hangman.service';
import {TuiAppearance, tuiButtonOptionsProvider} from '@taiga-ui/core';
import { alphaArray } from './alpha';


@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./hangman.component.scss'],
  providers: [
    tuiButtonOptionsProvider({
        shape: 'rounded',
        appearance: "primary",
        //  TuiAppearance.Outline,
        // size: '',
    }),
  ],
})
export class HangmanComponent implements OnInit {
  
  // alphabets:any[]=
  // ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  // "n","o","p","q","r","s","t","u","v","w","x","y","z"]

  alphabets = alphaArray;

  //declaration of arrays
  array:any[]=[];
  guesses:any[]=[];
  resultant:any[]=[];

  //declaration of variables
  word="";
  lowerCase="";
  mistakeRemaining:number=10;
  hint:string="";
  
  //globally hiding and showing data
  mistakeRemainingHide:boolean=false;
  hintHide:boolean=false;
  hideBody:boolean=false;
  btnDisabled:boolean=false;
  hideLost:boolean=false;
  trueAnswer:boolean=false;
  alphaDiabled:boolean=false;
  hideReset:boolean=false;

  //getting Data from Store
  word$:Observable<any>=this.store.select((state:any)=>{
    return state.words.word;
  })

  constructor(private store: Store, private service:HangmanService) {}

  ngOnInit(): void {
    this.store.dispatch(loadWord());
    this.word$.subscribe(res=>{
      this.word=res.word;
      this.hint=res.define;
    });
  }
  
  /**
   * start game through calling the function
   * in this function we are converting from upper case to lower case
   * remainig words function exist in this start function
  */

  startGame(){
    this.lowerCase= this.word.toLowerCase();
    this.array=this.lowerCase.split("");

    //statements showing and hiding on start click
    this.hideBody=true;
    this.hideLost=false;
    this.btnDisabled=true;
    this.trueAnswer=false;
    this.hideReset=true;
    this.mistakeRemainingHide=true;

    //making objects and pushing in array
    let resultObject;
    this.array.forEach(data=>{
      resultObject={
        alpha:data,
        guess:""
      }
      this.guesses.push(resultObject);
    })
  }

  //Function for Hint its defines the hidden word
  getHint(){
    this.hintHide=true;
  }

  /**
   * @param data 
   * Main Functionality applying by this function
   * in which we are matching words and targeting by indexes
  */

  matchingWords(data:any, index:any){
    this.alphabets[index].disabled=true;
    this.array.forEach((res, index) => {
     if (data.toLowerCase() === res) {
      this.guesses[index].guess=data;
      this.resultant.splice(index, 0, res)
    }
    });
    let checked = this.array.includes(data)
    if(checked==false){
      this.mistakeRemaining--;
    }if(this.mistakeRemaining==0){
      this.hideBody=false;
      this.hideLost=true;
      this.btnDisabled=true;
    }else if(this.resultant.length==this.array.length){
      this.trueAnswer=true;
      this.hideBody=false;
      this.btnDisabled=true;

    }
  }
  
  //Refreshing the page, by this we will get the new word
  restart(){
    window.location.reload();
  }
}