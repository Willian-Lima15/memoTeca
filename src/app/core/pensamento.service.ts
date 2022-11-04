import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
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

  listar(pagina:number): Observable<PensamentoModel[]> {
    const itemPorPagina = 6;
    let params = new HttpParams().set("_page", pagina).set("_limit", itemPorPagina)

    return this._http.get<PensamentoModel[]>(this._API, {params})
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

  buscarPorId(id: number): Observable<PensamentoModel> {
    const url = `${this._API}/${id}`
    return this._http.get<PensamentoModel>(url)
  }

}
