import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosListComponent } from './pages/lancamentos-list/lancamentos-list.component';
import { LancamentoFormComponent } from './pages/lancamento-form/lancamento-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LancamentosListComponent,
    LancamentoFormComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule, 
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
