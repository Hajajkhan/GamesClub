import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   TuiRootModule, 
   TuiDialogModule, 
   TuiNotificationsModule, 
   TUI_SANITIZER } 
from "@taiga-ui/core";
import { TuiButtonModule } from "@taiga-ui/core";




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TuiDialogModule,TuiRootModule, TuiNotificationsModule,TuiButtonModule,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],

})

export class TaigaModule { }
