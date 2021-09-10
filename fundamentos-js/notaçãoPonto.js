console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'bola'
obj1['apelido'] = 'haha' // não recomendado

console.log(obj1)
console.log(obj1.nome)
console.log(obj1.apelido)

function Obj(nome) {
    this.nome = nome
} // 'this' torna a função publica

const Obj2 = new Obj ('pinto')
const Obj3 = new Obj ('bola')

console.log(Obj2.nome)
console.log(Obj3.nome)