import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idb } from '../interfaces/idb';

@Injectable({
  providedIn: 'root'
})
export class SdbService {

  constructor(private httpClient :HttpClient) { }

  crearCliente(newCliente:Idb):Observable<Idb>{
    return this.httpClient.post<Idb>(`${environment.apiURL}/db`, newCliente)
  }

  obtenerUsuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiURL}/db`);
  }
}
