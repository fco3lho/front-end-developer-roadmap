# O que é HTML?

  HTML é um acrônimo para Hypertext Markup Language, ou seja, é uma Linguagem de Marcação de HiperTexto.<br>

  "Hipertexto" refere-se aos links que conectam páginas da Web entre si, seja dentro de um único site ou entre sites. 
  Links são um aspecto fundamental da web. Ao carregar conteúdo na Internet e vinculá-lo a páginas criadas por outras pessoas, 
  você se torna um participante ativo na world wide web.

  O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. A marcação HTML 
  inclui "elementos" especiais, como <i>head, title, body, header, footer, article, section, p, div, span, 
  img, aside, audio, canvas, datalist, details, embed, nav, output, progress, video, ul, ol, 
  li</i> e muitos outros.

  Um elemento HTML é separado de outro texto em um documento por "tags", que consistem no nome do elemento entre "<" e ">". 
  O nome de um elemento dentro de uma tag é insensível a maiúsculas e minúsculas. Isto é, pode ser escrito em maiúsculas, 
  minúsculas ou um mistura. Por exemplo, a tag <title> pode ser escrita como <Title>, <TITLE> ou de qualquer outra forma.

## Atributos
  
  Os atributos são informações extras que o usuário coloca dentro da tag para serem buscadas.
  
  Exemplos: ```<img src="imagem.png" alt="alguma imagem">```, ```<a href="google.com" title="Google"> link </a>```.

## Atributos Globais
  
  Os atributos globais tem a mesma definição dos atributos citados acima, porém são aplicados em todos os elementos.
  Os mais usados são: <i>class, data, hidden, id, style, tabindex e title</i>.
  
  Exemplos: ```<div class="atributo"> alguma coisa </div>```, ```<p style="color: red"> alguma coisa </p>```.
  
  Lembrando que quando uma classe é definida, a mesma pode ser modificada usando o CSS, que vamos ver a frente.
  
## Aninhamento
  
  O aninhamento nada mais é do que quebra de linhas entre as tags. Isso significa que quando algumas tags são utilizadas,
  ocorre uma quebra de linha a partir dela dependendo de seu aninhamento. Podemos usar como exempro a tag <i>p</i> e a 
  tag <i>a</i>.
  
  A tag <i>p</i> cria um parágrafo para os elementos inclusos dentro dela, ocorrendo uma quebra de linha em seu início e fim.
  Exemplo: ```<p> alguma coisa </p> ```.<br>
  
  Já na tag <i>a</i> não ocorre a quebra de linha.<br>
  Exemplo: ```Este é um <a href="link.com">link</a>```.
  
## Caracteres Reservados
  
  Os caracteres reservados são aqueles usados para construir estruturas na linguagem, como os sinais de maior e menos e aspas.
  
  E como faço para usar esses caracteres reservados em um texto? Existem alguns caracteres especiais que pode-se usar para 
  substituir os caracteres reservados, como ```&lt``` para ```<```, ```&gt``` para ```>```, ```&amp``` para ```&``` e 
  ```&quot``` para ```"```.
  
## Anatomia
  
  ```
  <!DOCTYPE html>
    <html lang="en">  /*Linguagem da página*/
      
      <head> /*Cabeçalho da página*/
        <meta charset="UTF-8"> /*Configuração de aceitação de caracteres*/
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> /*Configuração de visibilidade de aparelhos*/
        <title>Document</title> /*Titulo na aba do navegador*/
      </head>
      
      <body> /*Corpo da página (O que aparecerá ao usuário)*/
         Document
      </body>
      
    </html>
  ```
  
## Semântica
  
  Um dos principais objetivos do HTML é estruturar um texto e lhe dar significadom para que ele seja melhor entendido. 
  Para isso, são usados elementos semânticos que serão detalhados abaixo.
  
### Cabeçalhos e parágrafos
  
  Nos cabeçalhos e parágrafos são usadas as tags <i>p</i> e <i>h</i>, sendo que a tag <i>h</i> pode variar de 1 a 6, e.g.
  <i>h1</i>, <i>h12</i>, <i>h3</i>, <i>h4</i>, etc. Esta tag é ordenada de forma hierárquica, i.e. a tag de número 1 
  sobrepõe sobre todas as outras tags, a tag de número 2 sobrepõe sobre todas as tags exceto a de número 1.
  
