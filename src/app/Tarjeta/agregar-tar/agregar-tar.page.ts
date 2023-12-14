import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticación.service';

@Component({
  selector: 'app-agregar-tar',
  templateUrl: './agregar-tar.page.html',
  styleUrls: ['./agregar-tar.page.scss'],
})
export class AgregarTarPage implements OnInit {
    creditCard = {
    number: '',
    name: '',
    expiricy: '',
    cvc: ''
  };

  submitForm() {
    console.log('Datos de la tarjeta de crédito:', this.creditCard);
  }
  constructor(private authService: AutenticacionService) { }

  ngOnInit() {
    
  }

  cerrarSesion() {
    this.authService.cerrarSesion();
    // Puedes agregar más lógica después de cerrar la sesión si es necesario
  }
}


