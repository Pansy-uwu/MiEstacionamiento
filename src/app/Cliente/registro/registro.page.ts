import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/idb';
import { SdbService } from 'src/app/services/sdb.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newCliente: Usuario = {
    correo: "",
    nombre: "",
    apellido: "",
    contrasena: ""
  };

  correoError: string = '';
  nombreError: string = '';
  apellidoError: string = '';
  contrasenaError: string = '';

  constructor(private dbServ: SdbService, private router: Router) { }

  ngOnInit() {
  }

  crearCliente() {
    // Resetear mensajes de error
    this.correoError = '';
    this.nombreError = '';
    this.contrasenaError = '';

    // Validar campos
    let validacionExitosa = true;

    if (!this.newCliente.correo) {
      this.correoError = 'Correo electrónico es requerido';
      validacionExitosa = false;
    } else if (!this.validarFormatoCorreo(this.newCliente.correo as string)) {
      this.correoError = 'Correo electrónico no tiene un formato válido';
      validacionExitosa = false;
    } else {
      this.dbServ.obtenerUsuarios().subscribe({
        next: (response: any) => {
          const usuarioArray = response; // Cambiado a response en lugar de response.usuario

          if (Array.isArray(usuarioArray)) {
            const usuarioExistente = usuarioArray.find((user: any) => user.correo === this.newCliente.correo);

            if (usuarioExistente) {
              this.correoError = 'Este correo ya está registrado';
              validacionExitosa = false;
            }

            // Continuar con la lógica si es necesario
            if (validacionExitosa) {
              if (!this.newCliente.nombre) {
                this.nombreError = 'Nombre es requerido';
                validacionExitosa = false;
              }

              if (!this.newCliente.apellido) {
                this.apellidoError = 'Apellido es requerido';
                validacionExitosa = false;
              }

              if (!this.newCliente.contrasena) {
                this.contrasenaError = 'Contraseña es requerida';
                validacionExitosa = false;
              }

              if (validacionExitosa) {
                // Si no hay errores, crear el cliente
                this.dbServ.crearCliente(this.newCliente).subscribe(() => {
                  this.router.navigateByUrl('/inicio');
                });
              }
            }
          } else {
            console.error('La respuesta del servicio no contiene un array:', response);
          }
        }
      });
    }
  }

  validarFormatoCorreo(correo: string): boolean {
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
  }
}
