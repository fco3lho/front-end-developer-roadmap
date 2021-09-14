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

# Unidades de medida

Cada propriedade possui valores do tipo <code>property: value</code>, e agora vamos estudar as propriedades e seus valores
a fim de entendê-los.

## Tipos numéricos e unidades comuns

### Tipos númericos

<ul>
  <li>&ltinteger&gt: número inteiro como -10 ou 223.</li>
  <li>&ltnumber&gt: número decimal como -2.4, 64 ou 0.234.</li>
  <li>&ltdimension&gt: é um &ltnumber&gt com uma unidade junto, como 90deg ou 14px.</li>
  <li>&ltpercentage&gt: representa uma fração de outro número, como 50%.</li>
</ul>

### Unidades comuns

<ul>
  <li>&ltlength&gt: é um um dos mais usados no CSS e representa um valor de distância: px, em, vw.</li>
  <li>&ltangle&gt: representa um ângulo: deg, rad, turn.</li>
  <li>&lttime&gt: representa um tempo: s, ms.</li>
  <li>&ltresolution&gt: representa resoluções para dispositivos: dpi.</li>
</ul>

## Distâncias absolutas e relativas

As distâncias absolutas são ficas e não alteram seu valor, como o <b>px</b> e o <b>cm</b>, e as distâncias relativas
são relativas a outro valor, que pode ser o elemento pai, root ou o tamanho da tela, o que é mais benefico, pois traz uma
maior adaptação aos diferentes tipos de tela.

#### Observações:

<ul>
  <li>
    Normalmente o tamanho da font padrão do navegador é de 16px e para mudar esse valor temos que fazer a alteração 
    no root ou no elemento html.
  </li>
  <li>
    O <b>viewport</b> é a parte da tela que está sendo exibida. No caso dos navegadores web, é o que é exibido na janela/tela 
    do documento. Conteúdos que estão fora do viewport só serão exibidos quando feito um scroll da área de visualização.
  </li>
</ul>

## Porcentagens

As porcentagens são valores bem flexíveis, e em muitos casos é tratado da mesma maneira que as distâncias, ou seja,
sempre será relativo a algum valor.

## Position

As posições representam um conjunto de coordenadas, que podem ser divididas em:

<ul>
  <li>top</li>
  <li>right</li>
  <li>bottom</li>
  <li>left</li>
  <li>center</li>
</ul>

E normalmente são usadas para alguns tipos de propriedades, como o <code>background-position</code>.

## Funções

O CSS possui funções assim como em linguagens de programação, e são muito usadas para causar um reaproveitamento do código.

Exemplo de funções: <code>rgb()</code>, <code>hsl()</code>, <code>url()</code>, <code>calc()</code>. Dentro dos parêntesis
de cada função, são passados os argumentos.

Para acessar o conteúdo sobre funções no CSS, clique <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions">aqui</a>.










