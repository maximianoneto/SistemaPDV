 class Loja{
    constructor(nome, endereco, vendas, registradoras, contadorVendas){
        this._nome = nome;
        this._endereco = endereco;
        this._vendas = vendas;
        this._registradoras = registradoras;
        this._contadorVendas = contadorVendas;
        
        let vendas = new Array()
        let registradoras = new Array()
    
        let r1 = new registradoras["R01"]   
        let r2 = new registradoras["R02"]
        let r3 = new registradoras["R03"]

        this.adicionarRegistradora.push(r1)
        this.adicionarRegistradora.push(r2)
        this.adicionarRegistradora.push(r3)
    
    }

    adicionarVenda(Venda ) {
    	vendas.add(Venda);
    }

    adicionarRegistradora(registradoras) {
    	registradoras.add(registradoras);
    }

   get UltimaVenda(){
        return vendas.getRegistradora(vendas.size()-1)
    }

getRegistradora(id) {
    Registradora = null;
    for(i=0; i< registradoras.size(); i++){
        if (Registradora.getId().equals(id))
            Registradora = r;
    }
    return r;
}
}