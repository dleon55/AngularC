import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {
  termino = '';
  resultados: Country[] = [];
  hayError = false;
  mostrarSugerencias: boolean=false;
  paisesSugeridos: Country[]=[];
  constructor(private paisServ: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisServ.buscarCapital(termino).subscribe(
      (resp) => {
        console.log(resp);
        this.resultados = resp;
      },
      (err) => {
        // console.log({ err });
        this.hayError = true;
        this.resultados = [];
      }
    );
  }
  sugerencias(termino: string): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisServ.buscarCapital(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }
  buscarSugerido(termino: string): void {
    this.buscar(termino);
  }
}
