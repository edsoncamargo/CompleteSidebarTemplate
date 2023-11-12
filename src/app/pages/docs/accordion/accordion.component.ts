import { Component } from '@angular/core';

@Component({
  selector: 'ec-showcase-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  module = `
  \`\`\`typescript
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppComponent } from './app.component';
  import { AccordionModule } from 'ec-navigation-suite';

  @NgModule({
    declarations: [
      AppComponent,
      ShowcaseComponent,
    ],
    imports: [
      CommonModule,
      BrowserModule,
      AccordionModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
  })


  export class AppModule { }
  \`\`\`
  `

  component = `
  \`\`\`typescript
  import { Component, OnInit, QueryList, ViewChildren, ViewChild } from '@angular/core';
  import { AccordionService, AccordionComponent } from 'ec-navigation-suite';

  @Component({
    selector: 'app-component',
    templateUrl: './app-component.component.html',
    styleUrls: ['./app-component.component.scss']
  })

  export class AppComponent implements OnInit {
    @ViewChildren(AccordionComponent) eAccordions: QueryList<AccordionComponent>; /** With ViewChildren, you can obtain all accordions and openAll or closeAll them using the service's 'openAll' or 'closeAll'. */
    @ViewChild(AccordionComponent) eAccordion: AccordionComponent; /** With ViewChild, you can obtain any of the accordions and toggle them using the service's 'toggle()' method.
    Remember to pass the AccordionComponent instance to the service's method, ensuring you pass the correct accordion element. */

    constructor(private accordionService: AccordionService) { }

    ngOnInit(): void { }

    toggle() {
      this.accordionService.toggle(this.eAccordion);
    }

    openAll() {
      this.accordionService.openAll(this.eAccordions);
    }

    closeAll() {
      this.accordionService.closeAll(this.eAccordions);
    }
  }
  \`\`\`
  `

  html = `
  \`\`\`html
  <ec-ns-accordion>
    <h3 title>Custom title here 😁</h3>

    <div content>
      <ul>
        <li>Content 1</li>
        <li>Content 2</li>
        <li>Content 3</li>
      </ul>
    </div>
  </ec-ns-accordion>
  \`\`\`
  `
}
