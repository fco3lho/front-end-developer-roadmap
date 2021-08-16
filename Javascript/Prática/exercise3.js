/*
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
  
  Agora, crie uma função que irá calcular o total de receitas e despesas e irá
   mostrar uma mensagem se a família está com saldo positivo ou negativo, 
   seguido do valor do saldo.
*/

let caixa = {
  receitas: [2500, 3200, 1100, 6700],
  despesas: [350, 250, 110, 200, 890, 500, 1500]
}

function soma(vetor){
  let total = 0;

  for(let valor of vetor){
    total += valor
  }

  return total
}

function balance(){
  let totalReceita = soma(caixa.receitas)
  let totalDesespesas = soma(caixa.despesas)

  if(totalReceita > totalDesespesas){
    console.log("Saldo positivo.\nSaldo: R$", (totalReceita - totalDesespesas))
  }
  else if(totalReceita < totalDesespesas){
    console.log("Saldo negativo.\n Saldo: R$", (totalReceita - totalDesespesas))
  }
  else if(totalReceita == totalDesespesas){
    console.log("Saldo zero.\n Saldo: R$", (totalReceita - totalDesespesas))
  }
}

balance()