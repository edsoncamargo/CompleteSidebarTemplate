import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule, SidebarModule } from 'projects/ec-navigation-suite/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { ShowcaseComponent } from './pages/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    SidebarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
