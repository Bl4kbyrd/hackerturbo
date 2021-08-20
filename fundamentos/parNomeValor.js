const saudacao = 'vsf' // contexto léxico 1

function exec() {
    const saudacao = 'perguntei nn' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'cu de sua mae',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)