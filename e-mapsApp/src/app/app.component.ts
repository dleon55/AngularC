import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { MenuItem } from './shared/menu/menu.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mapsApp';
  menuItems: MenuItem[] = [
    { ruta: '/mapas/fullscreen', nombre: 'FullScreen' },
    { ruta: '/mapas/zoom-range', nombre: 'Zoom Range' },
    { ruta: 'mapas/marcadores', nombre: 'Marcadores' },
    { ruta: 'mapas/propiedades', nombre: 'Propiedades' },
  ];
  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapboxToken;
  }
}
