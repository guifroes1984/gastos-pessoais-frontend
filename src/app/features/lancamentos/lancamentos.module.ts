import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosListComponent } from './pages/lancamentos-list/lancamentos-list.component';


@NgModule({
  declarations: [
    LancamentosListComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
