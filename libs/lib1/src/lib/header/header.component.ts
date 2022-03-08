import { Component, Input, OnInit } from '@angular/core';

export interface Header { 
  strong: boolean;
}

@Component({
  selector: 'angular-tailwind-nx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  strong: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
