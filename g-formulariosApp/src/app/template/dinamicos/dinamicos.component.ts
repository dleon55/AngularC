import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  nuevoJuego = '';
  persona: Persona = {
    nombre: 'David',
    favoritos: [
      { id: 1, nombre: 'Metal gear' },
      { id: 2, nombre: 'Resident Evil' },
    ],
  };
  constructor() {}

  ngOnInit(): void {}
  guardar(): void {}
  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }
  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }
  agregarJuego(): void {
    if (this.nuevoJuego !== '') {
      const nuevoFavorito: Favorito = {
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego,
      };
      this.persona.favoritos.push({...nuevoFavorito});
      this.nuevoJuego = '';
    }
  }
}
