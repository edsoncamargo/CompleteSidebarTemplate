import { Component } from '@angular/core';
import { SidebarService } from 'projects/ec-navigation-suite/src/public-api';

@Component({
  selector: 'ec-showcase-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  constructor(private sidebarService: SidebarService) { }

  toggleSidebar() {
    this.sidebarService.toggle();
  }
}
