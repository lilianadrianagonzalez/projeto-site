//pedir o nome com prompt
let name = prompt("Qual seu nome?");
//devolver uma saudação com o nome da pessoa
let uper = name.charAt().toUpperCase();
let rest=  name.slice(1);
let askName = alert("Bem vinda ao jogo do milhão " + uper+rest + "!");
//perguntar se a pessoa quer jogar
let askGame = confirm(uper+rest + " Gostaria de jogar?");
//criar uma condição de sim ou não
let ask1 = "c"
let ask2 = "a"
let ask3 = "b"

if (askGame==true)
{ask1 = prompt("1-Quantos dias tem um ano bisexto?\nA.364\nB.365\nC.366\nQual a letra da alternativa correta?")
ask2 = prompt("Quantos meses tem um ano?\nA.12 meses\nB.10 meses\nC.9 meses\nQual a letra da alternativa correta?")
ask3 = prompt("Quantos dias tem uma semana?\nA.6 dias\nB.7 dias\nC.4 dias\nQual a letra da alternativa correta?") }
//reposta poitiva fazer a 1º pergunta com o prompt e com alternativas
//após a 1º resposta devlver uma 2º pergunta
//após a 2º resposta devolver uma 3º peguntar.
//após a 3º resposta mostrar o resultado
//respota negativa devolver uma mensagem de cancelamento.
else {alert("Até logo!")};
let answer1 = "c"
let answer2 = "a"
let answer3 = "b"

if (ask1==answer1) {document.write("Resposta Correta\n")}
else {document.write("Resposta Errada")}

if (ask2==answer2) {document.write(" Resposta Correta\n")}
else {document.write("Resposta Errada")}

if (ask3==answer3) {document.write("Resposta Correta")}
else {document.write("Resposta Errada")}





//tela de resultados com resposta corretas e repostas incorretas através de 2 tabelas lado a lado
//style
//respota negativa devolver uma mensagem de cancelamento.
//fazer uma valor respotas 1,2,3 e comparar com asks e cria a condiação se true ir para seção x se false ir para seção true
