import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/core/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  criarForm!: FormGroup
  constructor(
    private _fb: FormBuilder,
    private _pensamentoService: PensamentoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id')
    this._pensamentoService.buscarPorId(parseInt(id!)).subscribe((res) => {
      this.criarForm = this._fb.group({
        id: [res.id],
        conteudo: [res.conteudo, Validators.compose([
          Validators.required,
          Validators.maxLength(120)
        ])],
        autor: [res.autor, Validators.compose([
          Validators.required,
        ])],
        modelo: [res.modelo],
        favorito: [res.favorito]
      })
    })
  }

  EditarPensamento() {
    this._pensamentoService.editar(this.criarForm.value).subscribe(() => {
      this._router.navigate(['/listar-pensamento'])
    })
  }

  Cancelar() {
    this._router.navigate(['/listar-pensamento'])
  }

}
