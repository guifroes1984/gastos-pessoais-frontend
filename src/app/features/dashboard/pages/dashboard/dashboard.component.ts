import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration } from 'chart.js';
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

  resumo: any;

  chartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Receitas', 'Despesas'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#22c55e', '#ef4444'], 
        hoverBackgroundColor: ['#16a34a', '#dc2626']
      }
    ]
  };

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

        this.chartData = {
          ...this.chartData,
          datasets: [
            {
              ...this.chartData.datasets[0],
              data: [res.totalReceitas, res.totalDespesas]
            }
          ]
        };
      }
    });
  }

  logout() {
    this.tokenService.removerToken();
    this.router.navigate(['/login']);
  }

}
