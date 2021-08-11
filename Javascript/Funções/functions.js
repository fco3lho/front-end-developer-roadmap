/*
  Função é uma estrutura de dado com finalizade de organização do código
*/

// Declaração da função
function funcao(){
  console.log("teste1")
  console.log("teste2")
  console.log("teste3")
}

//A função só irá ser executada caso chamada

funcao()

//Outros exemplos de função

let a = 10
let b = 20

function soma(a, b){
  let sum = a + b
  return sum 
}

console.log(`A soma total é ${soma(a, b)}`)