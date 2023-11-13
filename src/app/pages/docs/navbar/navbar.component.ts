import { Component } from '@angular/core';

@Component({
  selector: 'ec-showcase-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  module = `
  \`\`\`typescript
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppComponent } from './app.component';
  import { NavbarModule } from 'ec-navigation-suite';

  @NgModule({
    declarations: [
      AppComponent,
      ShowcaseComponent,
    ],
    imports: [
      CommonModule,
      BrowserModule,
      NavbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

  export class AppModule { }
  \`\`\`
  `

  component = `
  \`\`\`typescript
  import { Component, OnInit } from '@angular/core';
  import { NavbarService } from 'ec-navigation-suite';

  @Component({
    selector: 'app-component',
    templateUrl: './app-component.component.html',
    styleUrls: ['./app-component.component.scss']
  })

  export class AppComponent implements OnInit {
    constructor(private navbarService: NavbarService) { }

    ngOnInit(): void { }

    toggle() {
      this.navbarService.toggle();
    }
  }
  \`\`\`
  `

  html = `
  \`\`\`html
  <ec-ns-navbar>
    <div desktop>
      <h1>Your custom content for desktop here 😁</h1>
    </div>

    <div mobileBrand>
      <h1>YOUR BRAND 🚀</h1>
    </div>

    <div mobile>
      <h1>Your custom content for mobile here 😁</h1>
    </div>
  </ec-ns-navbar>
  \`\`\`
  `
}
