import { Component } from '@angular/core';
import { SidebarService } from 'ec-navigation-suite';

@Component({
  selector: 'ec-showcase-sidebar-toggle',
  templateUrl: './sidebar-toggle.component.html',
  styleUrls: ['./sidebar-toggle.component.scss'],
})
export class SidebarToggleComponent {
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
