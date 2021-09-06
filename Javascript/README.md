# JavaScript Core

É uma linguagem de programação que roda no navegador do usuário (front-end). Um exemplo dessa prática é quando
o usuário clica em algum botão e abre uma nova janela ou a alteração do site/aplicativo conforme a interação
do usuário, isso é o Javascript funcionando. O Javascript funciona também no computador (back-end), mas nosso 
foco aqui será o front-end.

## O que podemos fazer com JavaScript?

Podemos criar diversas aplicações para web, mobile (com React Native) e desktop (com Electron) e diversas 
empresas fazem uso do JS, como o Facebook, Google, Uber, Netflix, Tiktok, entre outras.

## Como começar a estudar Javascript?

Começando do básico de JS, é recomendado estudar os seguintes recursos para obter uma boa base na linguagem:

<ol>
  <li>Tipos de dados</li>
  <li>Variáveis</li>
  <li>Funções</li>
  <li>Manipulação de dados</li>
  <li>Condicionais</li>
  <li>Estruturas de repetição</li>
</ol>

## Sintaxe

Dizendo que todas as linguagens que existem possuem uma sintaxe, isso quer dizer que, cada linguagem possui sua
maneira certa de ser escrita/falada para haver uma boa comunicação, então fique atento aos erros de sintaxe.

## Adicionando Javascript ao HTML

Para adicionar o JS ao HTML, você deverá usar a tag <i>script</i> no <i>body</i> do seu código HTML. <br>
Exemplo: ```<script src="./script.js"></script>```.

## Códigos Javascript

A lista de estudos citada acima, será escrita em códigos ```.js``` que serão encontrados no mesmo repositório que este
arquivo-texto.

# DOM - Document Object Model

  DOM é o HTML convertido para um objeto Javascript, é uma API que representa e
  interage com o HTML. O DOM é uma estrutura de dados do tipo árvore, que criada 
  pelo browser, e por ser um objeto, ele possui propriedades e métodos.

  ### Para que serve o DOM?

  O Javascript utiliza DOM para se conectar com o HTML, ou seja, só é possível 
  programar para WEB com Javascript porque existe o DOM.
  
  ### Exemplo de árvore DOM

  <img src="https://github.com/fco3lho/front-end-developer-roadmap/tree/main/Javascript/DOM/DOM%20tree.png">

  E se quisessemos acessar a tag h1 do body usando Javascript, como iriamos fazer?

  É simples, teríamos que percorrer a árvore DOM usando a seguinte linha de código,
  exemplo:

  <code>window.document.html.body.h1</code>

  Mas essa linha por si só não tem nenhuma função. Aprenderemos agora a aplicar 
  as seguintes funcionalidades ao HTML usando a árvore DOM e Javascript:

  <ul>
    <li>Selecionando elementos</li>
    <li>Manipulando conteúdos</li>
    <li>Manipulando estilos e classes</li>
    <li>Navegando pelos elementos</li>
    <li>Criando e adicionando elementos na página</li>
    <li>Eventos</li>
  </ul>

  Para ter acesso aos elementos da lista acima, clique <a href="https://github.com/fco3lho/front-end-developer-roadmap/tree/main/Javascript/DOM">aqui</a>.

