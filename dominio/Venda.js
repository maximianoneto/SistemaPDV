class Venda {
    constructor(itensVenda, estaCompleta, date, pagamento){
        this._itensVenda = itensVenda
        this._estaCompleta = estaCompleta
        this._date = date
        this._pagamento = pagamento
       
        let itensVendas = new Array()

        const pagamento = {pagamento : "pagamento", 
            }
            
            
            }


        criarItemVenda(DescricaoProduto, quantidade) {
               iv = new itensVendas(DescricaoProduto, quantidade);
                itensVendas.add(iv);
            }
        fazerPagamento(quantiaFornecida) {
                pagamento = new PagamentoDinheiro(quantiaFornecida);
                return calcularTroco();
            }
        fazerPagamento(quantiaFornecida, banco) {
                pagamento = new PagamentoCheque(quantiaFornecida, banco);
            }
        fazerPagamento(quantiaFornecida, operadora,  quantidadeParcelas, tipoCalculadora) {
                pagamento = new PagamentoCartao(quantiaFornecida, operadora, quantidadeParcelas, tipoCalculadora);
           }
        calcularTroco() {
            return pagamento.getQuantiaFornecida() - calcularTotalVenda();
        }
        calcularTotalVenda() {
            totalVenda = 0.0;
            for (i = 0; i < itensVenda.size(); i++) {  
                itemVenda = itensVenda.get(i) 
                   if(itemVenda != null) { 
                       totalVenda += itemVenda.getDescricaoProduto().getPreco() * itemVenda.getQuantidade();
                   }
            }
            return totalVenda;
        }
        set estaCompleta(estaCompleta){
            this._estaCompleta = estaCompleta
        }
       
     toString() {
            new date();
             status = estaCompleta ? `completa` : `incompleta`;
             dataTemp = `${date.getDayOfMonth()}` `/`  `${data.getMonthValue()}` `/` `${data.getYear()}`
             horaTemp = `${data.getHour()}` `:` `${data.getMinute()}`  `:` `${data.getSecond()}`
             cabecalho = `Data: ` `${dataTemp}` ` hora: ` `horaTemp` `\n` 
                                             `\t\t\t\t\tStatus da venda: ` `${status}` `\n\n` 
                                              `Descrição\t\tPreço Unitário(R$)\t\tQuantidade\t\tSubtotal(R$) \n`
            corpo = "";
    
            for (i = 0; i < itensVenda.size; i++) {  
                itemVenda = itensVenda.get(i) 
                   if (ItemVenda != null) {
                corpo += ItemVenda.toString();
                   } else {
    
             rodape = `Total à vista (R$)\t\t\t\t\t\t\t` `${calcularTotalVenda()}` `\n\n` 
                `${this.pagamento.toString()}`
            return cabecalho + corpo + rodape;
                   }
                }
        }

    
    }
