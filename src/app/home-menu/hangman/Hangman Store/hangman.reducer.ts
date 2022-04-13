import { createReducer, on } from '@ngrx/store';
import {
    loadWordSucceed
} from './hangman.actions';

// interface Applicationstate {
//   words: any[];
// }
const initialstate = {
  words: [],
};

const _wordReducer = createReducer(
  initialstate,
  on(loadWordSucceed, (state, { word }) => {
    
    console.log("##", word)
    return { ...state, word: word };
  }),
);

export function wordReducer(state: any, action: any) {
  return _wordReducer(state, action);
}
