import { createReducer, on } from '@ngrx/store';
import {loadWordSucceed} from './hangman.actions';

let initialstate={}

const _wordReducer = createReducer(
  initialstate,
  on(loadWordSucceed, (state, { word }) => {
    console.log("##", word)
    let randomWordObject;
    word.map((data:any)=>{
      randomWordObject={
        word:data.word,
        define:data.definition
      }
    })
    return { ...state, word:randomWordObject};
  }),
);

export function wordReducer(state: any, action: any) {
  return _wordReducer(state, action);
}
