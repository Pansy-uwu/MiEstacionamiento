import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/idb';

@Injectable({
  providedIn: 'root'
})
export class SdbService {

  constructor(private httpClient :HttpClient) { }

  crearCliente(newCliente:Usuario):Observable<Usuario>{
    return this.httpClient.post<Usuario>(`${environment.apiURL}/usuario`, newCliente)
  }

  obtenerUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiURL}/usuario`);
  }
}
