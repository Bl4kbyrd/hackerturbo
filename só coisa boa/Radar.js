// simular um radar
// limite de velocidade = 70, se for menos que isso, adicionar pontos na carteira
// a cada 5km = 1 ponto
// se tiver 12 pontos a carteira será cancelada


function VerificarVelocidade(movespeed) {

    let pontos = Math.floor((movespeed - 70) / 5)
    
    if (movespeed <= 70){
        console.log('ok')   
    }   
        else{
         if (movespeed >= 75 && movespeed % 5 === 0) 
              console.log('pontos = ', pontos)

             if (pontos >= 12) {
                 console.log('kkkperdeu')
             }
         }
          
        


    
}

VerificarVelocidade(150)

