import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/shared/pensamento.model';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autor: 'Wli',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit() {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
