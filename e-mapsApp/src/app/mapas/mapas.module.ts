import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './pages/full-screen/full-screen.component';
import { MarcadorComponent } from './pages/marcador/marcador.component';
import { ZoomRangeComponent } from './pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadorComponent,
    ZoomRangeComponent,
    PropiedadesComponent,
  ],
  imports: [
    CommonModule,
    MapasRoutingModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
})
export class MapasModule {}
