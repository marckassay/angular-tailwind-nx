import { Component, Input } from '@angular/core';

export interface Header { 
  strong: boolean;
}

@Component({
  selector: 'angular-tailwind-nx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input()
  strong = false;
}
