import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css'],
})
export class PorRegionComponent implements OnInit {
  termino = '';
  resultados: Country[] = [];
  hayError = false;
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  constructor(private paisServ: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string): void {
    if (region === this.regionActiva) {
      return;
    }
    this.regionActiva = region;
    this.hayError = false;
    this.termino = region;
    console.log(this.termino);
    this.paisServ.buscarRegion(region).subscribe(
      (resp) => {
        console.log(resp);
        this.resultados = resp;
      },
      (err) => {
        console.log({ err });
        this.hayError = true;
        this.resultados = [];
      }
    );
  }
  getClaseCss(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
