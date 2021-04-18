import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
  .active {
    color: 'red'
  }
  `],
})
export class SidemenuComponent implements OnInit {
  linksTemplate: any[] = [
    { opcion: 'basicos', link: '/template/basicos' },
    { opcion: 'dinamicos', link: '/template/dinamicos' },
    { opcion: 'switches', link: '/template/switches' },
  ];
  linksReactive: any[] = [
    { opcion: 'basicos', link: '/reactive/basicos' },
    { opcion: 'dinamicos', link: '/reactive/dinamicos' },
    { opcion: 'switches', link: '/reactive/switches' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
