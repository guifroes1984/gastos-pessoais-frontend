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

  categoriaChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: []
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
    this.carregarCategorias();
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

  carregarCategorias() {
    const hoje = new Date();
    const inicio = `${hoje.getFullYear()}-01-01`;
    const fim = `${hoje.getFullYear()}-12-31`;

    this.lancamentoService.resumoPorCategoria(inicio, fim).subscribe({
      next: (res) => {

        this.categoriaChartData = {
          labels: res.map(c => c.categoria),
          datasets: [
            {
              data: res.map(c => c.total),
              backgroundColor: this.gerarCores(res.length),
              hoverBackgroundColor: this.gerarCores(res.length)
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

  gerarCores(qtd: number): string[] {
    const cores = [
      '#3b82f6', '#22c55e', '#f59e0b',
      '#ef4444', '#8b5cf6', '#06b6d4',
      '#ec4899', '#84cc16'
    ];

    return Array.from({ length: qtd }, (_, i) => cores[i % cores.length]);
  }
}
