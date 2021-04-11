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
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
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
        width: 450px;
      }
      .example-h2 {
        margin: 0 8px 16px;
      }

      .example-section {
        display: flex;
        align-content: center;
        align-items: center;
        height: 60px;
      }

      .example-margin {
        margin: 8px;
      }

      .mat-slider-horizontal {
        width: 300px;
      }

      .mat-slider-vertical {
        height: 300px;
      }

      .mat-card + .mat-card {
        margin-top: 8px;
      }

      .example-result-card h2 {
        margin: 0 8px;
      }
    `,
  ],
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 18;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  tickInterval = 1;
  @ViewChild('mapa') divMapa!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number | any = 10;
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
  zoomCambio(valor: number | any) {
    console.log(valor);
    this.mapa.zoomTo(Number(valor));
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
