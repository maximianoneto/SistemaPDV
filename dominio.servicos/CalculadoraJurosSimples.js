class CalculadoraJurosSimples  {

     constructor( montanteInicial, periodoMeses, jurosAoMes) {
       totalJuros = montanteInicial * periodoMeses * (jurosAoMes * 0.01);
         novoMontante = montanteInicial + totalJuros;
        return novoMontante;
    }

 toString() {
        console.log(`Calculadora de juros simples`)
    }
}
