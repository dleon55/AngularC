import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './productos/pages/agregar/agregar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'productos',
        loadChildren: () =>
          import('./productos/productos.module').then((m) => m.ProductosModule),
      },
      { path: '**', redirectTo: 'productos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
