

 class CalculadoraJurosCompostos {
    constructor( montanteInicial,  periodoMeses, jurosAoMes) {
         novoMontante = montanteInicial * Math.pow((1+ jurosAoMes), periodoMeses);
        return novoMontante;
    }

    toString() {
       console.log(`Calculadora de juros compostos`)
    }
}