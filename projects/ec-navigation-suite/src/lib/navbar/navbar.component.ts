import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ec-ns-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [
    'navbar.component.scss'
  ]
})

export class NavbarComponent implements AfterViewInit {
  @ViewChild('eBurguer') eBurguer!: ElementRef<HTMLButtonElement>;

  ngAfterViewInit() {
    this.handleBurguerClick();
  }

  handleBurguerClick() {
    this.eBurguer.nativeElement.addEventListener('click', () => {
      console.log("entrtei")
    })
  }
}
