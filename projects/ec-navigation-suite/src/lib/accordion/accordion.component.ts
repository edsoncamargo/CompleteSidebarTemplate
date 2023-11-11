import { NavbarComponent } from './../navbar/navbar.component';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AccordionService } from './accordion.module.service';

@Component({
  selector: 'ec-ns-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: [
    'accordion.component.scss'
  ]
})

export class AccordionComponent implements AfterViewInit {

  @ViewChild('eAccordion') eAccordion!: ElementRef<HTMLElement>;
  isOpen: boolean = false;

  constructor(private accordionService: AccordionService) { }

  ngAfterViewInit() {
    this.accordionService.accordionEvent$.subscribe(({ component, method }) => this.handleAccordionEvent(component, method));
  }

  private handleAccordionEvent(component: AccordionComponent, method: string) {
    if (component.eAccordion === this.eAccordion) this[method]();
  }

  toggle() {
    console.log("entrei")
    if (this.isOpen) {
      this.close();
      return
    }

    this.open();
  }

  private open() {
    this.isOpen = true;
  }

  private close() {
    this.isOpen = false;
  }
}
