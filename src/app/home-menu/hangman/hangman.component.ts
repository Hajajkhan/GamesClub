import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadWord } from './Hangman Store/hangman.actions';
import { HangmanService } from './hangman.service';
import {TuiAppearance, tuiButtonOptionsProvider} from '@taiga-ui/core';


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

  //array of alphabets
  alphabets:any[] =
  ["a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"]

  //declaration of Variables
  array:any[]=[];
  word="";
  lowerCase="";
  mistakeRemaining:number=10;
  mistakeRemainingHide:boolean=false;
  hint:string="";
  hintHide:boolean=false;
  hideBody:boolean=false;
  btnDisabled:boolean=false;
  guesses:any[]=[];

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
    this.lowerCase= this.word.toLocaleLowerCase();
    this.array=this.lowerCase.split("");
    this.hideBody=true;
    this.btnDisabled=true;
    this.mistakeRemainingHide=true;
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

  matchingWords(data:any){
    let idx: number[] = [];
    this.array.forEach((res, index) => {
     if (data.toLowerCase() === res) {
      this.guesses[index].guess=data;
      }
    });
    let checked = this.array.includes(data)
    if(checked==false){
      this.mistakeRemaining--;
    }if(this.mistakeRemaining==0){
    }
  }
  
  //Refreshing the page, by this we will get the new word
  restart(){
    window.location.reload();
  }
}