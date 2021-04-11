import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class FullScreenComponent implements AfterViewInit {
  @ViewChild  ('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-99.299285, 19.354713];
  constructor() {}

  ngAfterViewInit(): void {
    var map = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });
  }
}
