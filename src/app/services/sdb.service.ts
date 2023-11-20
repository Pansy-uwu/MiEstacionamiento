import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario, Estacionamiento } from '../interfaces/idb';
import { Estacionamientos } from '../interfaces/idbs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


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

  obtenerEstacionamientos(): Observable<Estacionamientos[]> {
    return this.httpClient.get<Estacionamientos[]>(`${environment.apiURL}/estacionamiento`).pipe(
      tap(estacionamientos => console.log('Estacionamientos obtenidos:', estacionamientos))
    );
  }

  obtenerEstacionamientosPorCorreo(correo: string): Observable<Estacionamientos[]> {
    return this.httpClient.get<Estacionamientos[]>(`${environment.apiURL}/estacionamiento?correo=${correo}`).pipe(
      tap(estacionamientos => console.log('Estacionamientos obtenidos:', estacionamientos))
    );
  }

  agregarEstacionamiento(newEstacionamiento: Estacionamiento): Observable<Estacionamiento> {
    return this.httpClient.post<Estacionamiento>(`${environment.apiURL}/estacionamiento`, newEstacionamiento);
  }

  obtenerEstacionamientoPorId(estacionamientoId: number): Observable<Estacionamientos> {
    return this.httpClient.get<Estacionamientos>(`${environment.apiURL}/estacionamiento/${estacionamientoId}`).pipe(
      tap(estacionamiento => {
        console.log('Enviando solicitud para el estacionamiento con ID:', estacionamientoId);
        console.log('Estacionamiento obtenido por ID:', estacionamiento);
      }),
      catchError(error => {
        console.error('Error al obtener estacionamiento por ID:', error);
        throw error; // Reenviar el error para que lo manejen las partes interesadas
      })
    );
  }
  

  modificarEstacionamiento(estacionamientoId: number, valoresFormulario: any): Observable<any> {
    return this.httpClient.put(`${environment.apiURL}/estacionamiento/${estacionamientoId}`, valoresFormulario)
      .pipe(
        catchError((error) => {
          console.error('Error en la solicitud de modificación', error);
          throw error;
        })
      );
  }
  
  
  
  
  
}
