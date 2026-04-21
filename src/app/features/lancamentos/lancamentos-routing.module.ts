import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosListComponent } from './pages/lancamentos-list/lancamentos-list.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { LancamentoFormComponent } from './pages/lancamento-form/lancamento-form.component';

const routes: Routes = [
  {
    path: '', 
    component: LancamentosListComponent, 
    canActivate: [AuthGuard]
  }, 
  {
    path: 'novo', 
    component: LancamentoFormComponent, 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
