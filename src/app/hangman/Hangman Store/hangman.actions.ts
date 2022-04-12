import { createAction, props } from '@ngrx/store';

export const loadWord = createAction('[HangmanComponent] load word');
export const loadWordSucceed = createAction(
  '[ConversionComponent] load word succeed',
  props<any>()
);
export const loadWordError = createAction('[HangmanComponent] loading failed');