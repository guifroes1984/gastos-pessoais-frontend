import { Component, OnInit } from '@angular/core';
import { LancamentoService } from 'src/app/core/services/lancamento.service';

@Component({
  selector: 'app-lancamentos-list',
  templateUrl: './lancamentos-list.component.html',
  styleUrls: ['./lancamentos-list.component.scss']
})
export class LancamentosListComponent implements OnInit {

  lancamentos: any[] = [];

  constructor(private service: LancamentoService) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.service.listar().subscribe({
      next: (res: any) => {
        this.lancamentos = res.content ?? res;
      },
    });
  }

}
