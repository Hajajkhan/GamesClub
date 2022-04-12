import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HangmanService {

  constructor(private http:HttpClient) { }

  getDataofHangMan(){
   return this.http.get('https://random-words-api.vercel.app/word');
  }
}
