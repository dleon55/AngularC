import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { SwitchesComponent } from './switches/switches.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMinDirective } from '../directives/custom-min.directive';

@NgModule({
  declarations: [BasicosComponent, SwitchesComponent, DinamicosComponent,CustomMinDirective],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

  ],
})
export class TemplateModule {}
