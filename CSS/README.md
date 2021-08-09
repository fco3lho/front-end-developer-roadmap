# Introdução ao CSS

CSS siginifica <i>Cascading Style Sheet</i>, é um código para criar estilos no HTML, ou seja, HTML é como se fosse a estrutura
e o CSS é a beleza. Lembrando que o CSS, assim como o HTML, não é uma linguagem de programação, é uma linguagem Style Sheet.

## Anatomia

<strong>Exemplo:</strong>
```
  class {
    color: blue;
    font-size: 60px;
    background: gray;
  }
```
<ul>
  <li><strong>Selector:</strong> "class"</li>
  <li><strong>Properties:</strong> "color", "font-size", "background"</li>
  <li><strong>Property Value:</strong> "blue", "60px", "gray"</li>
</ul>

## Selectors

Os seletores servem para conectar um elemento HTML com o CSS.

### Tipos

<ul>
  <li>Global selector: "*"</li>
  <li>Element/Type selector: "h1, h2, p, div"</li>
  <li>ID Selector: "#box, #container"</li>
  <li>Class Selector: ".red, .title"</li>
</ul>

## Box model

No <i>box model</i> podemos imaginar, literalmente, como uma caixa que possui largura, altura, cor, conteúdo, entre outras
propriedades.

Com o tempo, você irá perceber que quase tudo é formado por caixas do CSS, com posicionamentos, tamanhos, espaçamentos,
bordas, cores e outras propriedades diferentes entre elas. E lembrando que cada tag criada no HTML é uma caixa diferente.

## Como aplicar o CSS

Você deve criar uma tag no header do HTML da seguinte forma: ```<link rel="stylesheet" href="style.css">```.<br>
O arquivo <i>style.css</i> deve estar na mesma pasta que o arquivo HTML.

## Cascata

O CSS é configurado em forma de cascata, isso quer dizer que ele é lido de cima para baixo, ou seja, em propriedades iguais,
a que está embaixo que será aplicada.

## Especificidade

É um cálculo matemático, onde cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

<ul>
  <li>0. Universal selector, combinators e negation pseudo-class (:not()).</li>
  <li>1. Element type selector e pseudo-elements (::before, ::after)</li>
  <li>10. Classes e attribute selectors ([type="radio"])</li>
  <li>100. ID Selector</li>
  <li>1000. Inline</li>
</ul>

## At-rules

As <i>At-rules</i> estão relacionadas ao comportamento do CSS, como importação, tamanho de media, fontes externas,
animações, entre outras. Alguns exemplos abaixo:

<ul>
  <li>@import: Inclui um CSS externo.</li>
  <li>@media: Regras condicionais para dispositivos.</li>
  <li>@font-face: Fontes externas.</li>
  <li>@keyframes: Animação.</li>
</ul>

## Vendor Prefixes

Permite que browsers adicionem 'features' a fim de colocar em uso alguma novidade que vemos no CSS.

Exemplos para Chrome, Safari, iOS e Android, Mozilla (Firefox), Internet Explorer e Opera, respectivamente:

```
-webkit-background-clip: text;
-moz-background-clip: text;
-ms-background-clip: text;
-o-background-clip: text;
```






