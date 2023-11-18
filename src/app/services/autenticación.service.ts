import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SdbService } from 'src/app/services/sdb.service';
import { Usuario } from 'src/app/interfaces/idb';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
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

  iniciarSesion(correo: string, contrasena: string) {
    this.obtenerUsuarioAutenticado(correo, contrasena).subscribe((usuarioEncontrado: Usuario | undefined) => {
      if (usuarioEncontrado) {
        this.usuarioAutenticadoSubject.next(true);
        this.usuarioData = usuarioEncontrado;
        console.log('Inicio de sesión exitoso');
      }
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
