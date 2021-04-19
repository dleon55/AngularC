import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  a = 1;
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['Tombraider', Validators.required],
      ],
      Validators.required
    ),
  });
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: '',
      favoritos: this.fb.array(
        [
          ['Metal Gear', Validators.required],
          ['Tombraider', Validators.required],
        ],
        Validators.required
      ),
    });
  }
  agregarFavorito(): void {
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.reset();
  }
  guardar() {
    this.miFormulario.markAllAsTouched();
    if (this.miFormulario.valid) {
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    } else {
      return;
    }
  }
  borrar(i:any) {
    this.favoritosArr.removeAt(i);

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
