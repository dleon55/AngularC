import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css'],
})
export class PorPaisComponent implements OnInit {
  termino = '';
  resultados: Country[] = [];
  hayError = false;
  constructor(private paisServ: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisServ.buscarPais(termino).subscribe(
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
  sugerencias(termino: string): void {
    console.log("no hay error");
    this.hayError = false;
  }
}
