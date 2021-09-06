let h1 = document.querySelector("h1")
let div = document.querySelector("div")
let p = document.querySelector("p")
let input = document.querySelector("input")

/*
  Podemos manipular os conteúdos HTMl usando os comandos:

    *textContent
    *innerText
    *innerHTML
    *Value
*/

//textContent
h1.textContent = "Olá mundo"

//innerText
div.innerText = "<strong>algum texto qualquer</strong>"

//innerHTML
p.innerHTML = "<strong>algum texto qualquer</strong>"

//Value
input.value = "Valor qualquer"
