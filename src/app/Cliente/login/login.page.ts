import { Component, OnInit } from '@angular/core';
import { SdbService } from 'src/app/services/sdb.service';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticación.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  errorMessage: string = '';
  credenciales = {
    correo: '',
    contrasena: '',
  };

  constructor(
    private dbServ: SdbService,
    private authService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.errorMessage = ''; // Limpiar el mensaje de error al intentar iniciar sesión nuevamente

    this.dbServ.obtenerUsuarios().subscribe({
      next: (response: any) => {
        const usuarioArray = response;

        if (Array.isArray(usuarioArray)) {
          const usuarioExistente = usuarioArray.find((user: any) => user.correo === this.credenciales.correo);

          if (usuarioExistente) {
            this.authService.iniciarSesion(this.credenciales.correo, this.credenciales.contrasena);

            this.authService.usuarioAutenticado$.subscribe((autenticado: boolean) => {
              if (autenticado) {
                console.log('Inicio de sesión exitoso');
                this.router.navigateByUrl('/perfil');
              } else {
                this.errorMessage = 'Credenciales incorrectas';
              }
            });
          } else {
            console.log('Usuario no encontrado');
            this.errorMessage = 'Usuario no encontrado';
          }
        } else {
          console.log('Respuesta no válida del servidor');
          this.errorMessage = 'Respuesta no válida del servidor';
        }
      },
      error: (error: any) => {
        console.error('Error al obtener usuarios:', error);
        this.errorMessage = 'Error al obtener usuarios';
      }
    });
  }
}
