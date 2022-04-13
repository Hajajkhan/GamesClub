import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HangmanComponent } from './home-menu/hangman/hangman.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { StartedComponent } from './home-menu/tic-tac-toe/started/started.component';
import { TicTacToeComponent } from './home-menu/tic-tac-toe/tic-tac-toe.component';
import { StarthangmanComponent } from './home-menu/hangman/starthangman/starthangman.component';

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
