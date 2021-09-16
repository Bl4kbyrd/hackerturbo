//criar uma função que retorne apenas numeros primos



function ExibirPrimo(nmb){
    for(let numero = 2; numero <= nmb; numero++){
        if (VerificarPrimo(numero)) console.log(numero)

    }
}

function VerificarPrimo(numero){
    for (let primo = 2; primo < numero; primo++) {
        if (numero % primo === 0) {
            return false
        }
    }
    return true
}


ExibirPrimo(20)