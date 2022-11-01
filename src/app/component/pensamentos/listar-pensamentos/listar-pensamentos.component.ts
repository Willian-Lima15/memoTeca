import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Primeiro texto',
          autor: 'Wlises',
          modelo: 'modelo3'
    },
    {
      conteudo: 'Segundo texto',
          autor: 'Willian',
          modelo: 'modelo2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
