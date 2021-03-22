 class PagamentoCheque extends Pagamento{

    constructor(quantiaFornencida, banco){
        super(quantiaFornencida);
        this._banco = banco;
    }

    getBanco(){
        this._banco = banco;
    }

    setBanco(banco){
        this._banco = banco;
    }

    toString() {
        console.log(`Tipo de pagamento...: Cheque\n` 
        `Quantia fornecida....: R$` `${getQuantiaFornecida}` 
        `Banco................:`   `${banco}`);
    }
}