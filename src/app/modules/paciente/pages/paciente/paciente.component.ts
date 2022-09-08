import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClinicaMedicaService } from 'src/app/core/services/clinica-medica/clinica-medica.service';
import { DatasService } from 'src/app/core/services/datas/datas.service';
import { PacienteService } from 'src/app/core/services/paciente/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent implements OnInit {

  formDatasPaciente = new FormGroup({
    name: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl(),
    endereco: new FormControl(),
    dataNascimento: new FormControl(),
  });

  constructor(
    public _router: Router,
    private _datasService: DatasService,
    private _pacienteService: PacienteService,
    private _clinicaMedicaService: ClinicaMedicaService,
    private _location: Location,    
  ) {
  }

  ngOnInit() {
    
  }

  voltar() {
    this._location.back();
  }

  cadastrarDatas() {
        this._datasService.cadastrar(this._datasService.datasRequestDTO).subscribe({
          next:(data) => {
            if (data) {
              this._clinicaMedicaService.fluxoDatasPaciente = true;
              this.fromToPaciente();
            }
          }, 
          error: (error:any) => {
            this._clinicaMedicaService.fluxoDatasPaciente = false;
            this.routerSolicitacaoErro();
          }
        });
  }

  routerSolicitacaoSucesso() {
    this._router.navigate(['paciente/solicitacao-sucesso']);
  }

  routerSolicitacaoErro() {
    //this._router.navigate(['paciente/solicitacao-erro']);
    this._router.navigate(['paciente/solicitacao-sucesso']);
  }

  routerPacienteUsuario() {
    this._router.navigate(['paciente/paciente-usuario']);
  }

  fromToPaciente() {
    this._pacienteService.pacienteRequestDTO.dataNascimento = this.formDatasPaciente.value.dataNascimento;
    
    this.routerPacienteUsuario();
  }

  fromToDatas() {
    this._datasService.datasRequestDTO.name = this.formDatasPaciente.value.name;
    this._datasService.datasRequestDTO.telefone = this.formDatasPaciente.value.telefone;
    this._datasService.datasRequestDTO.email = this.formDatasPaciente.value.email;
    this._datasService.datasRequestDTO.endereco = this.formDatasPaciente.value.endereco;
  }

  continuar() {
    //if (this.formDatasPaciente.status == 'VALID') {
      this.fromToDatas();
      this.cadastrarDatas();
    //}
  }

}
