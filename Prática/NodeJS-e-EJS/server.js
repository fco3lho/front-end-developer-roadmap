const express = require('express');
const app = express();

app.set("view engine", "ejs");

// Criando rota para home
app.get("/", function (req, res){
  const items = [
    {
      title: "D",
      message: "esenvolver de forma fácil"
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML"
    },
    {
      title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: "aaah tô com depressão"
    },
    {
      title: "I",
      message: "nstalar EJS"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ];

  const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando Javascript"

  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
})

// Criando rota para 'sobre'
app.get("/sobre", function (req, res){
  res.render("pages/about");
})

//Carregamento de tudo do express e execução da porta 8080
app.listen(8080);
console.log("Funcionando...")