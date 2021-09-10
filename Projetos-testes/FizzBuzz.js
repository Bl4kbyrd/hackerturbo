// Divisível por 3 = Fizz
// Divisícel por 5 = Buzz
// Divisível por 3 e 5 = FizzBuzz
// Não divisível por 3 ou 5 = entrada

function FizzBuzz(number){
    const FizzBuzz = 'FizzBuzz'
    if 
    (number % 3 === 0
    &&
    number % 5 === 0)
        return FizzBuzz

    if (number % 3 === 0 )
        return FizzBuzz.substring(0, 4)

    if (number % 5 === 0)
        return FizzBuzz.substring(4, 8)

    if (number !== Number)
        return number

    else return number
}

console.log(FizzBuzz(7))