import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private api = 'http://localhost:8080/auth';

  login(email: string, senha: string) {
    return this.http.post(`${this.api}/login`, { email, senha });
  }

}
