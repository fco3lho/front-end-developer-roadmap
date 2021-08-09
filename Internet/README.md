# O que é HTTP?

HTTP é um acrônimo para HyperText Transfer Protocol, ou seja, é um Protocolo de Transferência de HiperTexto. <br><br>
Isso quer dizer que o HTTP permite a troca de informações e dados na internet, que funciona como se fossem troca de mensagens 
entre duas pessoas, onde o usuário faz um pedido e recebe uma resposta, e na resposta vão ser encontrados elementos como HTML, 
CSS, scripts, imagens, vídeos etc, lembrando que é feito uma chamada para cada um desses recursos no pedido feito pelo usuário.

## Como ocorre a troca de informações e dados?

O usuário faz um <b>pedido</b> pela internet usando o <i>Browser</i> e o <i>Servidor</i> <b>responde</b> esse pedido, fazendo uma
ligação (<i>Browser → Servidor</i>) e (<i>Servidor → Browser</i>). <br>

### Como ocorre esse pedido?

<ol>
  <li><b>Métodos:</b> É a definição do tipo do pedido, onde é decidido qual ação será feita no servidor. Essas ações se dividem em 
  GET (Pegar um recurso) ou POST (Criar um recurso). O recurso nada mais é do que local onde o usuário irá enviar o pedido ou onde 
  usará uma URL para acessar o recurso.</li>
  
  <li><b>Headers.</b> </li>
  
  <li><b>Body.</b> </li>
</ol>

### Como ocorre essa resposta?

<ol>
  <li><b>Status code:</b> É a resposta do servidor sobre o estado do pedido/resposta. <br>
  Exemplo: 200 (OK), 301 (Moved Permanently),
  404 (Not Found), 500 (Internal Server Error).</li>
  
  <li><b>Headers.</b> </li>
  
  <li><b>Body.</b> </li>
</ol>

### E o que são <i>Headers</i> e <i>Body</i>?

<ul>
  <li><b>Headers:</b> São campos informativos, que são feitos do tipo <b>Propriedade: Valor</b>. <br>
  Exemplo: <i>Content-Type: application/json, User-Agent: Chrome, Request URL: www.google.com</i>.</li>
  
  <li><b>Body:</b> É um tipo de conteúdo, tanto para envio quanto para recebimento, como <i>HTML</i> e <i>JSON</i>.</li>
</ul>

#### Exemplo de uma mensagem de requisição:

    GET /index.html HTTP/1.1
    User-Agent: Mozilla/4.0
    Accept: text/html

#### Exemplo de uma mensagem de resposta:

    HTTP/1.1 200 OK
    Server: Express
    Content-Type: text/html
    
    <html>...</html>

## Exemplo de caminhamento de pedido/resposta

No terminal foi digitado o seguinte comando: ```curl -v https://google.com```. Esse comando nos dará todo o percurso feito 
desde o início do pedido até o final da resposta ao acessar o site do Google.

