import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PacienteRequestDTO } from '../../models/paciente/pacienteRequestDTO.model';
import { PacienteResponseDTO } from '../../models/paciente/pacienteResponseDTO.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  fluxoEditar: boolean = false;

  constructor(
    private _http: HttpClient
  ) {
  }

  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  
  pacienteRequestDTO = new PacienteRequestDTO();
  pacienteResponseDTO = new PacienteResponseDTO();

  listar(): Observable<any> {
    let endpoint = environment.endpoint.paciente;
    
    return this._http.get<any>(endpoint, {headers: this.reqHeader}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  cadastrar(pacienteRequestDTO: PacienteRequestDTO): Observable<any> {
    let endpoint = environment.endpoint.paciente;

    let body = {
      "dataNascimento": pacienteRequestDTO.dataNascimento,
      "datas": pacienteRequestDTO.datas,
    }
    
    //vem tudo certinho, mas vai direto pro catchError
    return this._http.post<any>(endpoint, body, {headers: this.reqHeader}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

}