function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')

//criar uma função que compare se os objetos são iguais
//função 1 = comparar se as propriedades são iguais
//função 2 = comparar se a referencia do objeto aponta para o mesmo local na memoria



function saoIguais(endereco1, endereco2){
    for(prop in endereco1 && endereco2){
        if (endereco1[prop] === endereco2[prop]){
            console.log(true)
        }
        
        else (console.log(false))
    }
}


function temEnderecoMemoriaIguais(endereco1, endereco2){
    if (endereco1 === endereco2){
        console.log(true)
    }

    else (console.log(false))
}

saoIguais(endereco1, endereco2)
temEnderecoMemoriaIguais(endereco1, endereco2)