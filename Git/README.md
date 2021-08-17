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
