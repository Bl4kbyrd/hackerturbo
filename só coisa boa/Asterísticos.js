// criar uma função que exiba a quantidade de * que o valor possui

ExibirArsteristicos(3)

function ExibirArsteristicos(linhas){
    let i = 1
    let str = ''
    for (; i <= linhas; i++){
        str += '*'
        console.log(str)
    }

}