import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/core/pensamento.service';
import { PensamentoModel } from '../../model/pensamento.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  pensamento: PensamentoModel = {
    id: 0,
    conteudo: '',
    autor: '',
    modelo:''
  }

  constructor(
    private _pensamentoService: PensamentoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id')
    this._pensamentoService.buscarPorId(Number.parseInt(id ?? '')).subscribe(res => {
      this.pensamento = res;
    })
  }

  excluir() {
    if(this.pensamento.id){
      this._pensamentoService.excluir(this.pensamento.id).subscribe(()=>{
        this._router.navigate(['/listar-pensamento'])
      });
    }
  }

  cancelar() {
    this._router.navigate(['/listar-pensamento'])
  }



}
