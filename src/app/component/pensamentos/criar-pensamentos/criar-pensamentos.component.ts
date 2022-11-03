import { PensamentoModel } from './../../../shared/pensamento.model';
import { PensamentoService } from './../../../core/pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: PensamentoModel = {
    conteudo: '',
    autor: '',
    modelo:''
  }

  constructor(
    private _pensamentoService: PensamentoService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  CriarPensamento(){
    this._pensamentoService.criar(this.pensamento).subscribe(()=> {
      this._router.navigate(['/listar-pensamento']);
    })
  }

  Cancelar() {
    this._router.navigate(['/listar-pensamento']);
  }

}