### Listas
  
  As listas podem ser ordenadas ou não ordenadas, separadas pelas tags <i>ol</i> e <i>ul</i> respectivamente. Mas suas 
  estruturas são as mesmas alterando somente a tag. Exemplos abaixo.
  
  #### Lista ordenada
  ```
  <ol>
    <li> a </li>
    <li> b </li>
    <li> c </li>
    <li> d </li>
  </ol>
  ```
  <b>Output:</b>
    
  <ol>
    <li> a </li>
    <li> b </li>
    <li> c </li>
    <li> d </li>
  </ol>
  
  
  #### Lista não-ordenada
  ```
  <ul>
    <li> a </li>
    <li> b </li>
    <li> c </li>
    <li> d </li>
  </ul>
  ```
  <b>Output:</b>
    
  <ul>
    <li> a </li>
    <li> b </li>
    <li> c </li>
    <li> d </li>
  </ul>
    
### Citações
    
  Para fazer citações podem ser usadas as tags <i>blockquote, cite</i> ou <i>q</i>. Exemplos abaixo.
  
  ```
  <blockquote cite="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/blockquote">
    O <strong>Elemento HTML <code>&lt;blockquote&gt;</code></strong> (ou <em>HTML Block Quotation Element</em>)
    indica que um texto externo foi citado.
  </blockquote>
  
  <p>De acordo com <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/blockquote">
    <cite>página MDN blockquote</cite></a>:
  </p>
  
  <p>O elemento quote - <code>&lt;q&gt;</code> - é <q cite="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/q">
    usado para citações curtas que não precisam de parágrafos ou quebras de linha.</q> -- 
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/q"><cite>MDN q page</cite></a>.</p>
  ```
  
  <b>Output:</b>
  
  <blockquote cite="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/blockquote">
    O <strong>Elemento HTML <code>&lt;blockquote&gt;</code></strong> (ou <em>HTML Block Quotation Element</em>)
    indica que um texto externo foi citado.
  </blockquote>
  
  <p>De acordo com <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/blockquote">
    <cite>página MDN blockquote</cite></a>:
  </p>
  
  <p>O elemento quote - <code>&lt;q&gt;</code> - é <q cite="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/q">
    usado para citações curtas que não precisam de parágrafos ou quebras de linha.</q> -- 
    <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/q"><cite>MDN q page</cite></a>.</p>
  
### Abreviações
  
  As tags de abreviações servem para mostrar ao usuário, quando ele movimentas o cursor sobre a abreviação, 
  o que as abreviações mostradas nas páginas significam. A tag mais usada para isso é a tag <i>abbr</i>. 
  Exemplos abaixo.
  
  ```
  <p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar nossos documentos da web.</p>
  ```
  
### Detalhes de contato
  
  Serve para marcar detalhes de contato, i.e. detalhes sobre o autor da página ou coisa do tipo.
  Exemplos abaixo.
  
  ```
  <address>
    <p>
      Felipe Campos <br>
      <strong>Divinópolis, MG</strong>
    </p>
  </address>
  ```
  
### Representando códigos de computador
  
  Para representar códigos de computação, pode-se usar as tags <i>code</i> e <i>pre</i>. 
  Exemplos abaixo.
  
  ```
  <pre>
    <code>
      <p>Teste</p>
    </code>
  </pre>
  ```
  
### Elementos genéricos
  
  Nos elementos genéricos, possuímos duas tags. A tag <i>div</i> cumpre sua função trabalhando com blocos e a 
  tag <i>span</i> cumpre sua função trabalhando com linhas.
  Exemplos abaixo.
  
  ```
  <div>
    Texto
  </div>
  Qualquer
  ```
  ```
  <span>
    Texto
  </span>
  Qualquer
  ```
## Links
  
  O elemento âncora ou a tag <i>a</i>, é o elemento que faz a ligação em diversas páginas. <br>
  
  A anatomia da tag <i>a</i> é formada por atributos globais, de <i>download</i>, de <i>target</i> 
  (sendo '_self' para padrão ou '_blank' para bertura de nova guia) e pelo mais importante que é o <i>href</i>, 
  que indica para onde o usuário será redirecionado quando clicar no link.<br>
  
  Exemplos básicos:<br> 
  ```<a href="google.com" target="_blank"> Link do Google </a>```<br>
  ```<a href="mailto:fulano@teste.com.br">Email</a>```<br>
  ```<a href="tel:+5538999999999">Telefone</a>```<br>
  
  Exemplos com fragmentos:<br>
  ```<a href="#about">Sobre</a>```<br>
  ```<a href="#history">História</a>```<br>
  ```<a href="works">Trabalhos</a>```<br>
  
  Lembrando que nos fragmentos, as tags devem ser identficadas com o <i>id</i> referente ao <i>href</i>.
  
