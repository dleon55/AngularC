import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  mayus: boolean = true;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    { nombre: 'Spiderman', vuela: false, color: Color.rojo },
    { nombre: 'Batman', vuela: false, color: Color.negro },
    { nombre: 'Robin', vuela: false, color: Color.verde },
    { nombre: 'Superman', vuela: true, color: Color.azul },
  ];

  constructor() {}

  ngOnInit(): void {}
  toogle() {
    console.log(this.mayus);
    this.mayus = !this.mayus;
  }
  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log({ valor });
  }
}
