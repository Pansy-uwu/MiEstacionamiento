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

  constructor(
    private dbServ: SdbService,
    private authService: AutenticacionService,
    private router: Router
  ) {}

  ngOnInit() {}

  public usuario = {
    correo: "",
    contrasena: ""
  }

  login(){ // Utiliza el servicio para obtener los usuarios
this.dbServ.obtenerUsuarios().subscribe({
    next: (response: any) => {
      const usuarioArray = response;

      if (Array.isArray(usuarioArray)) {
        const usuarioExistente = usuarioArray.find((user: any) => user.correo === this.usuario.correo);

        if (usuarioExistente) {
          // Utiliza el servicio de autenticación para realizar el inicio de sesión
          this.authService.iniciarSesion(this.usuario.correo, this.usuario.contrasena);

          // Verifica si el usuario está autenticado utilizando el servicio de autenticación
          if (this.authService.estaAutenticado()) {
            console.log('Inicio de sesión exitoso');
            this.router.navigateByUrl('/perfil');
          } else {
            console.log('Credenciales incorrectas');
            // Mostrar mensaje de error
            this.errorMessage = 'Credenciales incorrectas';
          }
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
}} 
