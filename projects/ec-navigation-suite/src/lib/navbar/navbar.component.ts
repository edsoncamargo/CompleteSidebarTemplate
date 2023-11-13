import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'ec-ns-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
    'navbar.component.scss'
  ]
})

export class NavbarComponent implements AfterViewInit {
  @ViewChild('eNavbar') eNavbar!: ElementRef<HTMLButtonElement>;
  @ViewChild('eBurguer') eBurguer!: ElementRef<HTMLButtonElement>;

  @Output() navbarEvent = new EventEmitter<{ isOpen: boolean }>();

  constructor(private service: NavbarService) { }

  ngAfterViewInit() {
    this.service.navbarToggle$.subscribe(() => this.toggle())
    this.handleBurguerClick();
  }

  handleBurguerClick() {
    this.eBurguer.nativeElement.addEventListener('click', () => this.toggle())
  }

  toggle() {
    if (this.eNavbar.nativeElement.classList.contains("ec-ns-navbar--opened")) {
      this.emitNavbarEvent(false)
      this.eNavbar.nativeElement.classList.remove("ec-ns-navbar--opened");
      return;
    }

    this.emitNavbarEvent(true)
    this.eNavbar.nativeElement.classList.add("ec-ns-navbar--opened");
  }

  emitNavbarEvent(isOpen: boolean) {
    this.navbarEvent.emit({ isOpen })
  }
}
