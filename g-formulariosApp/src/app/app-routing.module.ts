import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveModule } from './reactive/reactive.module';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: (): any =>
      import('./template/template.module').then((m) => m.TemplateModule),
    data: { breadcrumb: 'Tu Cámara' },
  },
  {
    path: 'reactive',
    loadChildren: (): any =>
      import('./reactive/reactive.module').then((m) => m.ReactiveModule),
    data: { breadcrumb: 'Tu Cámara' },
  },
  {
    path: '**',
    redirectTo: 'template',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
