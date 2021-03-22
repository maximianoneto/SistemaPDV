 class Registradora{
    constructor(id, vendas, CatalogoProdutos){
        this._id = id
        this._vendas = vendas
        this._catalogoProdutos = CatalogoProdutos
    
        var CatalogoProdutos = new CatalogoProdutos()
        var vendas = new Array()
    }
    criarNovaVenda(){
        new vendas(Date.now())
    }
    entrarItem(id, quantidade, descricaoProduto){
     Venda = null;
     DescricaoProduto = getCatalogo().getDescricaoProduto(id);
     Venda = this.getVendaCorrente();
     Venda.criarItemVenda(descricaoProduto, quantidade);
    }

    finalizarVenda() {
        this.getVendaCorrente().setEstaCompleta(true);
    }

    fazerPagamento(quantiaFornecida) {
        return this.getVendaCorrente().fazerPagamento(quantiaFornecida);
    }

    fazerPagamento(quantiaFornecida, banco) {
        this.getVendaCorrente().fazerPagamento(quantiaFornecida, banco);
    }
    fazerPagamento(quantiaFornecida, operadora, quantidadeParcelas, TipoCalculadora){
        this.getVendaCorrente().fazerPagamento(quantiaFornecida, operadora, quantidadeParcelas, TipoCalculadora);
    }
    getVendaCorrente(){
        console.log(vendas.get(vendas.size() -1));
    }

    getcatalogoProdutos(){
        console.log(this._catalogoProdutos);
    }

    setcatalogoProdutos(CatalogoProdutos){
        this._catalogoProdutos = CatalogoProdutos
    }

    }
