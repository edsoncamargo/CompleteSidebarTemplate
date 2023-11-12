import { Component } from '@angular/core';

@Component({
  selector: 'ec-showcase-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  module = `
  \`\`\`typescript
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppComponent } from './app.component';
  import { SidebarModule } from 'ec-navigation-suite';

  @NgModule({
    declarations: [
      AppComponent,
      ShowcaseComponent,
    ],
    imports: [
      CommonModule,
      BrowserModule,
      SidebarModule,
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
  import { SidebarService } from 'ec-navigation-suite';

  @Component({
    selector: 'app-component',
    templateUrl: './app-component.component.html',
    styleUrls: ['./app-component.component.scss']
  })

  export class AppComponent implements OnInit {
    constructor(private sidebarService: SidebarService) { }

    ngOnInit(): void { }

    toggle() {
      this.sidebarService.toggle();
    }
  }
  \`\`\`
  `

  html = `
  \`\`\`html
  <ec-ns-sidebar>
    <nav options>
      <h1>YOUR BRAND 🚀</h1>

      <br /><br /><br />

      <ul>
        <li>
          <a>Content 1</a>
        </li>

        <li>
          <a>Content 2</a>
        </li>

        <li>
          <a>Content 3</a>
        </li>
      </ul>
    </nav>

    <main route>
      <router-outlet></router-outlet>
    </main>
  </ec-ns-sidebar>
  \`\`\`
  `
}
