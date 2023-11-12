import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'ec-ns-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: [
    'sidebar.component.scss'
  ]
})

export class SidebarComponent implements AfterViewInit {

  @Input() startsOpen: boolean = true;
  @Input() startsOpenMobile: boolean = false;

  isOpen = true;
  isOverlayOpen = false;

  @ViewChild('eSidebar') eSidebar: ElementRef;


  constructor(private sidebarService: SidebarService) {

  }

  ngAfterViewInit() {
    this.handleInitStatus()
    this.sidebarService.sidebarOpen$.subscribe(() => this.handleToggleSidebar())
  }

  handleInitStatus() {
    if (this.startsOpenMobile === false && this.isMobile()) {
      this.close();
      return
    }

    if (this.startsOpen) {
      this.open()
      return
    }
  }

  isMobile() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  }

  handleToggleSidebar() {
    if (this.isOpen) {
      this.close();
      return;
    }

    this.open()
  }

  close() {
    const eSidebar = this.eSidebar.nativeElement as HTMLElement
    eSidebar.classList.remove("ec-ns-sidebar--opened");
    this.isOpen = false;

    this.disappearOverlay();
  }

  disappearOverlay() {
    if (this.isMobile())
      this.isOverlayOpen = false;
  }

  open() {
    const eSidebar = this.eSidebar.nativeElement as HTMLElement
    eSidebar.classList.add("ec-ns-sidebar--opened");
    this.isOpen = true;
    console.log("entrei")

    this.appearOverlay();
  }

  private appearOverlay() {
    if (this.isMobile())
      this.isOverlayOpen = true;
  }
}
