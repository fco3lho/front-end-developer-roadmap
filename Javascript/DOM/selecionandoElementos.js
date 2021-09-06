/*
  Como faço para acessar a tag <h1> pelo seu id? Use a função "getElementById()".
  Exemplo:
*/

window.document.getElementById("h1ID") //Selecionado

console.log(window.document.getElementById("h1ID")) //Imprimindo no console JS

/*
  Como faço para acessar a tag <div> pela sua classe? Use a função
  "getElementByClassName()". Exemplo:
*/

window.document.getElementsByClassName("classdiv") //Selecionado

console.log(window.document.getElementsByClassName("classdiv")) //Imprimindo no console JS

/*
  Como faço para acessar algum elemento HTML pela sua tag? Use a função
  "getElementByTagName()". Exemplo:
*/

window.document.getElementsByTagName("body") //Selecionado

console.log(window.document.getElementsByTagName("body")) //Imprimindo no console JS

/*
  Podemos também usar um seletor global, que irá selecionar o primeiro elemento de
  acordo com as características passadas. Exemplo:
*/

window.document.querySelector("p.classp")

console.log(window.document.querySelector("p.classp"))

/*
  E também é possível usar um seletor global, que irá selecionar todos os elementos
  de acordo com as características passadas. Exemplo: 
*/

window.document.querySelectorAll("meta")

console.log(window.document.querySelectorAll("meta"))