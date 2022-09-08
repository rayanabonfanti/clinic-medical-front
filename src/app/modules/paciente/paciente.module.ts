import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SolicitacaoSucessoComponent } from './pages/solicitacao-sucesso/solicitacao-sucesso.component';
import { PacienteUsuarioComponent } from './pages/paciente-usuario/paciente-usuario.component';

@NgModule({
  declarations: [
    PacienteComponent,
    SolicitacaoSucessoComponent,
    PacienteUsuarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PacienteRoutingModule
    //HeaderModule,
    //FooterModule
  ],
})
export class PacienteModule { }