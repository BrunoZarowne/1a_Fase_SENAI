/* O acampamento base sul do Everest fica a cerca de 5.360m de altura. A partir dele, muitas expedições partem rumo ao
cume que fica a 8.848m de altura, levando dias para chegar. Considerando a saída do acampamento base, faça um programa
que pergunte ao usuário a altitude em metros escalada no dia. Caso seja atingida a marca de 8 dias e não tenha chegado
ao cume, mostrar mensagem “Você deve voltar, pois corre risco de ficar sem oxigênio”. Se chegar ao cume em menos de 8
dias, mostrar a quantidade de dias que foram necessários para tal. */

let baseSulEverest = 5360
let cumeEverest = 8848
let altitudeEmMetrosEscalados
let diasPraChegarNoCume = 0
let contador = 1

while(contador < 9){
    altitudeEmMetrosEscalados = Number(prompt('Me diga qual foi a altitude escalada no dia ' + contador))
    baseSulEverest = baseSulEverest + altitudeEmMetrosEscalados
    diasPraChegarNoCume++
    contador++
    if(baseSulEverest >= 8848 && diasPraChegarNoCume < 8){
        alert('Voce chegou ao cume em ' + diasPraChegarNoCume + ' dias')
    }else if(diasPraChegarNoCume >= 8){
        alert('Voce deve voltar, senão vai de dormes')
    }
}
