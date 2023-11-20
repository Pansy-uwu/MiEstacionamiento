// listar-esta-usu.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar el módulo Router
import { SdbService } from 'src/app/services/sdb.service';
import { AutenticacionService } from 'src/app/services/autenticación.service';
import { Estacionamientos } from 'src/app/interfaces/idbs';

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
    private router: Router  // Inyectar el servicio Router
  ) { }

  ngOnInit() {
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
}
