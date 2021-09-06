// Criando e adicionando elementos

// createElement
let elemento = document.createElement('div');
elemento.innerText = "Bom dia"

//append
let corpo = document.querySelector('body')
corpo.append(elemento)



// insertBefore

let script = corpo.querySelector('script')
corpo.insertBefore(div, script)