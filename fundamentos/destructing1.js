let pessoa = {
    nome: 'Saas',
    idade: 15,
    endereço: {
        rua: 'pinto Borges',
        numero: 2000
    }
}


const {nome, idade} = pessoa
console.log(nome, idade)

const  { nome: n, idade: i }  = pessoa
console.log(n, i)

const {endereço: {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)