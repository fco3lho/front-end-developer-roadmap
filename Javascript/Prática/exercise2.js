/*
  Crie um algoritmo que transforme as notas do sistema númerico para
  o sistema de notas em caracteres.

    * de 90 para cima = A
    * entre 80 e 89 = B
    * entre 70 e 79 = C
    * entre 60 e 69 = D
    * menor que 60 = F
*/

let nota = 86

if(nota >= 90 && nota <= 100){
  console.log("Nota A.")
}
else if(nota < 90 && nota >= 80){
  console.log("Nota B.")
}
else if(nota < 80 && nota >= 70){
  console.log("Nota C.")
}
else if(nota < 70 && nota >= 60){
  console.log("Nota D.")
}
else if(nota < 60){
  console.log("Nota E.")
}
else if(nota > 100 || nota < 0){
  console.log("Valor da nota está errado.")
}