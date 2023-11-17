// perfil.page.ts
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
  userData: Usuario | undefined;

  constructor(
    private authService: AutenticacionService,
    private sdbService: SdbService
  ) {}

  ngOnInit() {
    // Verifica si el usuario está autenticado antes de obtener los datos del usuario
    if (this.authService.estaAutenticado()) {
      const correoUsuario = ''; // Coloca el correo del usuario que deseas obtener
      this.sdbService.obtenerUsuarioPorCorreo(correoUsuario).subscribe((data) => {
        this.userData = data;
      });
    }
  }
}
