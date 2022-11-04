import { PensamentoService } from './../../../core/pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {


  criarForm!: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _pensamentoService: PensamentoService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.criarForm = this._fb.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(120)
      ])],
      autor: ['', Validators.compose([
        Validators.required,
      ])],
      modelo: [''],
      favorito:[false]
    })
  }

  CriarPensamento(){
    if(this.criarForm.valid){
      this._pensamentoService.criar(this.criarForm.value).subscribe(()=> {
        this._router.navigate(['/listar-pensamento']);
      })
    }
  }

  Cancelar() {
    this._router.navigate(['/listar-pensamento']);
  }

  habilitarBotao(): string {
    if(this.criarForm.valid){
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
