const escola = "Cod3r"

console.log(escola.length)
//retorna o numero de caractere

console.log(escola.charAt(4)) 
//retorna a quinta caratere (começa a contar apartir do 0)

console.log(escola.charCodeAt(3)) 
//retorna o código do unicode

console.log(escola.indexOf('d'))
//retorna em que número esta a caractere

console.log(escola.substring(1))
console.log(escola.substring(0, 3))
//retorna o local da caractere pedido

console.log('teu cu '.concat(escola.concat(' kkk')))
//adiciona um literal à constante

console.log(escola.replace(3, 'e'))
//substitua todos os '3' pelo 'e'

console.log('pinto,peixe,bola,saas'.split(','))
//separa as string transformando-as em strings independentes (array(?))