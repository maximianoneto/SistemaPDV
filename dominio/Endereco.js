class Endereco  {
         
    constructor(logradouro, complemento, numero, cidade, bairro, uf, cep) {
                this._logradouro = logradouro;
                this._complemento = complemento;
                this._numuro = numero;
                this._cidade = cidade;
                this._bairro = bairro;
                this._uf = uf;
                this._cep = cep;
            }
    get logradouro(){
        return this._logradouro
    }
    set logradouro(Logradouro){
        this._logradouro = Logradouro
    }

    get complemento(){
        return this._complemento
    }

    set complemento(complemento){
        this._complemento = complemento
    }

    get numero(){
        return this._numero
    }

    set numero(numero){
        this._numero = numero
    }
    
    get cidade(){
        return this._cidade
    }

    set cidade(cidade){
        this._cidade = cidade
    }

    get bairro(){
        return this._bairro
    }

    set bairro(bairro){
        this._bairro = bairro
    }

    get uf(){
        return this._uf
    }

    set uf(uf){
        this._uf = uf
    }

    get cep(){
        return this._cep
    }

    set cep(cep){
        this._cep = cep
    }
}