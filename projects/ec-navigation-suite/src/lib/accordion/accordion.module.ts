import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AccordionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    AccordionComponent
  ]
})
export class AccordionModule { }
