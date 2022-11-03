import { EditarComponent } from './shared/modal/editar/editar.component';
import { PensamentoComponent } from './component/pensamentos/pensamento/pensamento.component';
import { ListarPensamentosComponent } from './component/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { CriarPensamentosComponent } from './component/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { RodapeComponent } from './component/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirComponent } from './shared/modal/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentosComponent,
    PensamentoComponent,
    ExcluirComponent,
    EditarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
