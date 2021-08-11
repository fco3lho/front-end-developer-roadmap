/*
  Função construtora é criada com sua primeira letra Maiúscula.
  Tem a função de criar um novo objeto.
*/

function Person(name, lastname){
  this.name = name
  this.lastname = lastname
}

const myName = new Person("Felipe", "Campos")

console.log(myName)

// Outro exemplo

let date = new Date("2021-08-11")

console.log(date)