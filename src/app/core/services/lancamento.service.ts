import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resumo } from '../models/resumo';

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  private api = `${environment.apiUrl}/lancamentos`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any>(this.api);
  }

  resumo() {
    return this.http.get<Resumo>(`${this.api}/resumo`);
  }

}
