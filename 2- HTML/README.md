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
    <html lang="en">  //Linguagem da página
      
      <head> //Cabeçalho da página
        <meta charset="UTF-8"> //Configuração de aceitação de caracteres
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> //Configuração de visibilidade de aparelhos
        <title>Document</title> //Titulo na aba do navegador
      </head>
      
      <body> //Corpo da página (O que aparecerá ao usuário)
         Document
      </body>
      
    </html>
  ```
  
  
  
  
  
  
  
  
