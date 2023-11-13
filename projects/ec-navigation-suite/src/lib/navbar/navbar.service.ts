import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarToggleSubject = new Subject<boolean>();
  navbarToggle$ = this.navbarToggleSubject.asObservable();

  constructor() { }

  toggle() {
    this.navbarToggleSubject.next(true);
  }
}
