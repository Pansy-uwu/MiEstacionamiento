// listar-esta.page.ts
import { Component, OnInit } from '@angular/core';
import { SdbService } from 'src/app/services/sdb.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AutenticacionService } from 'src/app/services/autenticación.service';

@Component({
  selector: 'app-listar-esta',
  templateUrl: './listar-esta.page.html',
  styleUrls: ['./listar-esta.page.scss'],
})
export class ListarEstaPage implements OnInit {
  estacionamientos: any[] = [];
  public alertButtons = ['OK'];

  constructor(private sdbService: SdbService, private alertController: AlertController, private router: Router,
    private authService: AutenticacionService) {}

  ngOnInit() {
    this.obtenerEstacionamientosConNombres();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Registrate',
      message: 'Para poder arrendar debe estar registrado como usuario',
      buttons: [
        {
          text: 'Registrarse',
          handler: () => {
            // Utiliza el Router para la redirección
            this.router.navigate(['/registro']);
          }
        }
      ]
    });
    await alert.present();
  }
  obtenerEstacionamientosConNombres() {
    this.sdbService.obtenerEstacionamientos().subscribe((estacionamientos) => {
      const observables = estacionamientos.map((estacionamiento) => {
        return this.sdbService.obtenerUsuarioPorCorreo(estacionamiento.correo);
      });

      forkJoin(observables).subscribe((usuarios) => {
        this.estacionamientos = estacionamientos.map((estacionamiento, index) => {
          const nombreUsuario = usuarios[index]?.nombre || 'Sin nombre';
          const nombreApellido = usuarios[index]?.apellido || 'Sin apellido';
          return { ...estacionamiento, nombreUsuario, nombreApellido };
        });
      });
    });
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
  }

  onAlertPresented(event: any) {
    console.log('La alerta se presentó', event);
  }
}
