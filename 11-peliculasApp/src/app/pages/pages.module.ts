import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PeliculasPageComponent } from './peliculas-page/peliculas-page.component';
import { BuscarPageComponent } from './buscar-page/buscar-page.component';



@NgModule({
  declarations: [HomePageComponent, PeliculasPageComponent, BuscarPageComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
