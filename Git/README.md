# O que é Git?

Git é um dos diferentes tipos de controle de versão de softwares/projetos, que irá registrar as alterações
em um ou mais arquivos, e também irá lembrar das versões específicas mais tarde, o que o ajudará a reverter
para o estado anterior determinados arquivos ou um projeto inteiro.

Sendo assim, é possível comparar as mudanças ao longo do tempo, ver quem modificou pela última vez algo que
pode estar causando um problema, ver quem introduziu um problema ou quando introduziu um problema, recuperação
fácil dos arquivos do projeto em casa de perda e muitos outros benefícios de se usar um controle de versão como
o Git.

O <strong>Git</strong> possui determinadas características para funcionar como um sistema descentralizado, 
sendo elas:

<ul>
  <li><i>Commit:</i> Serve para salvar o histórico de alterações no código e por ele é possível voltar para 
  qualquer ponto na história do código.</li>
  
  <li><i>Branch:</i> Serve para controlar o fluxo de novas funcionalidades criando ramificações do projeto, para 
  ánalise e resolução de conflitos.</li>
</ul>

## Tipos de controle de versão

### Sistemas locais

Os controles de versão de sistemas locais são resumidos a criar cópias do projeto para obter versões anteriores e finais
apenas na própria máquina do projeto, mas este tipo é muito propenso a acontecer erros.

### Sistemas Centralizados

Os sistemas centralizados funcionam apenas em um único servidor e possui todo o conteúdo do controle de versão, o que facilita
a administração do projeto com vários colaboradores diferentes trabalhando juntos, mas se o servidor cair, todo o projeto
fica inacessível.

### Sistemas Descentralizados

Os sistemas descentralizados, onde temos como exemplo <strong>Git</strong>, funcionam de forma que cada máquina que contribuiu 
para algum projeto, terá a última versão do projeto salva nela, e isso para os diferentes colaboradores do projeto, fazendo 
com que se algum servidor do projeto cair ou deixar de existir, possuem outros servidores que poderão salvar o projeto. 
Isso tudo funciona por meio de clones do repositório principal, onde cada clone é basicamente um backup completo de todo 
o projeto.

## Começando no Git

### Iniciando um repositório

No terminal do Git, utilize o comando <code>cd</code> para ir até o diretório em que deseja criar um repositório.
Ao entrar no diretório que deseja criar um repositório, escreva o comando <code>git init</code>, feito isso, 
você terá criado o repositório.

### Primeiro <i>commit</i>

No diretório em que foi criado o repositório, digite o comando <code>git add .</code> para adicionar um ponto a história
do projeto. Após isso, insira o comando <code>git commit -m "primeiro commit"</code> para descrever o commit.

### Git log

Usando o comando <code>git log</code>, o git irá te mostrar o histórico de <i>commits</i> realizados naquele projeto.

## Comando <i>git help</i>
          
<strong>Uso:</strong>
 
  <ul>
    <li><code>git --version</code></li>
    <li><code>git --help</code></li>
    <li><code>git -C [path]</code></li>
    <li><code>git -c [name]=[value]</code></li>
    <li><code>git --exec-path[=path]</code></li>
    <li><code>git --html-path</code></li>
    <li><code>git --man-path</code></li>
    <li><code>git --info-path</code></li>
    <li><code>git -p</code> ou <code>git --paginate</code> ou <code>git -P</code> ou <code>git --no-pager</code></li>
    <li><code>git --no-replace-objects</code></li>
    <li><code>git --bare</code></li>
    <li><code>git --git-dir=[path]</code></li>
    <li><code>git --work-tree=[path]</code></li>
    <li><code>git --namespace=[name]</code></li>
    <li><code>git --super-prefix=[path]</code></li>
    <li><code>git --config-env=[name]=[envvar]</code></li>
  </ul>

### Estes são comandos Git comuns usados em várias situações:

<strong>Para iniciar uma área de trabalho:</strong>

<ul>
  <li><code>clone</code>: Clone um repositório em um novo diretório.</li>
  <li><code>init</code>: Crie um repositório Git vazio ou reinicialize um existente.</li>
</ul>

<strong>Para trabalhar na mudança atual:</strong>

<ul>
  <li><code>add</code>: Adiciona o conteúdo do arquivo ao índice.</li>
  <li><code>mv</code>: Mover ou renomear um arquivo, diretório ou link simbólico.</li>
  <li><code>restore</code>: Restaurar arquivos da árvore de trabalho.</li>
  <li><code>rm</code>: Remove os arquivos da árvore de trabalho e do índice.</li>
  <li><code>sparse-checkout</code>: Inicializar e modificar o sparse-checkout.</li>
</ul>

<strong>Para examinar o histórico e o estado:</strong>

<ul>
  <li><code>bisect</code>: Use a pesquisa binária para encontrar o commit que introduziu um bug.</li>
  <li><code>diff</code>: Mostra mudanças entre commits, commit e árvore de trabalho, etc.</li>
  <li><code>grep</code>: Imprimir linhas que combinam com um padrão.</li>
  <li><code>log </code>: Mostrar logs de confirmação.</li>
  <li><code>show</code>: Mostra vários tipos de objetos.</li>
  <li><code>status</code>: Mostra o status da árvore de trabalho.</li>
</ul>
   
<strong>Para crescer, marcar e ajustar sua história comum:</strong>

<ul>
  <li><code>branch</code>: Listar, criar ou excluir branches.</li>
  <li><code>commit</code>: Mudanças de registro para o repositório.</li>
  <li><code>merge</code>: Junte dois ou mais históricos de desenvolvimento juntos.</li>
  <li><code>rebase</code>: Reaplica commits em cima de outra ponta de base.</li>
  <li><code>reset</code>: Redefina o HEAD atual para o estado especificado.</li>
  <li><code>switch</code>: Mudar ramos.</li>
  <li><code>tag</code>: Criar, listar, excluir ou verificar um objeto de tag assinado com GPG.</li>
</ul>

<strong>Para colaborar:</strong>

<ul>
  <li><code>fetch</code>: Buscar objetos de download e referências de outro repositório.</li>
  <li><code>pull</code>: Busque e integre com outro repositório ou filial local.</li>
  <li><code>push</code>: Atualizar referências remotas junto com objetos associados.</li>
</ul>

#### Obs.: Qualquer desses comandos devem ser antecedidos de <i>git</i>, exemplo <code>git [comando]</code>.
