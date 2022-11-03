import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PensamentoModel } from '../shared/model/pensamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly _API = 'http://localhost:3000/pensamentos'

  constructor(
    private _http: HttpClient
  ) { }

  listar() {
    return this._http.get<PensamentoModel[]>(this._API)
  }

  buscarPorId(id: number) {
    const url = `${this._API}/${id}`
    return this._http.get<PensamentoModel>(url)
  }

  criar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    return this._http.post<PensamentoModel>(this._API, pensamento)
  }

  editar(pensamento: PensamentoModel): Observable<PensamentoModel> {
    const url = `${this._API}/${pensamento.id}`
    return this._http.put<PensamentoModel>(url, pensamento)
  }

  excluir(id: number) : Observable<PensamentoModel>{
    const url = `${this._API}/${id}`
    return this._http.delete<PensamentoModel>(url)
  }

}
