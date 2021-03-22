
class CatalogoProdutos {  
    constructor(DescricaoProduto){
        
        const descricoesProdutos = new Array()
    
        let d1 = new DescricaoProduto["01", 3.75, "Chocolate Talento"]
        let d2 = new DescricaoProduto["02", 1.50, "Chiclete Trident"]
        let d3 = new DescricaoProduto["03", 2.50, "Lata de Coca-cola"]
        let d4 = new DescricaoProduto["04", 2.00, "Agua Mineral Caxambu"]
        let d5 = new DescricaoProduto["05", 5.99, "Cerveja Corona extra"]
        let d6 = new DescricaoProduto["06", 2.50, "Biscoito cream cracker"]
        let d7 = new DescricaoProduto["07", 4.50, "Leite condensado"]
        let d8 = new DescricaoProduto["08", 18.00, "Cafe Prima Qualitat"]
        let d9 = new DescricaoProduto["09", 2.00, "Danete"]
        let d10 = new DescricaoProduto["10", 1.00, "Bombril"]

        descricoesProdutos.push(d1)
        descricoesProdutos.push(d2)
        descricoesProdutos.push(d3)
        descricoesProdutos.push(d4)
        descricoesProdutos.push(d5)
        descricoesProdutos.push(d6)
        descricoesProdutos.push(d7)
        descricoesProdutos.push(d8)
        descricoesProdutos.push(d9)
        descricoesProdutos.push(d10)

  
    }    
    getDescricaoProduto(id) {        
        for (i = 0; i < descricoesProdutos.size(); i++) {  
            DescricaoProduto = descricoesProdutos.get(i) 
            if (id.equals(DescricaoProduto.getId()))
                console.log(DescricaoProduto);
        }     
    } 
  }
