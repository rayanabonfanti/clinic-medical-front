import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinicaMedicaService {

  fluxoDatasPaciente: boolean = false;
  name: String = "";

  constructor(
  ) {
  }

}