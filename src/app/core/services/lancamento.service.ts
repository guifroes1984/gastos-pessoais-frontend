import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resumo } from '../models/resumo';
import { Lancamento } from '../models/lancamento';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private api = `${environment.apiUrl}/lancamentos`;

  constructor(private http: HttpClient) { }

  listar(page: number = 0, size: number = 5, filtros?: any) {
  let params: any = {
    page,
    size
  };

  if (filtros?.tipo) params.tipo = filtros.tipo;
  if (filtros?.dataInicio) params.inicio = filtros.dataInicio; // 👈 AQUI
  if (filtros?.dataFim) params.fim = filtros.dataFim; // 👈 AQUI

  return this.http.get<Page<Lancamento>>(`${this.api}/filtro`, { params });
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

  buscarPorId(id: number) {
    return this.http.get<any>(`${this.api}/${id}`);
  }

  atualizar(id: number, dados: any) {
    return this.http.put(`${this.api}/${id}`, dados);
  }

}
