// cumprimento da pista em metros
// numero total de voltas
// consumo de combustivel (em Km/L)
// Calcular e escrever o número mínimo de litros necessários para percorrer até o primeiro reabastecimento. Considere que o número de voltas entre os reabastecimentos é o mesmo.


function gasolinaMinima(combustivel){

    pista = 450.000 //metros
    voltas = 17

    return Math.floor((pista / combustivel) * pista)
}

console.log(gasolinaMinima(32))

