import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icliente } from 'src/app/interfaces/icliente';
import { SclientesService } from 'src/app/services/sclientes.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newCliente: Icliente = {
    correo: "",
    nombre: "",
    contrasena: ""
  };

  correoError: string = '';
  nombreError: string = '';
  contrasenaError: string = '';

  constructor(private clienteServ: SclientesService, private router: Router) { }

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
      this.clienteServ.obtenerUsuarios().subscribe((usuarios: any[]) => {
        const usuarioExistente = usuarios.find((usuario: any) => usuario.correo === this.newCliente.correo);
        if (usuarioExistente) {
          this.correoError = 'Este correo ya está registrado';
          validacionExitosa = false;
        }

        // Continuar con la lógica si es necesario
        if (validacionExitosa) {
          if (!this.newCliente.nombre) {
            this.nombreError = 'Nombre de usuario es requerido';
            validacionExitosa = false;
          }

          if (!this.newCliente.contrasena) {
            this.contrasenaError = 'Contraseña es requerida';
            validacionExitosa = false;
          }

          if (validacionExitosa) {
            // Si no hay errores, crear el cliente
            this.clienteServ.crearCliente(this.newCliente).subscribe(() => {
              this.router.navigateByUrl('/inicio');
            });
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
