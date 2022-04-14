import { createReducer, on } from '@ngrx/store';
import {loadWordSucceed} from './hangman.actions';

let initialstate={}

const _wordReducer = createReducer(
  initialstate,
  on(loadWordSucceed, (state, { word }) => {
    console.log("##", word)
    let randomWord;
    word.map((data:any)=>{
      randomWord=data.word
    })
    return { ...state, word:randomWord};
  }),
);

export function wordReducer(state: any, action: any) {
  return _wordReducer(state, action);
}
