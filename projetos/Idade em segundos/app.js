var age = parseInt (prompt("Qual é sua idade?"))

// converter a idade em segundos
var ageInSeconds = age*365*24*60*60 // ano, 24 horas do dia, 60 min 60 segundos

console.log(ageInSeconds);

// mostrar o resultado na pagina web por meio do document.write()
document.write("Em seus "+ age +" anos de idade, se passaram "+ ageInSeconds + " segundos")
