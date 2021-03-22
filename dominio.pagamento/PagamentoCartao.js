
 class PagamentoCartao extends Pagamento {
     
    constructor(operadora, quantidadeParcelas, calculadora, tipoCalculadora){
        super(quantia);
        this._operadora = operadora;
        this._quantidadeParcelas = quantidadeParcelas;
        this._calculadora = calculadora;

    if(tipoCalculadora == tipoCalculadora.JUROS_SIMPLES){

        const calculadora = new CalculadoraJurosSimples();    
    }
    else if(Calculadora == tipoCalculadora.JUROS_COMPOSTO){

        const calculadora = new CalculadoraJurosComposto();
    }
}

    simularParcela(quantia, quantidadeParcelas){
        var juros = consultarTaxaJuros();
        const montanteComjuros = this._calculadora.calculadoraMontanteComJuros(quantia, quantidadeParcelas, juros);
        return (montanteComjuros / quantidadeParcelas);
    }

     consultarTaxaJuros() {
         taxaJuros = 0.0;
        switch (quantidadeParcelas) {
            case 1:
                break;
            case 2:
                taxaJuros = 2.5;
                break;
            case 3:
                taxaJuros = 5.0;
                break;
            default:
                taxaJuros = 0.0;
        }
        return taxaJuros;
    }   

    toString() {
        return `Tipo de pagamento...: Cartão de Crédito\n` 
                `${toString}` `\n`
                `Operadora................: ` `${operadora}` `\n`    
                `Quantidade de parcelas....: ` `${quantidadeParcelas}` `\n`
                `Valor de cada parcela...: ` `${simularParcelas(super.getQuantiaFornecida())}` `${quantidadeParcelas}`  `\n`
                `Tipo de calculadora usada na transação................: ` `${calculadora.toString}` `\n`
    }
}  
