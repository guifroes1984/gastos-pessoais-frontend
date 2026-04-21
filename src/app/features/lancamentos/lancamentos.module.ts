import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosListComponent } from './pages/lancamentos-list/lancamentos-list.component';
import { LancamentoFormComponent } from './pages/lancamento-form/lancamento-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LancamentosListComponent,
    LancamentoFormComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
