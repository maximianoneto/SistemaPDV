
class DescricaoProdutoInexistente extends Exception { 
   constructor(id, mensagem){
       super(mensagem)
       this._id = id
   }

   constructor(string, throwable){
       super(string, throwable);
   }

   constructor(string){
       super(string);
   }

   constructor(){
       super();
   }

   toString(){
       console.log(`${super.toString()}` `\n` `ID....:` `${this.id}`);
   }
}