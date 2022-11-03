import { PensamentoService } from './../../../core/pensamento.service';
import { Component, OnInit } from '@angular/core';
import { PensamentoModel } from 'src/app/shared/pensamento.model';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: PensamentoModel[]=[]
  constructor(
    private _pensamentoService: PensamentoService
  ) { }

  ngOnInit() {
    this._pensamentoService.listar().subscribe((res: any)=> {
      this.listaPensamentos = res;
    });
  }

}
