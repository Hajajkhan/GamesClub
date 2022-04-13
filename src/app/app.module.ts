import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from "@angular/forms";

import { TaigaModule } from "./taiga/taiga.module";
import { TuiButtonModule } from "@taiga-ui/core";
import { TuiInputModule } from "@taiga-ui/kit";

import { StartedComponent } from "./home-menu/tic-tac-toe/started/started.component";
import { TicTacToeComponent } from "./home-menu/tic-tac-toe/tic-tac-toe.component";
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HangmanComponent } from "./home-menu/hangman/hangman.component";
import { StarthangmanComponent } from "./home-menu/hangman/starthangman/starthangman.component";

import { StoreModule } from '@ngrx/store';
import { wordReducer } from "./home-menu/hangman/Hangman Store/hangman.reducer";
import { WordsEffects } from "./home-menu/hangman/Hangman Store/hangman.effects";


@NgModule({
  declarations: [
    AppComponent,
    StartedComponent,
    TicTacToeComponent,
    HomeMenuComponent,
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
