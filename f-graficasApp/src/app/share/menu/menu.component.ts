import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  @Input() opciones!: any[] ;
  constructor() { }

  ngOnInit(): void {
  }

}
