import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gastos-pessoais-frontend';

  constructor(private router: Router) { }

  mostrarSidebar(): boolean {
    return this.router.url !== '/login';
  }

}
