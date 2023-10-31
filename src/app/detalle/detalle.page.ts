import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa el Router de Angular

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  public alertButtons = ['OK'];

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Arriendo Realizado',
      message: 'Se realizó el arriendo exitosamente',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Utiliza el Router para la redirección
            this.router.navigate(['/en-curso']);
          }
        }
      ]
    });

    await alert.present();
  }
}
