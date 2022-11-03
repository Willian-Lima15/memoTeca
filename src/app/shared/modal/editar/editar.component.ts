import { PensamentoModel } from 'src/app/shared/pensamento.model';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/core/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

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
    this._pensamentoService.buscarPorId(parseInt(id!)).subscribe((res)=> {
      console.log(res + 'teste');

      this.pensamento = res
    })
  }

  EditarPensamento(){
    this._pensamentoService.editar(this.pensamento).subscribe(()=>{
      this._router.navigate(['/listar-pensamento'])
    })
  }

  Cancelar(){
    this._router.navigate(['/listar-pensamento'])
  }

}
