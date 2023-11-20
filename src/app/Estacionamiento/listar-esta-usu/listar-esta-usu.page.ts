import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SdbService } from 'src/app/services/sdb.service';
import { AutenticacionService } from 'src/app/services/autenticación.service';
import { Estacionamientos } from 'src/app/interfaces/idbs';
import { EventoService } from 'src/app/services/evento.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-listar-esta-usu',
  templateUrl: './listar-esta-usu.page.html',
  styleUrls: ['./listar-esta-usu.page.scss'],
})
export class ListarEstaUsuPage implements OnInit {
  estacionamientos: Estacionamientos[] = [];

  constructor(
    private sdbService: SdbService,
    private authService: AutenticacionService,
    private router: Router,
    private eventoService: EventoService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.actualizarLista();

    // Suscríbete al evento para actualizar la lista cuando se notifique
    this.eventoService.actualizarLista$.subscribe(() => {
      this.actualizarLista();
    });
  }

  private actualizarLista() {
    const correoUsuarioActual = this.authService.usuarioData?.correo;

    if (correoUsuarioActual) {
      this.sdbService.obtenerEstacionamientosPorCorreo(correoUsuarioActual).subscribe(
        (estacionamientos: Estacionamientos[]) => {
          this.estacionamientos = estacionamientos;
        },
        (error) => {
          console.error('Error al obtener estacionamientos:', error);
        }
      );
    }
  }

  // Método para navegar a la página de modificación con un ID
  navigateToModificar(id: string) {
    this.router.navigate(['/modificar-esta', id]);
  }

  // Método para eliminar un estacionamiento
  eliminarEstacionamiento(id: number) {
    this.sdbService.eliminarEstacionamiento(id.toString()).subscribe(
      () => {
        console.log('Estacionamiento eliminado con éxito');
        // Desencadenar el evento para notificar que la lista ha sido actualizada
        this.eventoService.notificarActualizacion();
      },
      (error) => {
        console.error('Error al eliminar estacionamiento:', error);
      }
    );
  }
  

  async confirmarEliminarEstacionamiento(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que quieres eliminar este estacionamiento?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Eliminación cancelada');
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.eliminarEstacionamiento(id);
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  
  
}
