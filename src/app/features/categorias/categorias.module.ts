import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';


@NgModule({
  declarations: [
    CategoriaFormComponent,
    CategoriasListComponent
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
