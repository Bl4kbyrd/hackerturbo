/* criar um objeto que contem:
Rua
Cidade
CEP
exibirEndereco(endereco)
 */

const endereco = {
    Rua: 'Mirante da Boa Viagem',
    Cidade: 'Niterói',
    CEP: 24210 - 390,
}

function exibirEndereco(local){
    for (prop in local){
        console.log(prop, local[prop])
    }
}

exibirEndereco(endereco)