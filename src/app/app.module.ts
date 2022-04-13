import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { TaigaModule } from "./taiga/taiga.module";
import { StartedComponent } from "./tic-tac-toe/started/started.component";
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import {HttpClientModule} from '@angular/common/http'

import { TuiButtonModule } from "@taiga-ui/core";
import { ResultComponent } from "./tic-tac-toe/result/result.component";
import { HangmanComponent } from './hangman/hangman.component';
import { StarthangmanComponent } from './hangman/starthangman/starthangman.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { wordReducer } from "./hangman/Hangman Store/hangman.reducer";
import { WordsEffects } from "./hangman/Hangman Store/hangman.effects";
import { ReactiveFormsModule } from "@angular/forms";
import { TuiInputModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    StartedComponent,
    TicTacToeComponent,
    HomeMenuComponent,
    ResultComponent,
    HangmanComponent,
    StarthangmanComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,
    TaigaModule,TuiInputModule,
    BrowserAnimationsModule,
    TuiButtonModule,
    StoreModule.forRoot({ words: wordReducer}, {}),
    EffectsModule.forRoot([WordsEffects]),
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
