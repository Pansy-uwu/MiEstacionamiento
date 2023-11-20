import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/interfaces/idb';

@Component({
  selector: 'app-listar-tar',
  templateUrl: './listar-tar.page.html',
  styleUrls: ['./listar-tar.page.scss'],
})
export class ListarTarPage implements OnInit {
  tarjetas: Tarjeta [] = [];


  constructor() { }

  ngOnInit() {
  }

}
