import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  salvarToken(token: string) {
  localStorage.setItem('token', token);
}

}
