import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resumo } from '../models/resumo';
import { Lancamento } from '../models/lancamento';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private api = `${environment.apiUrl}/lancamentos`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Lancamento[]>(this.api);
  }

  resumo() {
    return this.http.get<Resumo>(`${this.api}/resumo`);
  }

  salvar(dados: any) {
    return this.http.post(this.api, dados);
  }

  listarCategorias() {
    return this.http.get<any[]>(`${environment.apiUrl}/categorias`);
  }

  excluir(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }

}
