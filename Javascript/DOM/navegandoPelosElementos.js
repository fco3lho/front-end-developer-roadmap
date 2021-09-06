let body = document.querySelector('body')

/*
  É possível navegar pelo elementos pais a partir de um selecionado. Exemplos:
*/

console.log(body.parentNode)
console.log(body.parentElement)

/*
  Também é possível navegar por elementos filhos a partir de um selecionado.
  Exemplos:
*/

console.log(body.childNodes)
console.log(body.firstChild)
console.log(body.lastChild)
console.log(body.firstElementChild)

/*
  Navegando por elementos irmãos. Exemplos:
*/

let text = document.querySelector('h1')

console.log(text.nextSibling)
console.log(text.nextElementSibling)
