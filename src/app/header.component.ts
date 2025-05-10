import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cms-header',
  standalone: false,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() navSelected = new EventEmitter<string>();

  setSelected(nav: string) {
    this.navSelected.emit(nav);
  }
}
