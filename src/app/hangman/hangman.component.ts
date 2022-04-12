import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadWord } from './Hangman Store/hangman.actions';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})
export class HangmanComponent implements OnInit {

  word$:Observable<any>=this.store.select(state=>{
    console.log("State", state)
  })



  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadWord());
  }

}
