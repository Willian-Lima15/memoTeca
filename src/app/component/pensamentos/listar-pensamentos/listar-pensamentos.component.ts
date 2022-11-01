import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/shared/pensamento.model';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[]=[]
  constructor() { }

  ngOnInit() {
  }

}
