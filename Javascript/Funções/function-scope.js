// As funções possuem escopos diferentes do global. Exemplo abaixo.

let mensagem = 'Olá, mundo!'

function retornaVar(mensagem){
  mensagem = 'Hello, world!'
  return mensagem
}

console.log(retornaVar(mensagem))
console.log(mensagem)

/* O que acontece é que no escopo da função um objeto é criado, 
diferente do objeto do escopo global, assim são impressas duas
mensagens diferentes*/

let comunicado = "Está tudo bem."

function pergunta(){
  comunicado = "It's all right"
  return comunicado
}

console.log(pergunta(comunicado))
console.log(comunicado)

/* Aqui já vemos uma função sem receber uma variável, o que acontece 
é que ela busca a variável existente no escopo global e à altera. */