## Conhecendo o NodeJS

### O que podemos fazer com o NodeJS?

O NodeJS é uma ferramenta que serve para desenvolver o Backend e o Frontend com JavaScript, Micro-serviços, construir APIs,
construção de Scripts e Automação e até Machine Learning e Inteligência Artificial. O que não é recomendado no uso do NodeJS,
são aplicações que requerem uma grande capacidade de processamento, como processamento de fotos e vídeos.

### Vantagens de se usar NodeJS

<ul>
  <li>O NodeJS é muito rápido em questão de execução e prototipação</li>
  <li>Possui uma alta escalabilidade</li>
  <li>Aplicações de ponta</li>
  <li>A linguagem que sempre é usada é o JavaScript</li>
  <li>Ecossistema gigante</li>
</ul>

### O que é o NodeJS?

O NodeJS é um JavaScript Runtime Enviroment, isto é, é um Ambiente de Execução JavaScript. Isso significa que o NodeJS tem um
ambiente separado de seu exterior para execução de códigos JavaScript, fazendo a conversação entre software e hardware.

### Google V8

O V8 compõe o ambiente que irá rodar o JavaScript na máquina.

<ul>
  <li>Interpretador de JavaScript para linguagem de máquina</li>
  <li>Foi criado em C++</li>
  <li>Baseado nas últimas features do JavaScript</li>
  <li>Focado para Chrome, mas tem todo o cuidado de não quebrar o node</li>
  <li>Não possui a DOM, console ou File System</li>
</ul>

### Como funciona?

O NodeJS funciona de maneira assíncrona, conseguindo concluir mais de um evento de cada vez e não possuindo bloqueios,
o que faz com que seja bastante solicitado e entregue tudo que foi solicitado, tornando seu trabalho rápido e efetivo.

## Configurando o ambiente

### Instalando o NodeJS

Você pode baixar o NodeJS clicando <a href="https://nodejs.org/en/">aqui</a>. É preferível que você selecione a versão LTS,
pois significa que ela já foi mais testada e está mais adaptada. Siga os passos do instalador e finalize a instação.

Para verificar se a instalação foi concluída com sucesso, abra o terminal e digite <code>node -v</code>. Isso deverá lhe
retornar a versão do NodeJS que você instalou.

### REPL

REPL significa Read-Eval-Print-Loop, ou seja, poderemos escrever JavaScript em um ambiente node, direto no terminal.
Para entrar, digite <code>node</code> no terminal.

## Objetos globais

Recomendado ler a documentação do NodeJS sobre objetos globais antes de prosseguir. Para acessar, 
clique <a href="https://nodejs.org/dist/latest-v14.x/docs/api/globals.html">aqui</a>.

## NPM - Node Package Manager

### Iniciando um pacote com NPM

Para iniciar um pacote com NPM, você deverá ir ao terminal e digitar <code>npm init</code> ou <code>npm init -y</code>.
O primeiro irá lhe perguntar sobre questões como nome, versão, descrição do seu pacote, o segundo irá criar diretamente,
dando dados padrões aos elementos.

Input:
```
  npm init -y
```

Output:
```
  Wrote to C:\Users\package.json:

{
  "name": "NPM",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Packege.json

O package.json é uma espécie de manifesto do seu projeto, que pode fazer várias coisas, completamente não relacionadas. 
Ele é um repositório central de configurações de ferramentas, por exemplo. Ele também é onde o npm armazena os 
nomes e versões dos pacotes instalados, como podemos ver na saída de código acima.

### Instalando dependências

Para instalar alguma dependência com o NodeJS, você deverá usar o comando <code>npm install [dependência]</code>. E essas
dependências servem para aumentar as funcionalidades que o seu programa pode oferecer. Exemplo abaixo:

Input:
```
  npm install cfonts
```

Output:
```
npm notice created a lockfile as package-lock.json. You should commit this file.

+ cfonts@2.10.0
added 16 packages from 22 contributors and audited 16 packages in 3.709s

2 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities
```

Após isso, será criado um novo elemento chamado "dependencies" no arquivo package.json especificando as 
dependências instaladas.

### Dependências de desenvolvimento e atualização

Também é possível instalar dependências apenas para o desenvolvimento ou atualização do projeto, para isso, deve-se alterar
o comando de instalação adicionando um "-D" ao final. Exemplo abaixo:

Input:
```
  npm install cfonts -D
```

Output:
```
npm notice save cfonts is being moved from dependencies to devDependencies

+ cfonts@2.10.0
updated 1 package and audited 16 packages in 2.191s
found 0 vulnerabilities
```

Após isso, será criado um novo elemento chamado "devDependencies" no arquivo package.json especificando as 
dependências instaladas.

### O que é o diretório "node_modules"?

Quando você instala um pacote em um projeto do NodeJS pela primeira vez, o npm cria automaticamente a pasta "node_modules".
Ela é usada para armazenar os módulos necessários para o seu projeto e o arquivo package-lock.

### O que é o package-lock.json?

O "package-lock.json" é gerado automaticamente para qualquer operação em que o npm modifique a árvore "node_modules" ou 
o "package.json". Ele descreve a árvore exata que foi gerada, de forma que as instalações subsequentes possam gerar árvores
idênticas, independentemente das atualizações intermediárias de dependência.

### Criando e rodando scripts

Você deve ter reparado no "package.json", o elemento chamado "scripts". Por lá podemos chamar e rodar scripts desde que seja
especificado o diretório do script. Exemplo:

Alteração no "package.json":
```
"scripts": {
    "test": "node index.js"
},
```

Input:
```
npm run test
```

Output:
```
> NPM@1.0.0 test C:\Users\Pichau\Desktop\Estudos\Programação\Web front-end\NPM
> node index.js

Rodando script.
```

### Instalando dependências globais

Para fazer a instalação de dependências globais, deve-se adicionar um "-g" ao final do comando de instalação, como 
<code>npm install opn -g</code>. A dependência será instalada na máquina como um todo e é possível localizar essa 
dependência utilizando o comando <code>npm root -g</code>.

### Timers

Os timers servem como uma maneira de trabalharmos com o tempo dentro do NodeJS.

<ul>
  <li><code>setTimeout</code>: Faz com que rode uma função após X milissegundos. 
    Exemplo: <code>setTimeout(function, 3000)</code>.</li>
  
  <li><code>clearTimeout</code>: Faz com que cancele um <code>timeOut</code>. 
    Exemplo: <code>clearTimeout(setTimeout(function, 3000), 5000)</code>.</li>
  
  <li><code>setInterval</code>: Faz com que rode uma função N vezes depois de X milissegundos. 
    Exemplo: <code>setInterval(function, 3000)</code>.</li>
  
  <li><code>clearInterval</code>: Faz com que cancele o <code>setInterval</code> registrado.
    Exemplo: <code>clearInterval(setInterval(function, 3000), 6000)</code>.</li>
</ul>

#### Para mais informações sobre o NodeJS, acesse sua documentação clicando <a href="https://nodejs.org/dist/latest-v14.x/docs/api/">aqui</a>.





















