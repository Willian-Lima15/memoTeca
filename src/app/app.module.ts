import { PensamentoComponent } from './component/pensamentos/pensamento/pensamento.component';
import { ListarPensamentosComponent } from './component/pensamentos/listar-pensamentos/listar-pensamentos.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CabecalhoComponent } from './component/cabecalho/cabecalho.component';
import { CriarPensamentosComponent } from './component/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { RodapeComponent } from './component/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentosComponent,
    PensamentoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
