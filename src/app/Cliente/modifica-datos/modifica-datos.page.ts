import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SdbService } from 'src/app/services/sdb.service';
import { Usuarios } from 'src/app/interfaces/idbs';

@Component({
  selector: 'app-modifica-datos',
  templateUrl: './modifica-datos.page.html',
  styleUrls: ['./modifica-datos.page.scss'],
})
export class ModificaDatosPage implements OnInit {
  usuario: Usuarios = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    contrasena: '',
  };

  constructor(
    private usuarioService: SdbService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id']; // Asegúrate de tener la ruta configurada con un parámetro llamado 'id'
    this.obtenerUsuario(id);
  }

  obtenerUsuario(id: number) {
    this.usuarioService.obtenerUsuarioPorId(id).subscribe(
      (resp: Usuarios) => {
        this.usuario = resp;
      },
      (error) => {
        console.error('Error al obtener el usuario', error);
      }
    );
  }
  
  actualizarUsuario() {
    const datosActualizados = {
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      correo: this.usuario.correo,
      contrasena: this.usuario.contrasena,
    };
  
    this.usuarioService.actualizarUsuario(this.usuario.id, datosActualizados).subscribe(
      (resp: any) => {
        console.log('Usuario actualizado con éxito', resp);
        this.router.navigate(['/perfil']);
      },
      (error: any) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }
}
