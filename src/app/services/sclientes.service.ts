import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icliente } from '../interfaces/icliente';

@Injectable({
  providedIn: 'root'
})
export class SclientesService {

  constructor(private httpClient :HttpClient) { }

  crearCliente(newCliente:Icliente):Observable<Icliente>{
    return this.httpClient.post<Icliente>(`${environment.apiURL}/usuario`, newCliente)
  }

  obtenerUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiURL}/usuario`);
  }
}
