import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SdbService } from 'src/app/services/sdb.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioAutenticadoSubject = new BehaviorSubject<boolean>(false);
  usuarioAutenticado$: Observable<boolean> = this.usuarioAutenticadoSubject.asObservable();

  constructor(private dbServ: SdbService) {
    this.usuarioAutenticadoSubject.next(this.estaAutenticado())
  }

  iniciarSesion(correo: string, contrasena: string) {
    this.dbServ.obtenerUsuarios().subscribe({
      next: (response: any) => {
        const usuarioArray = response;
  
        if (Array.isArray(usuarioArray)) {
          const usuarioEncontrado = usuarioArray.find((user: any) => user.correo === correo && user.contrasena === contrasena);
  
          if (usuarioEncontrado) {
            // Si se encuentra el usuario, simula el inicio de sesión
            localStorage.setItem('usuarioAutenticado', 'true');
            this.usuarioAutenticadoSubject.next(true);
          }
        }
      },
      error: (error: any) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
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