## Tabelas
  
  As tabelas serão usadas para fazer organização de dados e essa organização será feita utilizando as linhas e colunas
  da tabela, o que facilitará a visualização desses dados e ter uma boa acessibilidade do mesmo. O ponto negativo das 
  tabelas é o fato de serem pouco flexíveis e precisarem de uma estilização para melhor visualização.
  
### Tabela básica
  
  ```
<table>
  <caption>Pessoas por idade:</caption>
  
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Felipe</td>
      <td>19</td>
    </tr>

    <tr>
      <td>Fulano</td>
      <td>25</td>
    </tr> 
  </tbody>
  
  <tfoot>
    <tr>
      <td>Total: </td>
      <td>2 Pessoas</td>
    </tr>
  </tfoot>
</table>
  ```
  
  <strong>Output:</strong>
  
<table>
  <caption>Pessoas por idade:</caption>
  
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Felipe</td>
      <td>19</td>
    </tr>
    <tr>
      <td>Fulano</td>
      <td>25</td>
    </tr> 
  </tbody>
  
  <tfoot>
    <tr>
      <td>Total: </td>
      <td>2 Pessoas</td>
    </tr>
  </tfoot>
</table>
  
### Tabela complexa
  
  ```
  <table>
    <caption>Produzidos x vendidos por Loja</caption>

    <colgroup>
      <col>
      <col span="2" style="background-color: aqua">
      <col span="2" style="background-color: tomato">
    </colgroup>

    <thead>
      <tr>
        <th rowspan="2"></th>
        <th colspan="2" scope="colgroup">Loja 1</th>
        <th colspan="2" scope="colgroup">Loja 2</th>
      </tr>

      <tr>
        <th scope="col">Produzidos</th>
        <th scope="col">Vendidos</th>
        <th scope="col">Produzidos</th>
        <th scope="col">Vendidos</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th scope="row">Produto 1</th>
        <td>50</td>
        <td>30</td>
        <td>20</td>
        <td>10</td>
      </tr>

      <tr>
        <th scope="row">Produto 2</th>
        <td>10</td>
        <td>10</td>
        <td>50</td>
        <td>20</td>
      </tr>
    </tbody>
  </table>
  ```
  
  <strong>Output:</strong>
  
<table>
  <caption>Produzidos x vendidos por Loja:</caption>
  <colgroup>
    <col>
    <col span="2" style="background-color: aqua">
    <col span="2" style="background-color: tomato">
  </colgroup>
  <thead>
    <tr>
      <th rowspan="2"></th>
      <th colspan="2" scope="colgroup">Loja 1</th>
      <th colspan="2" scope="colgroup">Loja 2</th>
    </tr>
    <tr>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
      <th scope="col">Produzidos</th>
      <th scope="col">Vendidos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Produto 1</th>
      <td>50</td>
      <td>30</td>
      <td>20</td>
      <td>10</td>
    </tr>
    <tr>
      <th scope="row">Produto 2</th>
      <td>10</td>
      <td>10</td>
      <td>50</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
  
## Cabeçalhos
  
  O cabeçalho é a parte que não é exibida no navegador, mas serve para configurar a página, como a alteração do título
  da página, link para ligar o CSS/Javascript ao arquivo HTML, idioma da página, entre outros.
  
### Tag <i>Meta</i>
  
  Codificação de caracteres especiais: ```<meta charset="UTF-8">```.<br>
  Portabilidade para dispositivos móveis: ```<meta name="viewport" content="width-device-width, initial-scale=1.0">```.<br>
  
### Favicon
  
  Link para ícones personalizados da página.
  
  Favicon básico: ```<link rel="icon" href="https://iconarchive.com/show/qetto-icons-by-ampeross/icon-developer-icon.html">```
  
### Meta <i>SEO</i> - Search Engine Optimization
  
  Autor: ```<meta name="author" content="Felipe Campos">```<br>
  Descrição: ```<meta name="description" content="Uma página qualquer">```<br>
  Robôs: ```<meta name="robots" content="follow, index">```
  
## Código exemplo HTML 
  
Disponibilizarei um código exemplo HTML de um site feito por mim em um bootcamp feito na <a href="https://rocketseat.com.br">Rocketseat</a> neste repositório de HTML.
 
  
  
  
  
  
  
  
  
  
  
  
  
  