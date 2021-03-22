class TestePDV {
    
    constructor(endereco, loja){
        this._endereco = endereco
        this._loja = loja
        loja = new loja(`Supermercado Preço Bão`, endereco)
        endereco = new endereco (`Rua X`, `""`,`5`,`Alfenas`,`Aeroporto`,`MG`,`37130-000`)
    try{

    Registradora = loja.getRegistradora(`RO1`)
    registradora.criarNovaVenda();
    
    registradora.entrarItem(`01`, 3);
    registradora.entrarItem(`02`, 2);
    registradora.entrarItem(`03`, 1);

    registradora.finalizarVenda();

    const totalVenda = registradora.getVendaCorrente().calcularTotalVendas();
    registradora.fazerPagamento(totalVenda, Operadora.AMERICAN, 1, TipoCalculadora.JUROS_SIMPLES)

    this.gerarRecibo(registradora);

    Registradora2 = loja.getRegistradora(`RO2`)
    registradora2.criarNovaVenda()

    registradora2.entrarItem(`08`,3)
    registradora2.entrarItem(`01`,2)
    registradora2.entrarItem(`09`,1)

    registradora2.finalizarVenda()
    
    registradora2.fazerPagamento(100.00)

    gerarRecibo(registradora2, 100 - registradora2.getVendaCorrente().calcularTotalVendas())

    Registradora3 = loja.getRegistradora(`RO3`)

    registradora3.criarNovaVenda();
    
    registradora3.entrarItem(`06`,3)
    registradora3.entrarItem(`07`,2)
    registradora3.entrarItem(`02`,1)

    registradora3.finalizarVenda()
    registradora3.fazerPagamento(registradora3.getVendaCorrente().calcularTotalVendas(),`Banco do Brasil`)

    gerarRecibo(registradora3,0)
    
    } catch (DescricaoProdutoInexistente){
        console.log(DescricaoProdutoInexistente.getMessage())
    }
}   
    gerarRecibo(registradora, troco){
        venda = registradora.getVendaCorrente()
        console.log(`""`);
        console.log(`"--------------------------- Supermercado Preço Bão ---------------------------"`)
        console.log(`                             Registradora : ` `${registradora.getId()}`)
        console.log(`CUPOM FISCAL`)
        console.log(`${Venda}`)
        console.log(`Troco................: R$` `${troco}`)
    }
}

