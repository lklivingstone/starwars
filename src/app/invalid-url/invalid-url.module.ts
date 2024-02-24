import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { InvalidURL } from './invalid-url.component';



@NgModule({
  declarations: [
    InvalidURL
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InvalidURLModule { }
