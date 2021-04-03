import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent,
    AgregarComponent,
    BuscarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
