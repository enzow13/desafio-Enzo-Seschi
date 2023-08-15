class CaixaDaLanchonete {
    constructor() {
      this.cardapio = [
        { codigo: 'cafe', descricao: 'Café', valor: 3.00 },
        { codigo: 'chantily', descricao: 'Chantily', valor: 1.50 },
        { codigo: 'suco', descricao: 'Suco Natural', valor: 6.20 },
        { codigo: 'sanduiche', descricao: 'Sanduíche', valor: 6.50 },
        { codigo: 'queijo', descricao: 'Queijo', valor: 2.00 },
        { codigo: 'salgado', descricao: 'Salgado', valor: 7.25 },
        { codigo: 'combo1', descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
        { codigo: 'combo2', descricao: '1 Café e 1 Sanduíche', valor: 7.50 },
      ];
  
      this.formasDePagamento = ['debito', 'credito', 'dinheiro'];
    }
  
    calcularValorDaCompra(formaDePagamento, itens) {
      // Verifica se a forma de pagamento é válida
      if (!this.formasDePagamento.includes(formaDePagamento)) {
        return 'Forma de pagamento inválida!';
      }
  
      // Inicializa o valor total da compra
      let valorTotal = 0;
  
      // Percorre os itens da compra
      for (const itemStr of itens) {
        const [itemCodigo, quantidade] = itemStr.split(',');
  
        // Encontra o item no cardápio pelo código
        const item = this.cardapio.find(item => item.codigo === itemCodigo);
  
        // Se o item não existir, retorna mensagem de erro
        if (!item) {
          return 'Item inválido!';
        }
  
        // Adiciona o valor do item multiplicado pela quantidade
        valorTotal += item.valor * parseInt(quantidade);
      }
  
      // Verifica a forma de pagamento e aplica descontos/acréscimos
      if (formaDePagamento === 'dinheiro') {
        valorTotal *= 0.95; // 5% de desconto
      } else if (formaDePagamento === 'credito') {
        valorTotal *= 1.03; // 3% de acréscimo
      }
  
      // Formata o valor para o padrão "R$ X,XX"
      const valorFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
  
      return valorFormatado;
    }
  }
  
  // Exemplo de uso
  const caixa = new CaixaDaLanchonete();
  
  console.log(caixa.calcularValorDaCompra('debito', ['chantily,1']));
  console.log(caixa.calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']));
  console.log(caixa.calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']));