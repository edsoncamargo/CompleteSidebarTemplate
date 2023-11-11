import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AccordionComponent } from './accordion.component';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  private accordionEventSubject = new Subject<{ component: AccordionComponent, method: string }>();
  accordionEvent$ = this.accordionEventSubject.asObservable();

  constructor() { }

  toggle(eAccordion: AccordionComponent) {
    this.accordionEventSubject.next({ component: eAccordion, method: 'toggle' });
  }
}
