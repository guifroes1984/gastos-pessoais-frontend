import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/core/models/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  id: number | null = null;
  carregando = false;

  form = this.fb.group({
    nome: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.carregarCategoria();
    }
  }

  carregarCategoria() {
    this.carregando = true;

    this.service.buscarPorId(this.id!).subscribe({
      next: (res) => {
        this.form.patchValue(res);
        this.carregando = false;
      },
      error: () => {
        this.carregando = false;
      }
    });
  }

  salvar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const categoria: Categoria = this.form.value as Categoria;

    if (this.id) {
      this.service.atualizar(this.id, categoria).subscribe({
        next: () => this.router.navigate(['/categorias'])
      });
    } else {
      this.service.salvar(categoria).subscribe({
        next: () => this.router.navigate(['/categorias'])
      });
    }
  }

  voltar() {
    this.router.navigate(['/categorias']);
  }

}
