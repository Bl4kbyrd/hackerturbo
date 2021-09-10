// imprimir de 0 à (limite) dizendo se é ímpar ou par

function exibirTipo (limite){

    for (let i = 0; i <= limite; i++){
        if (i % 2 == 0)
            console.log(i, ' = par')
        else
            console.log(i, ' = ímpar')

    }

    
     

}

exibirTipo(5)