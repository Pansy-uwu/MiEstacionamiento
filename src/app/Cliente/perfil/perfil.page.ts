import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticación.service';
import { SdbService } from 'src/app/services/sdb.service';
import { Usuario } from 'src/app/interfaces/idb';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userData: Usuario | null = null;

  constructor(
    private authService: AutenticacionService,
    private sdbService: SdbService
  ) {}

  ngOnInit() {
    if (this.authService.estaAutenticado()) {
      console.log('Usuario autenticado');
      const correoUsuario = this.authService.usuarioData?.correo;

      if (correoUsuario) {
        console.log('Correo del usuario:', correoUsuario);

        this.sdbService.obtenerUsuarioPorCorreo(correoUsuario).subscribe(
          (data: Usuario | null) => {
            this.userData = data;
          },
          (error) => {
            console.error('Error al obtener datos del usuario:', error);
          }
        );
      } else {
        console.error('Correo del usuario es undefined');
      }
    } else {
      console.error('Usuario no autenticado');
    }
  }
}
