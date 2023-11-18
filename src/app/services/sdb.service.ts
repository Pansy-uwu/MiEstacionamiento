import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario, Estacionamiento } from '../interfaces/idb';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SdbService {
  constructor(private httpClient: HttpClient) {}

  crearCliente(newCliente: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(`${environment.apiURL}/usuario`, newCliente);
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${environment.apiURL}/usuario`).pipe(
      tap(usuarios => console.log('Usuarios obtenidos:', usuarios))
    );
  }
  
  obtenerUsuarioPorCorreo(correo: string): Observable<Usuario | null> {
    return this.httpClient.get<Usuario[]>(`${environment.apiURL}/usuario`).pipe(
      map((usuarios: Usuario[]) => {
        return usuarios.find((usuario) => usuario.correo === correo) || null;
      })
    );
  }

  obtenerEstacionamientos(): Observable<Estacionamiento[]> {
    return this.httpClient.get<Estacionamiento[]>(`${environment.apiURL}/estacionamiento`).pipe(
      tap(estacionamientos => console.log('Usuarios obtenidos:', estacionamientos))
    );
  }
}
