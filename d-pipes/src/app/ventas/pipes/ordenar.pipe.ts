import { Pipe, PipeTransform } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(arr: Heroe[], orderPor: string = 'sin valor'): Heroe[] {
    switch (orderPor) {
      case 'nombre':
        return (arr = arr.sort((a, b) => (a.nombre > b.nombre ? 1 : -1)));
      case 'vuela':
        return (arr = arr.sort((a, b) => (a.vuela > b.vuela ? 1 : -1)));
      case 'color':
        return (arr = arr.sort((a, b) => (a.color > b.color ? 1 : -1)));
      default:
        return arr;
    }
  }
}
