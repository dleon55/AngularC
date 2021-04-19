import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(50),
  // });
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre:'',
      precio:0,
      existencias:0
    })
  }

  guardar() {
    this.miFormulario.markAllAsTouched();
    if(this.miFormulario.valid)
    {
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
    else{
      return;
    }
  }
  campoEsValido(campo: string) {
    if (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    ) {
      return true;
    }
    return false;
  }
}
