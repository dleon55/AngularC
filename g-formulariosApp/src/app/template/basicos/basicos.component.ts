import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: '',
    precio: 0,
    existencias: 0,
    noEmpleado:0,
    anio:2020,
    quincena:1
  };
  quincenas :any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]
  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }
  precioValido(): boolean {
    return (
      this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0
    );
  }

  guardar(miFormulario: NgForm): void {
    console.log(miFormulario.value);
    this.miFormulario.resetForm({ precio: 0, existencias: 0 });
  }
}
