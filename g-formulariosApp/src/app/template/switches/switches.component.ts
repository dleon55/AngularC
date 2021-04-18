import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
    `
      .example-radio-group {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
      }

      .example-radio-button {
        margin: 5px;
      }
    `,
  ],
})
export class SwitchesComponent implements OnInit {
  generoSeleccionado: string = '';
  generos: any[] = [
    { value: 'F', nombre: 'Femenino' },
    { value: 'M', nombre: 'Masculino' },
  ];
  persona = {
    genero: '',
    notificaciones: false,
    terminos: false,
  };
  constructor() {}

  ngOnInit(): void {}
}
