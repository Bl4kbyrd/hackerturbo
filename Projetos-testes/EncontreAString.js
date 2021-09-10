// retornar apenas strings de um objeto

const filme = {
    titulo: 'saas',
    ano: 2015,
    diretor: 'saske'
}

exibirProprioedades(filme)

function exibirProprioedades(obj) {
    for (prop in obj)
        if (typeof obj[prop] === 'string')
            console.log(prop, obj[prop])
}