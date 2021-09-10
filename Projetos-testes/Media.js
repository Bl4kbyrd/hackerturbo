// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const pinto = [70, 70, 80]

function mediaDoAluno(notas) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    media = (Math.floor(notas.reduce(reducer) / notas.length))

    if (media <= 59)
        return ('F')
    if (media >= 60 && media <= 69)
        return ('D')
    if (media >= 70 && media <= 79)
        return ('C')
    if (media >= 80 && media <= 89)
        return ('B')
    if (media >= 90 && media <= 100)
        return ('A')
}

console.log(mediaDoAluno(pinto))