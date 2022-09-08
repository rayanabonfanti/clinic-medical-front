import { PacienteComponent } from './pages/paciente/paciente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitacaoSucessoComponent } from './pages/solicitacao-sucesso/solicitacao-sucesso.component';
import { PacienteUsuarioComponent } from './pages/paciente-usuario/paciente-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: PacienteComponent
  },
  {
    path: 'paciente-usuario',
    component: PacienteUsuarioComponent
  },
  {
    path: 'solicitacao-sucesso',
    component: SolicitacaoSucessoComponent
  }
//  {
//    path: 'solicitacao-erro',
//    component: SolicitacaoErroComponent
//  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }