import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';
import { ConfirmDelComponent } from './components/confirm-del/confirm-del.component';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
    HomeComponent,
    HeroeCardComponent,
    ImagenPipe,
    ConfirmDelComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
