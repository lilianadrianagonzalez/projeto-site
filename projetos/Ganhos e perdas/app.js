// perguntar as entradas
var income = prompt("Qual é o valor da entrada?");

//saidas
var costs = prompt("Qual é o valor da saida?");

// porcentagem dos impostos
var taxPercent = prompt("Qual é a porcetnagem dos impostos?");

//renda bruta
var grossProfit = income - costs;

// obtendo o valos dos impostos
var  tax = grossProfit*taxPercent/100

// renda liquida
var netIncome = grossProfit - tax;

// mostrar na pagina web
document.write("Sua renda liquida é de $" + netIncome);
