// 1. Declare uma váriavel com nome 'weight'

var weight

// 2. Que tipo de dado é a variável acima?

console.log('2. ' + typeof weight)

/*
  3. Declare uma variável e atribua valores para cada um dos dados:
    
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isAdmin: Boolean
*/

var person = {
  name: 'Felipe',
  age: 19,
  weight: 90.7,
  isAdmin: true
}

/*
  4. A variável 'student' abaixo é de que tipo de dados?

  4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.

  4.2. Mostre no console a seguinte mensagem:

    <name> tem de idade <age> pesa <weight> kg pelos valores de cada propriedade do objeto.
*/

let student = {
  name: 'Felipe',
  age: 19,
  weight: 90.7,
  isAdmin: true
}

console.log(
  `4. ${student.name}, tem de idade ${student.age}, pesa ${student.weight} kg pelos valores de cada propriedade do objeto.`
)

/*
  5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array.)
*/

students = [student]

/*
  7. Coloque no console o valor da posição zero do Array acima.
*/

console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/

let student2 = {
  name: 'John',
  age: 21,
  weight: 85.6,
  isAdmin: false
}

students = [student, student2]

console.log(students)

/*
  9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1
*/

/* A resposta será: undefined. Porque o JS cria a variável no topo mesmo no código
sendo criada abaixo, mas atribui o valor a ela apenas na linha em que foi criada.
Sendo assim, é o mesmo que criar um código dessa forma: 

  var a

  console.log(a)

  a = 1
*/

console.log(a)
var a = 1
