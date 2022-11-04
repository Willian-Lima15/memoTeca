import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/core/pensamento.service';
import { PensamentoModel } from 'src/app/shared/model/pensamento.model';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: PensamentoModel = {
    id: 0,
    conteudo: 'I love Angular',
    autor: 'Wli',
    modelo: 'modelo3',
    favorito: false,
  }

  @Input() listaFavoritos: PensamentoModel[]=[]

  constructor(
    private _pensamentoService: PensamentoService
    ) { }

  ngOnInit() {
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIcone(): string {
    if (this.pensamento.favorito == false) {
      return 'favorite_border'
    }
    return 'favorite'
  }

  atualizarFavoritos() {
    this._pensamentoService.mudarFavorito(this.pensamento).subscribe(()=> {
      this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento),1)
    });
  }

}
