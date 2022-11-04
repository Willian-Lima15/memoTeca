import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botoes-paginacao',
  templateUrl: './botoes-paginacao.component.html',
  styleUrls: ['./botoes-paginacao.component.css']
})
export class BotoesPaginacaoComponent implements OnInit {

  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
