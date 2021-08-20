// soma todos os múltiplo de 3 e 5

//Criar função somar que retorna a
// armazenar múltiplos de 3
// armazenar múltiplos de 5
// somar os dois

function somar(limite){
    let int3 = 0
    let int5 = 0

    for (let i = 0; i <= limite; i++) {
        if (i % 3 === 0)
            int3 += i 

        if (i % 5 === 0)
            int5 += i
        
    }

    console.log(int5 + int3)

}

somar(55)