<b>Output</b>:   

    * Rebuilt URL to: https://google.com/
    *   Trying 216.58.202.14...
    * TCP_NODELAY set
    * Connected to google.com (216.58.202.14) port 443 (#0)
    * schannel: SSL/TLS connection with google.com port 443 (step 1/3)
    * schannel: checking server certificate revocation
    * schannel: sending initial handshake data: sending 181 bytes...
    * schannel: sent initial handshake data: sent 181 bytes
    * schannel: SSL/TLS connection with google.com port 443 (step 2/3)
    * schannel: failed to receive handshake, need more data
    * schannel: SSL/TLS connection with google.com port 443 (step 2/3)
    * schannel: encrypted data got 4096
    * schannel: encrypted data buffer: offset 4096 length 4096
    * schannel: encrypted data length: 4028
    * schannel: encrypted data buffer: offset 4028 length 4096
    * schannel: received incomplete message, need more data
    * schannel: SSL/TLS connection with google.com port 443 (step 2/3)
    * schannel: encrypted data got 679
    * schannel: encrypted data buffer: offset 4707 length 5052
    * schannel: sending next handshake data: sending 93 bytes...
    * schannel: SSL/TLS connection with google.com port 443 (step 2/3)
    * schannel: encrypted data got 292
    * schannel: encrypted data buffer: offset 292 length 5052
    * schannel: SSL/TLS handshake complete
    * schannel: SSL/TLS connection with google.com port 443 (step 3/3)
    * schannel: stored credential handle in session cache
    > GET / HTTP/1.1
    > Host: google.com
    > User-Agent: curl/7.55.1
    > Accept: */*
    >
    * schannel: client wants to read 102400 bytes
    * schannel: encdata_buffer resized 103424
    * schannel: encrypted data buffer: offset 0 length 103424
    * schannel: encrypted data got 759
    * schannel: encrypted data buffer: offset 759 length 103424
    * schannel: decrypted data length: 730
    * schannel: decrypted data added: 730
    * schannel: decrypted data cached: offset 730 length 102400
    * schannel: encrypted data buffer: offset 0 length 103424
    * schannel: decrypted data buffer: offset 730 length 102400
    * schannel: schannel_recv cleanup
    * schannel: decrypted data returned 730
    * schannel: decrypted data buffer: offset 0 length 102400
    < HTTP/1.1 301 Moved Permanently
    < Location: https://www.google.com/
    < Content-Type: text/html; charset=UTF-8
    < Date: Sat, 17 Jul 2021 01:22:36 GMT
    < Expires: Mon, 16 Aug 2021 01:22:36 GMT
    < Cache-Control: public, max-age=2592000
    < Server: gws
    < Content-Length: 220
    < X-XSS-Protection: 0
    < X-Frame-Options: SAMEORIGIN
    < Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; 
    ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"
    <
    <HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
    <TITLE>301 Moved</TITLE></HEAD><BODY>
    <H1>301 Moved</H1>
    The document has moved
    <A HREF="https://www.google.com/">here</A>.
    </BODY></HTML>
    * Connection #0 to host google.com left intact
    
#### Observação: O sinal '>' significa que está sendo feito um pedido/requisição e o sinal '<' significa que foi dada uma resposta.

# Conceito do HTTP

HTTP foi feito para ser simples e legível de forma que por mais leiga que a pessoa seja sobre o assunto, possa entender como o mesmo
funciona.<br>

Um exemplo básico de como o HTTP funciona é você se imaginar em um bar, onde você faz um pedido de uma cerveja ao garçom
e o garçom lhe dá uma resposta, levando a cerveja até você.<br>

### Stateless

O HTTP ser stateless, significa que o mesmo não guarda informações e não se relaciona entre conexões, ou seja, isso quer 
dizer que em cada conexão Usuário/Servidor de diferentes URLs, nenhum desses pedidos/respostas se relacionam, fazendo com 
que sejam independentes.<br>

Mas existem as <b>sessões</b> que contradizem um pouco o parágrafo acima. E o que são essas sessões? As sessões são as 
conexões feitas com <i>usuário</i> e <i>senha</i> em determinados sites e que, ao completar o login, podem aparecer para o 
usuário janelas perguntando a ele se deseja salvar as informações de <i>usuário</i> e <i>senha</i>.<br>

Essas informações são feitas por meio de <i>Cookies</i>, que são rastros de informações deixadas pelo usuário, ou 
<i>Storages</i>, que são alguns outros tipos de armazenamento.

### Extensível

O HTTP é extensível, ou seja, através do cabeçalho pode-se fazer diversas trocas de informações entre cliente-servidor, 
conforme a necessidade.

## Quem é o cliente?

O cliente é o <i>User Agent</i>, que é a entidade que dá início a comunicação.<br>

O cliente pode fazer um pedido que as ações desse pedido possam variar entre <i>GET, POST, PUT</i> e <i>DELETE</i>.

## Quem é o servidor?

O servidor se apresenta como uma máquina preparada para ouvir e processar, onde ele dará uma resposta ao cliente com
um <i>Status Code</i>.

## Proxies

Proxies são representantes, ou seja, um elemento que fica entre o cliente e o servidor e que ajudam a fazer o transporte
dos dados. Um exemplo de proxy é o roteador.

Os proxies possuem diversas funções, como:
<ul>
  <li><b>Cache:</b> Serve para devolver ao usuário/cliente alguma resposta de forma mais rápida.</li>
  <li><b>Filtro:</b> Serve para filtrar/bloquear algum ou alguns sites que o usuário/cliente não deseja entrar
  devido a algum vírus ou controle parental.</li>
  <li><b>Load balancing:</b> Serve para distribuir a carga de uma resposta para retornar ao usuário/cliente de forma
  mais rápida.</li>
  <li><b>Autenticação e autorização:</b> Serve para tornar a conexão Cliente-Servidor mais segura.</li>
</ul>

# O que é URI?

URI significa <i>Uniform Resource Identifier</i>, traduzindo, significa que é um Identificador de Recurso Uniforme.<br>

O URI será usado para identificar um recurso, seja pelo nome ou pela localização. Um exemplo disso é pensando que você é
um recurso, e para achá-lo, deve-se saber o seu nome e sua localização.

## Resource

O resource ou recurso é o alvo do pedido HTTP, ou seja, é o link que o usuário deseja acessar. Esse recurso pode ser qualquer
coisa identificável ou uma entidade, que pode variar entre digital, abstrata e física. Lembrando que se o usuário pode identificar, nomear, endereçar ou manipular, estaremos falando de um recurso.

## Locator / URL

No locator ou localizador é utilizado a URL, que significa <i>Uniform Resource Locator</i>, que traduzindo significa Localizador
de Recurso Uniforme, que é um localizador pelo endereço de um recurso.<br>

Uma URL é formada por componentes obrigatórios:
<ul>
  <li><b>Protocolo:</b> "https"</li> 
  <li><b>Domínio:</b> "google.com"</li>
  <li><b>Protocolo e domínio:</b> "https://google.com"</li>
</ul>

e por componentes opcionais:
<ul>
  <li><b>Subdomínio:</b> É o que vem antes do domínio, como "www".</li>
  <li><b>Patch:</b> É o que vem depois do domínio, como "/home".</li>
  <li><b>Parâmetros:</b> Aparece após o domínio também, como "/watch?v=2k3j546b".</li>
  <li><b>Porta:</b> "dominio.com:'3333'".</li>
  <li><b>Âncora:</b> "127.0.0.1/'index.html'".</li>
</ul>

## Name / URN

No name ou nome é utilizado a URN, que significa <i>Uniform Resource Name</i>, que traduzindo significa Nome de Recurso
Uniforme.<br>

Na URN não se sabe o local do recurso, mas se sabe o nome do recurso para ser buscado na internet. Exemplo:
"urn:usbn:0123456789".

# Mensagens HTTP

As mensagens HTTP ocorrem na comunicação entre cliente e servidor para que haja a transferência do recurso requerido 
de forma clara.

### HTTP/1.1

É uma versão do HTTP que foi priorizada para ser mais legível e textual.

### HTTP/2

É uma versão melhorada da versão 1.1, priorizando a estrutura binária e otimizações gerais.

## Request

O request/pedido é composto pelo método, versão de protocolo e URI.

<b>Exemplo de <i>request</i> da página do google:</b>

```
> GET / HTTP/1.1
> Host: www.google.com
> User-Agent: curl/7.55.1
> Accept: */*
```

## Response

A response/resposta é composta pela versão do protocolo, status code, headers e status message.

<b>Exemplo de <i>response</i> da página do google:</b>

```
HTTP/1.1 200 OK
Date: Wed, 21 Jul 2021 13:24:50 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN
Set-Cookie: 1P_JAR=2021-07-21-13; expires=Fri, 20-Aug-2021 13:24:50 GMT; path=/; domain=.google.com; Secure
Set-Cookie: NID=219=IwG4GtPSdIBie5jyT_Pki-_vT_dMp8qfCiGlQIeYppUXzbeCvtMYR3TSeIgpaQVQIftoMmPhG6ieRiz5kyUpo9q
zK78M-Imkz7yBg3RjURPEA49bJFLmtoyfVlos2DfCN490zE67-zklg_iCgQcBBxL2GvrwuKO8VcAHbdFK5Cc; expires=Thu,
20-Jan-2022 13:24:50 GMT; path=/; domain=.google.com; HttpOnly
Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; 
ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"
Accept-Ranges: none
Vary: Accept-Encoding
Transfer-Encoding: chunked

<html></html>
```

# Métodos

Métodos HTTP ou verbos HTTP é a indicação de alguma ação ou funcionalidade que o cliente deseja operar. Os mesmos são divididos em: <i>OPTIONS, GET, HEAD, POST, PUT, PATCH e DELETE</i>.

Sobre as características dos métodos, é bom lembrar que nem todos são seguros ou idempotentes. O que isso significa?

Se for seguro, quer dizer que o método não altera o estado do servidor, ou seja, ele executa somente leitura. Os métodos considerados seguros são: <i>GET, HEAD e OPTIONS</i>.

Se for idempotente, quer dizer que ao executar o método, a resposta deverá ser sempre a mesma. Os métodos considerados idempotentes são: <i>PUT, DELETE</i> e todos os seguros.

### Funcionalidades dos métodos:

<ul>
  <li><b>OPTIONS:</b> Retorna os métodos permitidos de acesso.</li>
  <li><b>GET:</b> Serve para pegar um recurso.</li>
  <li><b>HEAD:</b> Parecido com o <b>GET</b>, mas tem a função de pegar apenas o cabeçalho.</li>
  <li><b>POST:</b> Serve para publicar ou cadastrar um recurso.</li>
  <li><b>PUT:</b> Serve para criar ou atualizar completamente um recurso.</li>
  <li><b>PATCH:</b> Serve para modificar um recurso parcialmente.</li>
  <li><b>DELETE:</b> Serve para remover um recurso.</li>
</ul>

# Headers

Headers, traduzindo literalmente, significa cabeçalhos. Os headers são informações adicionais para o pedido (<i>request</i>) ou resposta (<i>response</i>), sendo normalmente construído da forma <i>Nome: valor</i>.

#### Exemplo:
```
Request URL: https://google.com/
Request Method: GET
Status Code: 301
Remote Address: 123.123.123.123:987
Referrer Policy: strict-origin-when-cross-origin
```
# Status Code

A função do status code é fazer uma comunicação mais clara entre servidor e cliente.

### Lista de status code mais comuns:

<ul>
  <li><b>100:</b> Continue</li>
  <li><b>200:</b> OK</li>
  <li><b>201:</b> Created</li>
  <li><b>204:</b> No Content</li>
  <li><b>301:</b> Moved Permanently</li>
  <li><b>308:</b> Permanent Redirect</li>
  <li><b>302:</b> Found</li>
  <li><b>307:</b> Temporary Redirect</li>
  <li><b>400:</b> Bad Request</li>
  <li><b>401:</b> Unauthorized</li>
  <li><b>403:</b> Forbidden</li>
  <li><b>404:</b> Not Found</li>
  <li><b>405:</b> Method Not Allowed</li>
  <li><b>429:</b> Too Many Requests</li>
  <li><b>500:</b> Internal Server Error</li>
  <li><b>503:</b> Service Unavailable</li>
<ul>










