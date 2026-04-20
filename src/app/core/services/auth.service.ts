import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private api = `${environment.apiUrl}/auth`;

  login(email: string, senha: string) {
    return this.http.post(`${this.api}/login`, { email, senha });
  }

}
