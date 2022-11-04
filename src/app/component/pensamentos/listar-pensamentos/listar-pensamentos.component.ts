import { PensamentoService } from './../../../core/pensamento.service';
import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/shared/model/pensamento.model';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: PensamentoModel[]=[]
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  filtro: string = '';

  constructor(
    private _pensamentoService: PensamentoService
  ) { }

  ngOnInit() {
    this._pensamentoService.listar(this.paginaAtual, this.filtro).subscribe((res: any)=> {
      console.log(res);

      this.listaPensamentos = res;
    });
  }

  carregarMais() {
    this._pensamentoService.listar(++this.paginaAtual, this.filtro).subscribe((res)=> {
        this.listaPensamentos.push(...res);
        if(this.listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
    })
  }

  pesquisar() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this._pensamentoService.listar(this.paginaAtual, this.filtro).subscribe((res)=> {
      this.listaPensamentos = res
    })
  }

}
