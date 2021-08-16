/*
  Quase a mesma função que 'for of', mas agora em objetos
*/

let pessoa = {
  name: 'Felipe',
  lastname: 'Campos',
  age: 20,
  weight: 89.3
}

for(let propriedade in pessoa){
  console.log(propriedade, pessoa[propriedade])
}