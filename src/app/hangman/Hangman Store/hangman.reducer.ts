import { createReducer, on } from '@ngrx/store';
import {
    loadWordSucceed
} from './hangman.actions';

interface Applicationstate {
  words: any[];
}
const initialstate: Applicationstate = {
  words: [],
};

const _wordReducer = createReducer(
  initialstate,
  on(loadWordSucceed, (state, { words }) => {
    console.log("@@0", words.word)
    return { ...state, words: words };
  }),

  // on(loadWordError, (state: any, action: any) => {
  //   console.log('failing', state);
  //   return state;
  // })
);

export function wordReducer(state: any, action: any) {
  return _wordReducer(state, action);
}
