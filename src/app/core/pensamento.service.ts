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

  listar(pagina:number, filtro: string, favoritos: boolean): Observable<PensamentoModel[]> {
    const itemPorPagina = 6;

    let params = new HttpParams().set("_page", pagina).set("_limit", itemPorPagina)

    if(filtro.trim().length > 2) {
      params = params.set('q', filtro)
    }

    if(favoritos) {
      params = params.set("favorito", true)
    }

    return this._http.get<PensamentoModel[]>(this._API, {params})
  }

  // listarPensamentosFavorito(pagina: number, filtro: string): Observable<PensamentoModel[]> {
  //   const itemPorPagina = 6;

  //   let params = new HttpParams().set("_page", pagina).set("_limit", itemPorPagina).set("favorito", true)

  //   if(filtro.trim().length > 2) {
  //     params = params.set('q', filtro)
  //   }

  //   return this._http.get<PensamentoModel[]>(this._API, {params})
  // }

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

  mudarFavorito(pensamento: PensamentoModel): Observable<PensamentoModel>{
     pensamento.favorito = !pensamento.favorito
     return this.editar(pensamento)
  }

}
