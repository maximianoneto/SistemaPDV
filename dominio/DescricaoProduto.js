class DescricaoProduto {
    
    constructor(preco, id, descricao){
        this._id = id;
        this._preco = preco;
        this._descricao = descricao;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id
    }

    get preco(){
        return this._preco;
    }

    set preco(preco){
        this._preco = preco
    }

    get descricao(){
        return  this._descricao
    }

    set descricao(descricao){
        this._descricao = descricao
    }
    
     toString() {
        console.log(`${this._descricao}` `\t\t` `${this._preco}` `\t`)
    }

    equals(Object ) {
        DescricaoProduto = null;
        if ((Object instanceof DescricaoProduto) && (Object != null)) {
           desc = (DescricaoProduto);                                 
           return this.id.equals(desc.getId());
        }
        return false;
    }
}


