import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarToggleSubject = new Subject<boolean>();
  sidebarToggle$ = this.sidebarToggleSubject.asObservable();

  constructor() { }

  toggle() {
    this.sidebarToggleSubject.next(true);
  }
}
