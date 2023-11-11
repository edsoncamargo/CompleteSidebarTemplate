import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private sidebarOpenSubject = new Subject<boolean>();
  sidebarOpen$ = this.sidebarOpenSubject.asObservable();

  constructor() { }

  toggle() {
    this.sidebarOpenSubject.next(true);
  }
}
