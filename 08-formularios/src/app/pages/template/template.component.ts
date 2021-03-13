import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    acepta: false,
    pais: 'MX',
    genero: null,
  };
  paises: any[] = [];
  constructor(private paisService: PaisService) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((paises: any) => {
      console.log(paises);
      this.paises = paises;
      this.paises.unshift({ name: 'Seleccione un pais', alpha3Code: '' });
    });
  }
  guardar(forma: NgForm): void {
    console.log({ valor: forma.value });
    if (forma.invalid) {
      Object.values(forma.controls).forEach((control) => {
        console.log(control);
        control.markAsTouched();
      });
    }
  }
}
