import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Usuario, Estacionamiento } from '../interfaces/idb';
import { Usuarios} from '../interfaces/idbs';
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

  obtenerUsuarioPorId(id: number): Observable<Usuarios> {
    const url = `${environment.apiURL}/usuarios/${id}`;
    console.log('URL de la solicitud:', url);

    return this.httpClient.get<Usuarios>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Manejo de errores del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El servidor retornó un código de error
      console.error(`Código de error del servidor: ${error.status}, ` + `mensaje: ${error.error.message}`);
    }

    // Retorna un observable con un mensaje de error para que la aplicación pueda mostrarlo al usuario
    return throwError('Ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.');
  }

  
  actualizarUsuario(id: number, datosActualizados: any): Observable<Usuarios> {
    return this.httpClient.put<Usuarios>(`${environment.apiURL}/usuario/${id}`, datosActualizados);
  }

  obtenerEstacionamientos(): Observable<Estacionamiento[]> {
    return this.httpClient.get<Estacionamiento[]>(`${environment.apiURL}/estacionamiento`).pipe(
      tap(estacionamientos => console.log('Estacionamientos obtenidos:', estacionamientos))
    );
  }
}
