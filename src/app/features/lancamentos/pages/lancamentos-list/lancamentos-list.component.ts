import { Component, OnInit } from '@angular/core';
import { Lancamento } from 'src/app/core/models/lancamento';
import { LancamentoService } from 'src/app/core/services/lancamento.service';

@Component({
  selector: 'app-lancamentos-list',
  templateUrl: './lancamentos-list.component.html',
  styleUrls: ['./lancamentos-list.component.scss']
})
export class LancamentosListComponent implements OnInit {

  lancamentos: Lancamento[] = [];

  pagina = 0;
  totalPaginas = 0;

  constructor(private service: LancamentoService) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.service.listar(this.pagina).subscribe({
      next: (res) => {
        this.lancamentos = res.content;
        this.totalPaginas = res.totalPages;
      },
    });
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir?')) return;

    this.service.excluir(id).subscribe({
      next: () => {
        this.carregar();
      }
    });
  }

  paginaAnterior() {
    if (this.pagina > 0) {
      this.pagina--;
      this.carregar();
    }
  }

  proximaPagina() {
    if (this.pagina < this.totalPaginas - 1) {
      this.pagina++;
      this.carregar();
    }
  }

}
