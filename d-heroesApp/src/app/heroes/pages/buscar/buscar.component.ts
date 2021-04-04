import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleccionado!: Heroe;
  constructor(private heroesServ: HeroesService) {}

  ngOnInit(): void {}
  buscando() {
    this.heroesServ
      .buscarHeroe(this.termino)
      .subscribe((heroes) => (this.heroes = heroes));
  }
  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesServ
      // tslint:disable-next-line: no-non-null-assertion
      .getHeroe(heroe.id!)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe((heroe) => (this.heroeSeleccionado = heroe));
  }
}
