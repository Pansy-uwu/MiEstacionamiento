import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SdbService } from 'src/app/services/sdb.service';
import { Estacionamiento } from 'src/app/interfaces/idb';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregrar-esta',
  templateUrl: './agregrar-esta.page.html',
  styleUrls: ['./agregrar-esta.page.scss'],
})
export class AgregrarEstaPage implements OnInit {
  formularioEstacionamiento: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController, private sdbService: SdbService) {
    this.formularioEstacionamiento = this.fb.group({
      direccion: ['', [Validators.required, Validators.maxLength(100)]],
      tarifa: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?(\.\d*)?$/)]],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      disponibilidad: [false],
    });
  }

  ngOnInit() {}

  // Método para acceder fácilmente a los controles del formulario en el HTML
  get f() {
    return this.formularioEstacionamiento.controls;
  }

  agregarEstacionamiento() {
    if (this.formularioEstacionamiento.valid) {
      const datosEstacionamiento = this.formularioEstacionamiento.value;

      // Llamar al servicio para agregar estacionamiento
      this.sdbService.agregarEstacionamiento(this.formularioEstacionamiento.value).subscribe(
        (nuevoEstacionamiento: Estacionamiento) => {
          console.log('Estacionamiento agregado con éxito', nuevoEstacionamiento);

          // Puedes realizar acciones adicionales después de agregar

          // Redirigir a la página de listar-esta o a donde desees
          this.navCtrl.navigateForward('/listar-esta');
        },
        (error: any) => {
          console.error('Error al agregar estacionamiento', error);
        }
      );
    } else {
      // Marcar los campos del formulario como tocados para mostrar mensajes de error
      this.formularioEstacionamiento.markAllAsTouched();
    }
  }
}
