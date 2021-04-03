import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'heroe:id',
        component: HeroeComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },

      {
        path: '**',
        redirectTo: 'listado',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule { }


