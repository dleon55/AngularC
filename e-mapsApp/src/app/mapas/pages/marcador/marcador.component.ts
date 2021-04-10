import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styles: [
    `
      .mapa-container {
        height: 100%;
        width: 100%;
      }
      .row {
        background-color: white;
        position: fixed;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        border-radius: 5px;
        z-index: 999;
        with: 400px;
      }
    `,
  ],
})
export class MarcadorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number, number] = [-99.299285, 19.354713];
  constructor() {}

  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel,
    });
    
    this.mapa.on('zoom', (ev) => {
      console.log({ ev });
      const zoomActual = this.mapa.getZoom();
      this.zoomLevel = zoomActual;
      const center = this.mapa.getCenter();
    });
    this.mapa.on('zoomend', (ev) => {
      if (this.mapa.getZoom() > 18) {
        this.mapa.zoomTo(18);
      }
    });
    this.mapa.on('move', (event) => {
      console.log(event);
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    });
    const markerHtml:HTMLElement=document.createElement('div');
    markerHtml.innerHTML='Hola Mundo';
    // const marker = new mapboxgl.Marker({element:markerHtml}).setLngLat(this.center).addTo(this.mapa);
    const marker = new mapboxgl.Marker().setLngLat(this.center).addTo(this.mapa);

  }
  ngOnDestroy() {
    this.mapa.off('zoom', () => {});
    this.mapa.off('move', () => {});
    this.mapa.off('zoomend', () => {});
  }
  zoomOut() {
    this.mapa.zoomOut();
  }
  zoomIn() {
    this.mapa.zoomIn();
  }
  zoomCambio(valor: string) {
    console.log(valor);
    this.mapa.zoomTo(Number(valor));
  }
}
