

class TesteCalculadoraFinanceira {

        constructor(montanteInicial, periodoMeses, jurosAoMes, calculadora){
        this._calculadora = calculadora
        montanteInicial = 10000;
        periodoMeses = 3;
        jurosAoMes = 0.05;
        
        calculadora = new CalculadoraJurosCompostos();
        console.log(`************* Cálculo de juros  com calculadora de juros compostos **********************`);
        console.log(`Montante inicial..:` `${montanteInicial}`)
        console.log(`Período em meses...:` `${periodoMeses}`)
        console.log(`Juros ao mes......: ` `${jurosAoMes}`)
        console.log(`Objeto calculadora..: ` `${calculadora}`)
        console.log(`Total..: ` `${calculadora.calcularMontanteComJuros(montanteInicial, periodoMeses, jurosAoMes)}`);
        console.log(`*****************************************************`);
        
        calculadora = new CalculadoraJurosSimples();
        console.log(`************* Cálculo de juros com calculadora de juros simples  **********************`);
        console.log(`Montante inicial..: ` `${montanteInicial}`);
        console.log(`Período em meses...: ` `${periodoMeses}`);
        console.log(`Juros ao mes......:  ` `${jurosAoMes}`);
        console.log(`Objeto calculadora..: ` `${calculadora}`);
        console.log(`Total..: ` `${calculadora.calcularMontanteComJuros(montanteInicial, periodoMeses, jurosAoMes)}`);
        console.log(`*****************************************************`);
        }
    }