import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicaMedicaService } from 'src/app/core/services/clinica-medica/clinica-medica.service';
import { DatasService } from 'src/app/core/services/datas/datas.service';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente-usuario',
  templateUrl: './paciente-usuario.component.html',
  styleUrls: ['./paciente-usuario.component.scss']
})
export class PacienteUsuarioComponent implements OnInit {

  constructor(
    public _router: Router,
    private _datasService: DatasService,
    private _clinicaMedicaService: ClinicaMedicaService,
    private _pacienteService: PacienteService
  ) { }

  ngOnInit(): void {
    this.verificaDatasCadastro();
  }

  verificaDatasCadastro(){
    if(this._clinicaMedicaService.fluxoDatasPaciente){
      this._datasService.obterDatas(this._datasService.datasRequestDTO.name).subscribe({
        next:(data) => {
          if (data) {
            this._pacienteService.pacienteRequestDTO.datas = data;          
            this.cadastrarPaciente();
          }
        }, 
        error: (error:any) => {
          this.routerSolicitacaoErro();
        }
      });
    } else{
      this.routerSolicitacaoErro();
    }
  }

  routerSolicitacaoSucesso() {
    this._router.navigate(['paciente/solicitacao-sucesso']);
  }

  routerSolicitacaoErro() {
    //this._router.navigate(['paciente/solicitacao-erro']);
    this._router.navigate(['paciente/solicitacao-sucesso']);
  }

  cadastrarPaciente(){
    this._pacienteService.cadastrar(this._pacienteService.pacienteRequestDTO).subscribe({
      next:(data) => {
        if (data) {
          this.routerSolicitacaoSucesso();
        }
      }, 
      error: (error:any) => {
        this.routerSolicitacaoErro();
      }
    });
  }

}
