import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/models/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.scss']
})
export class CategoriasListComponent implements OnInit {

  categorias: Categoria[] = [];
  carregando = false;

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.carregando = true;

    this.service.listar().subscribe({
      next: (res) => {
        this.categorias = res;
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
      }
    });
  }

  excluir(id: number) {
    if (!confirm('Deseja realmente excluir essa categoria?')) return;

    this.service.excluir(id).subscribe({
      next: () => this.carregar()
    });
  }

}
