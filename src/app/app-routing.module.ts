import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanComponent } from './hangman/hangman.component';
import { StarthangmanComponent } from './hangman/starthangman/starthangman.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { StartedComponent } from './tic-tac-toe/started/started.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {path:"", component:HomeMenuComponent},
  {path:"gettingstartedtictactoe", component:StartedComponent},
  {path:"tictactoe", component:TicTacToeComponent},
  {path:"gettingstartedhangman", component:StarthangmanComponent},
  {path:"hangman", component:HangmanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
