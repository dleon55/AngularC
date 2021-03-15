import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BuscarPageComponent } from './pages/buscar-page/buscar-page.component';
import { PeliculasPageComponent } from './pages/peliculas-page/peliculas-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'pelicula/:id', component: PeliculasPageComponent },
  { path: 'buscar/:texto', component: BuscarPageComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
