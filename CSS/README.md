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

# Box model

O Box Model é fundamental para fazer layouts para web porque ele vai te dar maior facilidade na hora de aplicar o CSS. 
Ao entender os conceitos do Box Model muitas questões do CSS começam a fazer sentido.

## O que é Box Model?

Box Model é a representação de uma caixa retangular, que possui propriedades em 2 dimensões, sendo elas largura e altura.

## Propriedades da caixa

<ul>
  <li>Tamanho - width/height</li>
  <li>Conteúdo - content</li>
  <li>Bordas - border</li>
  <li>Preenchimento interno - padding</li>
  <li>Espaços fora da caixa - margin</li>
</ul>

## Box Sizing

O Box Sizing é importante para o desenvolvedor entender os cálculos que serão feitos ao determinar o tamanho de uma caixa,
sendo assim, o Box Sizing pode se dividir em <code>content-box</code> ou <code>border-box</code>.

<ul>
  <li><strong>content-box: </strong>Vem por padrão no navegador e seu cálculo de tamanho é feito a partir do tamanho da 
    caixa de conteúdo (Content Box) somado com as outras boxes. Sendo assim, se você determina o tamanho da caixa em
    100px e adiciona um <i>padding</i> de 25px, será feito o seguinte cálculo: Tamanho = 100px + (2 * 25px) = 150px. Ou seja,
    o tamanho determinado inicialmente não condiz com o tamanho final.</li>
  <li><strong>border-box: </strong>Para que não aconteça como o exemplo acima, é possível com o <i>border-box</i> mudal qual
    vai ser a referência para o cálculo do tamanho da caixa, fixando o valor determinado e adaptando o tamanho da <i>Content
    Box</i> de acordo com os paramêtros adicionados.</li>
</ul>

## Display-block-inline

Como as caixas se comportam em relação as outras caixas.

### display: block;

O Display Block ocupa toda a linha, colocando o próximo elemento abaixo do antecessor.

<ul>
  <li>Width e height são respeitados.</li>
  <li>Padding, margin, border irão funcionar normalmente.</li>
  <li>Tags que funcionam: p, div, section, h1, h2...</li>
</ul>

### display: inline;

No Display Inline, os elementos ficam ao lado do outro e não empurram outros elementos para baixo.

<ul>
  <li>width e height não funcionam.</li>
  <li>Somente valores horizontais de margin.</li>
   <li>Tags que funcionam: a, strong, span, em...</li>
</ul>

## Margin

Margin é o espaço entre os elementos, e podemos dividir esse espaço em 4 valores, <code>margin-top</code>, 
<code>margin-right</code>, <code>margin-bottom</code> e <code>margin-left</code>, e seus valores podem ser em 
comprimento, porcentagem ou automático (auto).

<ul>
  <li>O margin é aplicado em elementos com display block.</li>
  <li>Cuidado com o margin collapsing, que é quando o top se junta ao bottom.</li>
</ul>

## Padding

O padding é o preenchimento interno da caixa, e também podemos dividí-los em 4 valores, <code>padding-top</code>, 
<code>padding-right</code>, <code>padding-bottom</code> e <code>padding-left</code>, e seus valores podem ser em 
comprimento, porcentagem ou automático (auto).

## Border-outline

São as bordas da caixa, tendo como valores <code>border-style</code>, <code>border-widht</code> e <code>border-color</code>.

<ul>
  <li>Style: solid, dotted, dashed, double, grrove, ridge, inset e outset.</li>
  <li>Width: &ltlength&gt.</li>
  <li>Color: &ltcolor&gt.</li>
</ul>

### Outline

O outline é muito semelhante ao border, mas difere em 4 sentidos:

<ul>
  <li>Não modifica o tamanho da caixa, pois não é parte do Box Model.</li>
  <li>Poderá ser diferente de retangular.</li>
  <li>Não permite ajuste individuais.</li>
  <li>Mais usado pelo user agent para acessibilidade.</li>
</ul>

### Para mais contéudo sobre Box Model, clique <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">aqui</a>.

# Font Properties

A tipografia transmite uma mensagem, por exemplo, quando queremos dar uma ênfase no texto nós podemos escrever o mesmo em
negrito. Nós podemos transmitir uma mensagem diferente dependendo do estilo que escrevemos o texto. Algumas das propriedades
de fonts de texto do CSS que podem nos ajudar a transmitir uma mensagem através dos textos da página são:

<ul>
  <li>font-family</li>
  <li>font-weight</li>
  <li>font-style</li>
  <li>font-size</li>
</ul>

## Font-family

É o tipo de fonte de um elemento. Essa função lista as fontes em ordem de prioridade. 

Exemplo:<code>font-family: "Times New Roman", Times, serif;</code>

## Font-weight

Font Weight é o peso da fonte, como normal, bold, bolder, lighter. Dependendo da família da fonte não conseguimos utilizar
todos os pesos de fonte.

Exemplo: <code>font-weight: bold;</code>

## Font-style

É o estilo da fonte, possui valores como, normal, italic, oblique. Os valores que podem ser aplicados dependem da fonte
usada.

Exemplo: <code>font-style: italic;</code>

## Font-size

É o tamanho da fonte.

Exemplo: <code>font-size: 18px;</code>

## Web-fonts

Fontes do sistema são as fontes que estão instaladas na máquina do usuário e nem sempre o cliente vai ter instalado as 
fontes usadas no projeto e isso pode fazer com que os estilos dos textos não sejam aplicados corretamente, mas para resolver
esses casos podemos preparar nossas fonts para web ou usar fontes da web.

### Como usar fontes para web?

<ul>
  <li>@font-face</li>
  <li>@import</li>
  <li>link</li>
</ul>

Referência de fontes: <a href="https://fonts.google.com/">Google fonts</a>, <a href="https://css-tricks.com/snippets/css/using-font-face/">CSS Tricks</a>.

### Para saber mais sobre fontes, clique <a href="https://www.w3.org/TR/css-fonts-3/">aqui</a>.

# Posicionamento de elementos

Aqui vamos ver como posicionar os elementos em tela criando bons layouts.

## Page Layouts

Alguns dos métodos usados para posicionar os elementos na tela.

<ul>
  <li>Tables</li>
  <li>Floats e clear</li>
  <li>Frameworks e Grid Systems</li>
  <li>Flexbox</li>
  <li>Grid</li>
</ul>

## Posicionamentos

Controla onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

<ul>
  <li>Name: position</li>
  <li>Value: static, relative, absolute, fixed</li>
</ul>

Lembrando que o fluxo normal dos elementos é ficar um abaixo do outro, a não ser no caso de elementos inline, 
que ficam um ao lado do outro.

## Element Stacking

É o empilhamento de elementos. Podemos usar o z-index para determinar a ordem da posição do elemento. 
Quanto maior o z-index, mais "acima" vai aparecer o elemento.

## Flexbox

O Flexbox nos permite posicionar os elementos dentro da caixa.

### Flex-direction

Qual a direção do flex: horizontal ou vertical, row ou column.

### Alinhamento

<ul>
  <li>justify-content</li>
  <li>align-itens</li>
</ul>

## Grid

Funciona da mesma forma do Flexbox, mas difere do Flexbox ao poder usar o posicionamento horizontal e vertical ao mesmo
tempo.





