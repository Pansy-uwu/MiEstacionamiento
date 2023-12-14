import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarjeta } from 'src/app/interfaces/idb';

@Component({
  selector: 'app-listar-tar',
  templateUrl: './listar-tar.page.html',
  styleUrls: ['./listar-tar.page.scss'],
})
export class ListarTarPage implements OnInit {
  tarjetas: Tarjeta[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Cambia la ruta del archivo JSON según la ubicación de tu proyecto
    this.http.get('assets/data/tarjetas.json').subscribe(
      (data: any) => {
        this.tarjetas = data.tarjeta;
        console.log('Datos cargados exitosamente:', this.tarjetas);
      },
      (error) => {
        console.error('Error al cargar datos:', error);
      }
    );
  }
}

