import { ListarPensamentosComponent } from './component/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { CriarPensamentosComponent } from './component/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'listar-pensamento', pathMatch: 'full'
  },
  {
    path: 'criar-pensamento', component: CriarPensamentosComponent
  },
  {
    path: 'listar-pensamento', component: ListarPensamentosComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
