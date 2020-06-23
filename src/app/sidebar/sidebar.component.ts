import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  open = true;

  @ViewChild('sidebar') sidebar: ElementRef;
  @ViewChild('main') main: ElementRef;
  @ViewChild('menuOneDropdownContent') menuOneDropdownContent: ElementRef;
  @ViewChild('menuTwoDropdownContent') menuTwoDropdownContent: ElementRef;
  @ViewChild('arrowDown') arrowDown: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target']) handleOutsideElement() {
    this.closeDropdownMenuTwo();
  }

  handleToggleSidebar() {
    const sidebar = this.sidebar.nativeElement as HTMLElement;
    const main = this.main.nativeElement as HTMLElement;
    const isToggled = this.isOpen();
    if (isToggled) {
      sidebar.style.marginLeft = '-300px';
      main.style.marginLeft = '0px';
    } else {
      sidebar.style.marginLeft = '0px';
      main.style.marginLeft = '300px';
    }
  }

  isOpen(): boolean {
    const aux = this.open;
    this.open = !this.open;
    return aux;
  }

  handleMenuOne(): void {
    const menuOneDropdownContent = this.menuOneDropdownContent.nativeElement as HTMLElement;
    const arrowDown = this.arrowDown.nativeElement as HTMLElement;
    if (menuOneDropdownContent.classList.contains('show')) {
      menuOneDropdownContent.classList.add('hide');
      menuOneDropdownContent.classList.remove('show');
      menuOneDropdownContent.style.maxHeight = '0px';
      arrowDown.style.transform = 'rotate(0deg)';
    } else {
      menuOneDropdownContent.classList.add('show');
      menuOneDropdownContent.classList.remove('hide');
      menuOneDropdownContent.style.maxHeight = menuOneDropdownContent.scrollHeight + 'px';
      arrowDown.style.transform = 'rotate(180deg)';
    }
  }

  handleMenuTwo(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    const menuTwoDropdownContent = this.menuTwoDropdownContent.nativeElement as HTMLElement;
    if (menuTwoDropdownContent.classList.contains('show')) {
      menuTwoDropdownContent.classList.add('hide');
      menuTwoDropdownContent.classList.remove('show');
    } else {
      menuTwoDropdownContent.classList.add('show');
      menuTwoDropdownContent.classList.remove('hide');
    }
  }

  closeDropdownMenuTwo(): void {
    const menuTwoDropdownContent = this.menuTwoDropdownContent.nativeElement as HTMLElement;
    if (!menuTwoDropdownContent.classList.contains('hide')) {
      menuTwoDropdownContent.classList.add('hide');
      menuTwoDropdownContent.classList.remove('show');
    }
  }

}
