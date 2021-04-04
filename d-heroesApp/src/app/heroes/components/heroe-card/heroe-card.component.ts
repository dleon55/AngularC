import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [],
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe!: Heroe ;
  constructor() {}

  ngOnInit(): void {}
}
