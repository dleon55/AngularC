import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { PeliculasPosteGridComponent } from './peliculas-poste-grid/peliculas-poste-grid.component';
// app.module.ts
import { RatingModule } from 'ng-starrating';
@NgModule({
  declarations: [
    NavBarComponent,
    SlideshowComponent,
    PeliculasPosteGridComponent,
  ],
  exports: [
    NavBarComponent,
    SlideshowComponent,
    PeliculasPosteGridComponent,
    RatingModule,
  ],
  imports: [CommonModule, RouterModule, SwiperModule, RatingModule],
})
export class ComponentsModule {}
