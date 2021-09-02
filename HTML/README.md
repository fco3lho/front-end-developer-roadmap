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

# Formulários
  
## Form
  
  Elemento que definirá um formulário.

  <ul>
    <li>action: Para onde os dados do formulário irão (Se vazio enviará para a própria página).</li>
    <li>method: GET: Pega os dados e envia para o endereço de 'action'. <br>
                POST: Pega os dados e envia para o endereço de 'action' de modo mais sigiloso.</li>
  </ul>
   
```
    <form id="form1" action="" method="GET">
    <button>Enviar</button>
    </form>
```
  
## Fieldset 
  
  Serve para agrupar as informações/campos que tenham o mesmo propósito, com a finalidade de deixar o HTML 
  mais semântico e mais acessível.

  Atributos especiais:
  
  <ul>
    <li>disabled: desabilita todos os elementos internos, ou seja, não será enviado ao submeter o formulário.</li>
    <li>form: Faz referência a um formulário com o id inserido e não precisa estar dentro do formulário. 
      Linka o fieldset ao formulário indicado pelo id.</li>
    <li>name: Nome do grupo.</li>
  </ul>
    
  O fieldset sempre será acompanhado pela tag <legend>, que é o nome do agrupamento e é o primeiro elemento 
  dentro do fieldset.
  
```
<form action="">
  <fieldset form="form1" name="contact">
    <legend>Contato</legend>
    <label for="">Nome</label>
    <input type="text">
  </fieldset>
</form>
```
  
## Label
  
  Serve para associar e identificar uma ou mais tags de entrada de dados, aumentando a acessibilidade.

  Para fazer conexão entre o label e a tag de entrada de dados, feito via 'id' do 'input' e só funciona 
  com os elementos 'button', 'input', 'meter', 'output', 'progress', 'select' e 'textarea'.
  
```
 <label>
  Nome:
  <input type="text">
 </label>

 <label for="sobrenome">Sobrenome:</label>
 <input id="sobrenome" type="text">
```
  
## Button
  
  Representa um botão usado para enviar formulários e é estilizado pelo user agent.

  Atributos comuns:
  
  <ul>
    <li>type: submit, reset.</li>
    <li>autofocus: Foco da página para o botão.</li>
    <li>disabled: Desabilita o botão.</li>
    <li>form: Conecta o botão a algum formulário com o id inserido.</li>
  </ul>

```
<form action="">
  <input type="text" value="teste">

  <button type="submit">Enviar</button>
  <button type="reset">Limpar</button>
</form>

<button autofocus>Submit</button>
<button disabled>Desabilitado</button>
```

## Datalist
  
  Fornece ao usuário uma lista de valores como sugestão a uma tag <input>. O usuário pode selecionar um 
  dos valores ou colocar um valor diferente da sugestão.
  
```
  <input type="text" list="listaDeFrutas" placeholder="Escolha uma fruta">

  <datalist id="listaDeFrutas">
    <option>Maçã</option>
    <option>Banana</option>
    <option>Mamão</option>
  </datalist>

  <input type="color" list="listaDeCores">

  <datalist id="listaDeCores">
    <option>#ff0000</option>
    <option>#00ff00</option>
    <option>#0000ff</option>
  </datalist>
```
  
## Input
  
  Uma das tags mais usadas em formulários, aceita os mais diversos tipos de dados e
  possui um elevado número de combinações.
  
  Atributos:
  
  <ul>
    <li>type: text, date, number, email, file, password.</li>
    <li>name</li>
    <li>id</li>
    <li>autocomplete: utiliza cookies para autocompletar dados já usados, como email.</li>
    <li>autofocus: inicializa a página com foco na tag.</li>
    <li>disable: desabilita o campo.</li>
    <li>value: determina um valor de início.</li>
    <li>form: serve para linkar à algum formulário usando o id do formulário.</li>
    <li>placeholder: Mensagem de fundo antes de inserir alguma coisa no campo.</li>
  </ul>
  
  Exemplos:
  ```
  <input type="text" />
  <input type="date" />
  <input type="number" />
  <input type="email" />
  <input type="file" />
  <input type="password" title="Mínimo 4, máximo 12 caracteres" minlength="4" maxlength="12" size="12"/>

  <label for="email">Email:</label>
  <input id="email" type="email" placeholder="Digite seu email aqui" />
  ```
  
  ## Formulário de exemplo
  
  Para acessar o formulário de exemplo usando apenas HTML5, clique <a href="https://github.com/fco3lho/front-end-developer-roadmap/blob/main/HTML/formExample.html">aqui</a>.
  
