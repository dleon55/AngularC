import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'graficasApp';
  showFiller = false;
  menu: any[] = [
    { ruta: '/graficas/barra', texto: 'Barras' },
    { ruta: '/graficas/barra-doble', texto: 'Barras Dobles' },
    { ruta: '/graficas/dona', texto: 'Dona' },
    { ruta: '/graficas/dona-http', texto: 'Dona Http' },
  ];
}
