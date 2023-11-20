import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    
  }

}
