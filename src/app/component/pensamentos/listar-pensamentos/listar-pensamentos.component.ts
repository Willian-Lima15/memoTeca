import { Router } from '@angular/router';
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
  favoritos: boolean =  false;
  listaFavoritos: PensamentoModel[]=[]
  titulo: string = 'Meu mural';

  constructor(
    private _pensamentoService: PensamentoService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((res)=> {
      this.listaPensamentos = res;
    });
  }

  carregarMais() {
    this._pensamentoService.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((res)=> {
        this.listaPensamentos.push(...res);
        if(this.listaPensamentos.length) {
          this.haMaisPensamentos = false
        }
    })
  }

  pesquisar() {
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this._pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((res)=> {
      this.listaPensamentos = res
    })
  }

  recarregarPagina() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    this._router.onSameUrlNavigation = 'reload';
    this._router.navigate([this._router.url]);
  }

  listarFavoritos() {
    this.titulo = 'Meus favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this._pensamentoService.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe((res) => {
        this.listaPensamentos = res
        this.listaFavoritos = res
      })
  }

}
