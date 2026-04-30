export interface Lancamento {
  id: number;
  descricao: string;
  tipo: 'RECEITA' | 'DESPESA';
  valor: number;
  data: string;
  categoriaId?: number;
}