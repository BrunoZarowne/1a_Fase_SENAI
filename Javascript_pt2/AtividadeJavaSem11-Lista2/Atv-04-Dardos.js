/* Em uma competição de dardos, os competidores se classificam para a próxima fase caso consigam 75% ou mais da pontuação total,
que é 60 pontos. Caso consiga 50% ou mais, porém abaixo de 75%, vai para a repescagem. Menos que isso, é eliminado. Cada arremesso
pode marcar de 0 a 10 pontos, dependendo da precisão. Criar um programa para armazenar a pontuação dos 6 arremessos de um competidor
e ao final mostrar uma mensagem com sua pontuação, seu desempenho (percentual) e se ele está classificado, se foi para a repescagem
ou se está desclassificado. */

let somaPontos = 0
let pontucaoDosArremesos
let percentualDosPontos
let calculoPontuacaoFinal
let contador = 0

alert('Olá e bem vindo a competição de dardos!')

while(contador < 6){
    pontucaoDosArremesos = Number(prompt('Poderia me dizer qnts pontos fez nessa rodada?(0 a 10)'))

    somaPontos = somaPontos + pontucaoDosArremesos
    contador++
}
if(somaPontos >= 45){
    alert('Voce está classificado para a proxima fase!')
}else if(somaPontos < 45 && somaPontos >= 30){
    alert('Voce vai para repescagem')
}else if(somaPontos < 30){
    alert('Infelizmente voce foi eliminado tenta denovo no ano que vem')
}