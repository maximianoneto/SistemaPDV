 class ItemVenda {
    constructor(DescricaoProduto, quantidade){
        this._DescricaoProduto = DescricaoProduto
        this._quantidade = quantidade
    }

    get DescricaoProduto(){
        return this._DescricaoProduto;
    }

    get quantidade(){
        return this._quantidade;
    }

    getSubTotal(){
        return this._quantidade * DescricaoProduto.getPreco()
    }

    toString(){
        console.log(`${this._DescricaoProduto}` `\t` `+`  `\t\t` `${this.getSubTotal()}` `\n`)
    }
}