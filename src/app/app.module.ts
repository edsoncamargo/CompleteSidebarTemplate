import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { AccordionModule, SidebarModule, NavbarModule } from 'ec-navigation-suite';
import { AppRoutingModule } from './app-routing.module';
import { MarkdownModule, MarkedOptions, PrismPlugin } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { marked } from 'marked';
import { SidebarComponent } from './pages/docs/sidebar/sidebar.component';
import { NavbarComponent } from './pages/docs/navbar/navbar.component';
import { AccordionComponent } from './pages/docs/accordion/accordion.component';
import { SidebarToggleComponent } from './components/sidebar-toggle/sidebar-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AccordionComponent,
    SidebarToggleComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NavbarModule,
    SidebarModule,
    AccordionModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          renderer: new marked.Renderer(),
          plugins: [
            PrismPlugin,
          ],
        },
      },
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
