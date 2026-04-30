import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => 
      import('./features/auth/auth.module').then(m => m.AuthModule)
  }, 
  {
    path: 'dashboard', 
    loadChildren: () => 
      import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  }, 
  {
    path: 'lancamentos', 
    loadChildren: () => 
      import('./features/lancamentos/lancamentos.module').then(m => m.LancamentosModule)
  }, 
  {
  path: 'categorias',
  loadChildren: () => 
    import('./feature/categorias/categorias.module').then(m => m.CategoriasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
