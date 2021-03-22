
 class Pagamento{

    constructor(quantiaFornecida){

        this._quantiaFornecida = quantiaFornecida;
    }

    get quantiaFornecida(){

        return this._quantiaFornecida;
    }

    set quantiaFornecida(quantiaFornecida){

        this._quantiaFornecida = quantiaFornecida;
    }

    toString(){
        console.log(`Quantia Fornecida: R$ ` `${this.quantiaFornecida}`)
    }
}