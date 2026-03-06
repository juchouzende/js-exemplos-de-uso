// Seleciona o elemento do botão no DOM usando o ID "myButton" e armazena na variável 'button'
const button = document.querySelector("#botao");

// 3ª Digitação

// Seleciona o elemento de parágrafo no DOM usando o ID "myText" e armazena na variável 'text'
const text = document.querySelector("#texto");

// Adiciona um "ouvinte" de evento ao botão. Quando o botão for clicado, a função dentro do 'addEventListener' será executada
button.addEventListener("click", function () {

  // Altera o texto do parágrafo
  text.textContent = "Olá, Mundo!";

});
