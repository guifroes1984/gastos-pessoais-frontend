import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LancamentoService } from 'src/app/core/services/lancamento.service';

@Component({
  selector: 'app-lancamento-form',
  templateUrl: './lancamento-form.component.html',
  styleUrls: ['./lancamento-form.component.scss']
})
export class LancamentoFormComponent implements OnInit {

  categorias: any[] = [];

  constructor(
    private fb: FormBuilder, 
    private service: LancamentoService, 
    private router: Router
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
  }

  salvar() {
    if (this.form.invalid) return;

    this.service.salvar(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/lancamentos']);
      }
    })
  }

}
