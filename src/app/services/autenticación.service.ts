// AutenticacionService
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SdbService } from 'src/app/services/sdb.service';
import { Usuario } from 'src/app/interfaces/idb';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  usuarioAutenticado$: Observable<boolean> = this.usuarioAutenticadoSubject.asObservable();
  usuarioData: Usuario | undefined;

  constructor(private dbServ: SdbService) {
    this.usuarioAutenticadoSubject.next(this.estaAutenticado());
  }

  private obtenerUsuarioAutenticado(correo: string, contrasena: string): Observable<Usuario | undefined> {
    return this.dbServ.obtenerUsuarios().pipe(
      map((usuarios: Usuario[]) => usuarios.find(user => user.correo === correo && user.contrasena === contrasena))
    );
  }

  private obtenerEstacionamientosPorCorreo(correo: string): Observable<any[]> {
    return this.dbServ.obtenerEstacionamientosPorCorreo(correo);
  }

  iniciarSesion(correo: string, contrasena: string) {
    this.obtenerUsuarioAutenticado(correo, contrasena).pipe(
      switchMap((usuarioEncontrado: Usuario | undefined) => {
        this.usuarioData = usuarioEncontrado;
        return this.obtenerEstacionamientosPorCorreo(correo);
      })
    ).subscribe((estacionamientos: any[]) => {
      this.usuarioAutenticadoSubject.next(true);
      console.log('Inicio de sesión exitoso');
    });
  }

  cerrarSesion(): void {
    this.usuarioAutenticadoSubject.next(false);
    this.usuarioData = undefined;
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticadoSubject.getValue();
  }
}
