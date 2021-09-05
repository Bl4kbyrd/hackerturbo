//criar uma função que retorne apenas numeros primos

function primo(nmb){
    for(let i = 2; i <= nmb; i++){
        if(nmb % i === 0){
            return false
        }
    return nmb > 1
    }
}

function verificarPrimos(numero){
    for(let i = 2; i <= numero; i++){
        if(i = primo(i)){
            console.log(i)
        }
    }
}


verificarPrimos(10)