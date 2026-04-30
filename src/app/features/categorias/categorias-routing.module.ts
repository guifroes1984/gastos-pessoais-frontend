import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';

const routes: Routes = [
  { path: '', component: CategoriasListComponent },
  { path: 'nova', component: CategoriaFormComponent },
  { path: 'editar/:id', component: CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
