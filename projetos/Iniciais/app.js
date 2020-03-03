// perguntar o nome e sobrenome
var name = prompt("Qual é seu nome e sobrenome?");

//pegar as iniciais

// pegar a primeira letra do primeiro sobrenome
var firstInitial = name.slice(0,1);

// pegar a posicao da primeira letra do sobrenome
var secondInitialPosition = name.indexOf(" ") + 1;

// pegar primeira letra do segundo nome
var secondInitial = name.slice(secondInitialPosition, secondInitialPosition + 1);

document.write("Suas iniciais sao: "+ firstInitial.toUpperCase() + secondInitial.toUpperCase());
