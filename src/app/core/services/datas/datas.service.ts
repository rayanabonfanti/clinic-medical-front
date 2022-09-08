import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DatasResponseDTO } from '../../models/datas/datasResponseDTO.model';
import { DatasRequestDTO } from '../../models/datas/datasRequestDTO.model';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  fluxoEditar: boolean = false;

  constructor(
    private _http: HttpClient
  ) {
  }

  reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
  
  datasRequestDTO = new DatasRequestDTO();
  datasResponseDTO = new DatasResponseDTO();

  listar(): Observable<any> {
    let endpoint = environment.endpoint.datas;
    
    return this._http.get<any>(endpoint, {headers: this.reqHeader}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  obterDatas(name: any) {
    let endpoint = environment.endpoint.datas + name; 

    return this._http.get<any>(endpoint, {headers: this.reqHeader}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  cadastrar(datasRequestDTO: DatasRequestDTO): Observable<any> {
    let endpoint = environment.endpoint.datas;

    let body = {
      "name": datasRequestDTO.name,
      "telefone": datasRequestDTO.telefone,
      "email": datasRequestDTO.email,
      "endereco": datasRequestDTO.endereco,
    }
    
    return this._http.post<any>(endpoint, body, {headers: this.reqHeader}).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

}