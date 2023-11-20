// crear un nuevo archivo llamado 'evento.service.ts'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private actualizarListaSource = new Subject<void>();

  actualizarLista$ = this.actualizarListaSource.asObservable();

  notificarActualizacion() {
    this.actualizarListaSource.next();
  }
}
