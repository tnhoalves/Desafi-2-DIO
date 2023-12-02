let classe= resultado ("taxa de vitoria","taxa de derrotas")
let winrate = classe
 console.log("Seu win rate é de: " + classe)

function resultado(vitorias,derrotas){
   let soma = vitorias - derrotas
   return soma

}


function ranqueada(){
    let resultadoRank = winrate
    let elo = ""
    
 if (resultadoRank <= 10){
    elo= "Ferro"
 } else if (resultadoRank <= 20){
    elo= "bronze"
 } else if(resultadoRank <= 50){
    elo= "Prata"
 } else if(resultadoRank <= 80){
    elo="Ouro"
 } else if(resultadoRank <= 90){
    elo="Diamante"
 } else if(resultadoRank <= 100){
    elo=" Lendário"
 } else if(resultadoRank >= 101){
    elo="Imortal"
 }
 
 return "O Herói tem de winrate de:" + resultadoRank + ". Por isso está no nível de " + elo

}

console.log(ranqueada())