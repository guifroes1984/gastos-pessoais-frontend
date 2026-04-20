import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LancamentoService } from 'src/app/core/services/lancamento.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  saldo = 0;
  receitas = 0;
  despesas = 0;

  constructor(
    private tokenService: TokenService, 
    private lancamentoService: LancamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarResumo();
  }

  carregarResumo() {
    this.lancamentoService.resumo().subscribe({
      next: (res: any) => {
        this.saldo = res.saldo;
        this.receitas = res.totalReceitas;
        this.despesas = res.totalDespesas;
      }
    })
  }

  logout() {
    this.tokenService.removerToken();
    this.router.navigate(['/login']);
  }

}
