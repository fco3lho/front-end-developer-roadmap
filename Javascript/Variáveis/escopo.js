/*
  O escopo determina a visibilidade de alguma variável no Javascript, ou seja,
  pode estar visível para nós mas não para o Javascript.

  O 'block statement' ou declaração de bloco criará um novo escopo ou block-scoped, 
  da seguinte forma:

    {
      vários codigos
      aqui dentro
    }

    Exemplo abaixo.
*/

{
  console.log("Testando bloco...")
  let x = 10
  console.log("Valor de x: " + x)
  console.log("_____________________\n")
}

/* ESCOPO VAR: O 'var' é global e poderá funcionar fora de seu escopo*/

console.log("Valor de y: " + y)

{
  var y = 10
}

/*
  A saída para o valor de y foi indefinido mesmo a variável sendo declarada depois,
  porque o JS faz a seguinte configuração com o 'var':
  
    var y

    console.log("Valor de y: " + y)

    {
      y = 10
    }

  Ou seja, y foi criado mas não recebeu um valor.
*/

//////////////////////////////////////////////////////////////////////////

/*ESCOPO CONST E LET: O 'const' e o 'let' são locais e só funcionam no escopo onde foram criados.*/

console.log("Valor de z: " + z)

{
  let z = 20
}

/* 
Você perceberá que ocorrerá um erro, pois a variável z não foi declarada antes 
de ser chamada e também por estar em um bloco e só poder ser chamada dentro daquele 
bloco e após ser declarada.

Mas, se você declarar a variável fora de um bloco e atribuir um valor a ela dentro 
do bloco, a variável irá admitir esse valor.

Lembrando que o mesmo ocorre para o 'const'.
*/