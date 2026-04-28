import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LancamentoService } from 'src/app/core/services/lancamento.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.scss']
})
export class LancamentoFormComponent implements OnInit {

  id: number | null = null;
  categorias: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: LancamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  form = this.fb.group({
    descricao: ['', Validators.required],
    tipo: ['RECEITA', Validators.required],
    valor: [0, Validators.required],
    data: ['', Validators.required],
    categoriaId: [null, Validators.required]
  });

  ngOnInit(): void {
    this.service.listarCategorias().subscribe({
      next: (res) => this.categorias = res
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    console.log('ID da rota:', idParam);

    if (idParam) {
      this.id = Number(idParam);
      this.carregarLancamento();
    }

  }

  salvar() {
    if (this.form.invalid) return;

    const payload = {
      ...this.form.value,
      categoria: { id: this.form.value.categoriaId }
    };

    if (this.id) {
      this.service.atualizar(this.id, payload).subscribe({
        next: () => this.router.navigate(['/lancamentos'])
      });
    } else {
      this.service.salvar(payload).subscribe({
        next: () => this.router.navigate(['/lancamentos'])
      });
    }
  }

  carregarLancamento() {
    this.service.buscarPorId(this.id!).subscribe({
      next: (res: any) => {
        this.form.patchValue({
          descricao: res.descricao,
          tipo: res.tipo,
          valor: res.valor,
          data: res.data?.split('T')[0],
          categoriaId: res.categoriaId
        });
      }
    });
  }

}
