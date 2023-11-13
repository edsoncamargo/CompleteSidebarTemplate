import { Component } from '@angular/core';
import { NavbarService } from 'ec-navigation-suite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private navbarService: NavbarService) {

  }

  toggle(): void {
    this.navbarService.toggle()
  }
}
