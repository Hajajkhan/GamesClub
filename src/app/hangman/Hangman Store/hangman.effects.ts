import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, tap } from 'rxjs';
import { loadWord, loadWordError, loadWordSucceed} from './hangman.actions';
import { HangmanService } from '../hangman.service';

@Injectable()
export class WordsEffects {
  loadWords$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadWord),
      mergeMap(() =>{
        return this.service.getDataofHangMan().pipe(
          // tap((data) => console.log('TAPPING', data.conversion_rates)),
          map((data) => loadWordSucceed({ currencies: data })),
          catchError(()=>of(loadWordError()))
        );
      }
      )
    )
  );
  constructor(private action$: Actions, private service: HangmanService) {}
}
