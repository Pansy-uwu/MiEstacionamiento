import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../interfaces/idb';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  usuarioAutenticado$: Observable<boolean> = this.usuarioAutenticadoSubject.asObservable();

  constructor() {
    this.usuarioAutenticadoSubject.next(this.estaAutenticado());
  }

  iniciarSesion(correo: string, contrasena: string) {

    // Simula la autenticación verificando el correo y la contraseña en el JSON
    const usuarios: Usuario[] = JSON.parse(localStorage.getItem('db') || '{"usuario": []}').usuario;
    const usuarioEncontrado = usuarios.find((usuario: Usuario) => usuario.correo === correo && usuario.contrasena === contrasena);

    if (usuarioEncontrado) {
      // Si se encuentra el usuario, simula el inicio de sesión
      localStorage.setItem('usuarioAutenticado', 'true');
      this.usuarioAutenticadoSubject.next(true);
    }
  }

  cerrarSesion(): void {
    // Simula el cierre de sesión
    localStorage.removeItem('usuarioAutenticado');
    this.usuarioAutenticadoSubject.next(false);
  }

  estaAutenticado(): boolean {
    // Simula la verificación de la autenticación
    return localStorage.getItem('usuarioAutenticado') === 'true';
  }
}
