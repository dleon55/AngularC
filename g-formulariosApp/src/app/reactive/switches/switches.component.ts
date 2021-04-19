import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  generoSeleccionado = '';
  generos: any[] = [
    { value: 'F', nombre: 'Femenino' },
    { value: 'M', nombre: 'Masculino' },
  ];
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    terminos: [false, Validators.requiredTrue],
  });
  persona = {
    genero: 'F',
    notificaciones: true,
  };
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, condiciones: false });
    // this.miFormulario.get('condiciones')?.valueChanges.subscribe((newValue) => {
    //   console.log(newValue);
    // });
    this.miFormulario.valueChanges.subscribe(({ terminos, ...rest }) => {
      this.persona = rest;
      console.log({ rest });
    });
  }
  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.terminos;
    this.persona = formValue;
    console.log({formValue});
  }
}
