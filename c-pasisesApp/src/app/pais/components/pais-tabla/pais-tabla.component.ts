import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/interfaces.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css'],
})
export class PaisTablaComponent implements OnInit {
  termino = '';
  hayError = false;
  @Input() paises: Country[] = [];
  constructor() {}

  ngOnInit(): void {}
}
