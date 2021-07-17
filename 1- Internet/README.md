# O que é HTTP?

HTTP é um acrônimo para HyperText Transfer Protocol, ou seja, é um protocolo de transferência de HyperTexto. <br><br>
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

HTTP foi feito para ser simples e legível de forma que a pessoa mais leiga sobre o assunto pudesse entender como o mesmo
funciona.<br>

Um exemplo básico de como o HTTP funciona é você se imaginar em um bar, onde você faz um pedido de uma cerveja ao garçom
e o garçom lhe dá uma resposta, levando a cerveja até você.<br>

### Stateless

O HTTP ser stateless, significa que o mesmo não guarda informações e não se relaciona entre conexões, ou seja, isso quer 
dizer que em cada coneção Usuário/Servidor de diferentes URLs, nenhum desses pedidos/respostas se relacionam, fazendo com 
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











