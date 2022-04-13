import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadWord } from './Hangman Store/hangman.actions';
import { HangmanService } from './hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {
  alphabets:any[]=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
  "s","t","u","v","w","x","y","z"]
  array:{}={};
  word$:Observable<any>=this.store.select(state=>{
    console.log(state);
  })



  constructor(private store: Store, private service:HangmanService) { }

  ngOnInit(): void {
    this.store.dispatch(loadWord());
    // this.alphabets.map(data=>{
    //   console.log(data)
    // })
  }
  onclick(index:any){
    return index
  }

}
