/*
  Crie uma função que receba uma string em celsius ou fahrenheit e faça a 
  transformação de uma unidade para outra.

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

let tempC = 30 
let tempF = 100

function transformaCemF(C){
  let F = C * (9/5) + 32
  return F
}

function transformaFemC(F){
  let C = (F - 32) * (5/9)
  return C
}

let fahr = transformaCemF(tempC)
let cels = transformaFemC(tempF)

console.log("Temperatura convertida para Fahrenheit:", fahr)
console.log("Temperatura convertida para Celsius:", cels)