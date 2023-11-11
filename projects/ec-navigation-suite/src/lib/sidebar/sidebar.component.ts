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

  @Input() startOpen: boolean = true;

  isOpen = true;

  @ViewChild('eSidebar') eSidebar: ElementRef;

  constructor(private sidebarService: SidebarService) {

  }

  ngAfterViewInit() {
    this.handleInitStatus()
    this.sidebarService.sidebarOpen$.subscribe(() => this.handleToggleSidebar())
  }

  handleInitStatus() {
    if (this.startOpen) {
      this.open()
      return
    }

    this.close()
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
  }

  open() {
    const eSidebar = this.eSidebar.nativeElement as HTMLElement
    eSidebar.classList.add("ec-ns-sidebar--opened");
    this.isOpen = true;
  }
}
