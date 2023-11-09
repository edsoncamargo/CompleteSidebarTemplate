import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