# Web Semântica
  
  ## O que é?
  
  Significa a adição de significado à uma linguagem, no caso do HTML, para dar significado ao conteúdo e serve para controlar a
  organização e apresentação do conteúdo. Cada site é único, entretanto, existem padrões ou convenções, que nós identificamos
  intecionalmente ou não intencionalmente.
  
  Ao usar uma marcação semântica consistente, para identificar os elementos da página, nós ajudamos os <code>user agents</code>
  a identificar corretamente os elementos e apresentá-los aos visitantes da página.
  
  Isso se torna extremamente relevante para acessibilidade, ou seja, para visitantes que precisam usar leitores de página, 
  por exemplo. Com uma página desorganizada, fica complexo para o visitante com necessidades especiais, fazer bom uso 
  da nossa página.
  
  Além disso, os motores de busca dão preferência para sites que estão com sua semântica em dia. Um site bem estruturado e 
  organizado é um site melhor encontrado na web.
  
  ## HTML5 Semântico
  
  ### As tags
  
  Elas que irão ajudar a criar um HTML semântico, pois algumas tags tem significados específicos e orientações claras sobre 
  onde devem ficar na página e o motivo dela existir.
  
  Exemplo:
  
  ```
    <p>
      “Não se pode pisar duas vezes no mesmo rio.”
                                  - Heráclito
    </p>
  ```
  
  Com uma melhor semântica:
  
  ```
    <blockquote>
      “Não se pode pisar duas vezes no mesmo rio.”
                             <cite>- Heráclito</cite>
    </blockquote>
  ```
  
  ### Entendendo os significados
  
  O autor da página deve se responsabilizar por entender os significados dos elementos, que às vezes parece ser simples, mas
  outras vezes é muito complexo de se entender alguns elementos.
  
  ## Seções comuns
  
  As seções comumente encontrada em documentos HTML são:
  
  <ul>
    <li><code>&ltheader&gt</code>: Cabeçalho</li>
    <li><code>&ltnav&gt</code>: Navegação</li>
    <li><code>&ltmain&gt</code>: Main</li>
    <li><code>&ltaside&gt</code>: Barra lateral</li>
    <li><code>&ltfooter&gt</code>: Rodapé</li>
  </ul>
  
  ### Tag header
  
  O cabeçalho ou a tag <code>header</code> são recomendados se usar no início da página e são vistos como um elemento global da
  página. Esta tag pode ser usada em outros elementos semânticos como <code>article</code> e <code>section</code> e não pode
  ser usado dentro de uma outra tag <code>geader</code> ou dentro de uma tag <code>footer</code>, pois perderia seu sentido.
  
  ### Tag nav
  
  A tag <code>nav</code> serve para representar uma seção da página que aponta para outra página ou para outra seção da página
  e é recomendado usar esta tag dentro da tag <code>header</code>.
  
  ### Tag main
  
  A tag <code>main</code> é para um conteúdo único da sua página, portanto, você vai utilizá-la apenas uma vez por página, 
  e vai ser colocada direto do <code>body</code>, e não é legal deixar em qualquer outro lugar além de logo depois do
  <code>body</code>, entendemos a tag <code>main</code> como o foco central da página, o conteúdo principal da aplicação, 
  então geralmente dentro dessa tag, não vamos deixar o nosso menu.
  
  Exemplo:
  
  ```
  <body>
    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
  </body>
  ```
  Essa estruturação semântica vai nos ajudar com a nossa própria organização, com o nosso CSS, com o Javascript, 
  com o motor de buscas, acessibilidade, entre outros. Lembrando que a tag <code>main</code> não possui atributos 
  específicos, somente os globais.
  
  ### Tag article
  
  A tag <code>article</code> vai criar blocos de conteúdo que estejam relacionados, exemplo a seguir:
  
  ```
  <body>
    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>
  </body>
  ```
  Lembrando que a tag <code>article</code> não possui atributos específicos, somente os globais.

  ### Tag aside
  
  A tag <code>aside</code> é para conteúdos levemente relacionados ao conteúdo principal, como explicações do conteúdo,
  glossários, links extras, biografia do autor, informações de perfil e etc.

  É uma tag fácil de se entender, porém fácil de se confundir, então evite atribuir a tag <code>aside</code> ao lado da 
  página conforme você for aprendendo mais sobre HTML, CSS.
  
  ### Tag footer
  
  A tag <code>footer</code> é bem tranquila de se entender, ela fica no final da página e vai geralmente ter informações 
  do autor da página, copyright, contato, sitemap, voltar ao topo, são algumas das coisas que aparecem geralmente no 
  <code>footer</code>.

  Abaixo um exemplo de como seria um HTML com <code>footer</code>:
  
  ```
  <body>  
    <article>
      <h1>Sobre nós</h1>
      <p>Formamos um time de profissionais: </p>

      <ol>
          <li>Capacitados</li>
          <li>Gentis</li>
          <li>Honestos</li>
          <li>Gentils</li>
      </ol>

      <h2>Quem são</h2>
      <ul>
          <li>Harry Hair</li>
          <li>Dora Depiladora</li>
          <li>Massoterapeuta Massa</li>
          <li>Esteticista Ciça</li>
          <li>Pedo Curi</li>
          <li>Bárbara Brabeira</li>
          <li>Cecília (para seus cílios)</li>
      </ul>

    </article>

    <footer>
        <p>© 2020 Cabeleleila Leila</p>
    </footer>
  </body>
  ```
  Lembrando que a tag <code>footer</code> não possui atributos específicos, somente os globais.
  
  ### Tag section
  
  A tag <code>section</code> serve para colocarmos seções na nossa página HTML, e uma dica de ouro, geralmente se coloca 
  um título e conteúdo na tag <code>section</code>. Antigamente usava-se uma <code>div</code> para fazer essas divisões 
  e seções de conteúdos, mas semanticamente é mais apropriado usar uma tag <code>section</code>. 
  
  Exemplo de uso a seguir:
  
  ```
  <main>
    <h1>Receita 1</h1>
    <p>descrição da receita</p>

    <section>
        <h2> Modo de preparo</h2>
        <p>Modo de preparo</p>
    </section>
  </main>
  ```
  
  <strong>Obs.:</strong> A tag <code>section</code> pode ser usada dentro de um article, e não possui atributos específicos, 
  somente os globais.

  
  
