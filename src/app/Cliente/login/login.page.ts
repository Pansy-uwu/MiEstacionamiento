import { Component, OnInit } from '@angular/core';
import { SdbService } from 'src/app/services/sdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  newCliente = {
    correo: '',
    contrasena: ''
  };

  errorMessage: string = '';

  constructor(private dbServ: SdbService, private router: Router) {}

  ngOnInit() {}

  ingresarSesion(): void {
    const datosInicioSesion = {
      correo: this.newCliente.correo,
      contrasena: this.newCliente.contrasena
    };

    // Utiliza el servicio para obtener los usuarios
    this.dbServ.obtenerUsuarios().subscribe(usuarios => {
      const usuarioValido = usuarios.find(
        (usuario) =>
          usuario.correo === datosInicioSesion.correo &&
          usuario.contrasena === datosInicioSesion.contrasena
      );

      if (usuarioValido) {
        console.log('Inicio de sesión exitoso');
        this.router.navigateByUrl('/perfil-viaje');
      } else {
        console.log('Credenciales incorrectas');
        // Mostrar mensaje de error
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}
