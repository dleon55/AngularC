import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PeliculasPageComponent } from './peliculas-page/peliculas-page.component';
import { BuscarPageComponent } from './buscar-page/buscar-page.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [HomePageComponent, PeliculasPageComponent, BuscarPageComponent],
  imports: [
    CommonModule, ComponentsModule
  ]
})
export class PagesModule { }
