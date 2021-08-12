/*
  Na manipulação de dados, aprenderemos basicamente a fazer conversões
  entre os diferentes tipos de dados e extrair informações desses dados
*/

//Transformando String em Number e vice-versa
let string = '17263'
console.log(Number(string))

let number = 21313
console.log(String(number))

//Contando quantos caracteres tem uma palavra e quantos digitos tem um numero
let palavra = "Javascript"
console.log(palavra.length)

let numero = 23542
console.log(String(numero).length)

//Transformando um numero quebrado com 2 casas decimais e trocar ponto por virgula
let x = 763245.1234
console.log(x.toFixed(2).replace(".", ","))

//Transformando letras minúsculas em maiúsculas e vice-versa.
let word = "Olá mundo!"
console.log(word.toUpperCase())
console.log(word.toLowerCase())

//Separando um texto que contem espaços, em um novo array onde cada texto é uma
//posição do array e transformando um array em um texto onde haviam espaços,
//colocar '_'
let frase = "Bitcoin é o futuro!"
let vetor = frase.split(" ")
console.log(vetor)

let fraseDoVetor = vetor.join("_")
console.log(fraseDoVetor)

//Verificando se um texto contém uma palavra especifica
console.log(frase.includes("Bitcoin"))// retorna 'true' ou 'false'

//Criando um array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

//Contando elementos de um array
console.log(myArray.length)

//Transformando uma cadeia de caracteres em elementos de um array
let palavra1 = "manipulando"
console.log(Array.from(palavra1))

//Manipulando arrays
let tecnologias = ["http", "html5", "css3", "js"]

tecnologias.push("node.js")//adiciona item no fim do array
tecnologias.unshift("sql")//adiciona item no começo do array
tecnologias.pop()//remove item do final do array
tecnologias.shift()//remove item do começo do array
console.log(tecnologias.slice(1, 3))//exibe apenas elementos especificos do array
tecnologias.splice(1, 2)//remove um ou mais itens especificos do array
let position = tecnologias.indexOf("html5")//printa a posição do elemento especificado