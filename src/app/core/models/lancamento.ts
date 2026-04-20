export interface Lancamento {
  descricao: string;
  tipo: 'RECEITA' | 'DESPESA';
  valor: number;
  data: string;
}