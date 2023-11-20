import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SdbService } from 'src/app/services/sdb.service';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticación.service';

@Component({
  selector: 'app-modificar-esta',
  templateUrl: './modificar-esta.page.html',
  styleUrls: ['./modificar-esta.page.scss'],
})
export class ModificarEstaPage implements OnInit {
  formularioEstacionamiento: FormGroup;
  estacionamientoId: number | null = null; // Cambiado a number

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private sdbService: SdbService,
    private router: Router,
    private authService: AutenticacionService // Inyecta el servicio de autenticación
  ) {
    this.formularioEstacionamiento = this.formBuilder.group({
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      tarifa: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      disponibilidad: [false],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const idParam = params['id'];
      this.estacionamientoId = idParam ? +idParam : null; // Asegurándonos de que sea un número
      this.cargarDatosEstacionamiento();
    });
  }

  cargarDatosEstacionamiento() {
    if (this.estacionamientoId !== null) {
      this.sdbService.obtenerEstacionamientoPorId(this.estacionamientoId).subscribe(
        (estacionamientoActual) => {
          this.formularioEstacionamiento.setValue({
            direccion: estacionamientoActual.direccion,
            tarifa: estacionamientoActual.tarifa,
            descripcion: estacionamientoActual.descripcion,
            disponibilidad: estacionamientoActual.disponibilidad,
          });
        },
        (error) => {
          console.error('Error al cargar datos del estacionamiento', error);
        }
      );
    }
  }

  modificarEstacionamiento() {
    if (this.formularioEstacionamiento.valid && this.estacionamientoId !== null) {
      // Obtén el correo del usuario autenticado desde el servicio de autenticación
      const correoUsuario = this.authService.usuarioData?.correo;

      if (correoUsuario) {
        const valoresFormulario = {
          ...this.formularioEstacionamiento.value,
          correo: correoUsuario,
        };

        this.sdbService.modificarEstacionamiento(this.estacionamientoId, valoresFormulario).subscribe(
          (respuesta) => {
            console.log('Estacionamiento modificado con éxito', respuesta);
            this.router.navigate(['/listar-esta-usu']);
          },
          (error) => {
            console.error('Error al modificar estacionamiento', error);
          }
        );
      }
    }
  }
}
