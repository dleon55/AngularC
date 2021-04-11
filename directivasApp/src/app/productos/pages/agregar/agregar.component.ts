import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      mat-grid-tile {
        background: accent;
      }
      .example-container {
        width: 100%;
        height: 100%;
        border: 1px solid #555;
      }
    `,
  ],
})
export class AgregarComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}
  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }
  ngOnInit(): void {}
}
