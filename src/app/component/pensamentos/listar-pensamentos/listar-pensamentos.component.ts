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
    },
    {
      conteudo: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe eligendi enim distinctio voluptatibus beatae voluptates vitae, impedit, quae libero dignissimos, dolores nam nesciunt similique illo repellat inventore quaerat nihil voluptate?',
      autor: 'Lorem',
      modelo: 'modelo1'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
