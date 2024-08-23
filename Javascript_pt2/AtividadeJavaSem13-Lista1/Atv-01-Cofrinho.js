/* Elaborar um sistema similar a um cofre "porquinho". O cofre aceita moedas de 1 centavo, 5 centavos, 10 centavos, 25 centavos e 50 centavos.
O programa deve iniciar perguntando qual moeda deseja inserir no cofre e repetir o processo até que o usuário digite 0 (condição para encerrar).
Após encerrar, deve-se mostrar a quantidade de cada tipo de moeda que foi inserida naquele dia e o total acumulado de economia. */

let moedaEscolhidaPraColocar

let qntdMoedasUmCentavos = 0
let valorTotalMoedasUmCentavos = 0

let qntdMoedasCincoCentavos = 0
let valorTotalMoedasCincoCentavos = 0

let qntdMoedasDezCentavos = 0
let valorTotalMoedasDezCentavos = 0

let qntdMoedasVinteCincoCentavos = 0
let valorTotalMoedasVinteCincoCentavos = 0

let qntdMoedasCinquentaCentavos = 0
let valorTotalMoedasCinquentaCentavos = 0

while(moedaEscolhidaPraColocar != 0){
    moedaEscolhidaPraColocar = Number(prompt('Qual moeda voce deseja colocar no cofrinho?\n(1 centavo, 5 centavo, 10 centavo, 25 centavo, 50 centavo)'))
    switch(moedaEscolhidaPraColocar){
        case 1:
            qntdMoedasUmCentavos = qntdMoedasUmCentavos + 1
            valorTotalMoedasUmCentavos = valorTotalMoedasUmCentavos + 0.01
        break

        case 5:
            qntdMoedasCincoCentavos = qntdMoedasCincoCentavos + 1
            valorTotalMoedasCincoCentavos = valorTotalMoedasCincoCentavos + 0.05
        break

        case 10:
            qntdMoedasDezCentavos = qntdMoedasDezCentavos + 1
            valorTotalMoedasDezCentavos = valorTotalMoedasDezCentavos + 0.10
        break

        case 25:
            qntdMoedasVinteCincoCentavos = qntdMoedasVinteCincoCentavos + 1
            valorTotalMoedasVinteCincoCentavos = valorTotalMoedasVinteCincoCentavos + 0.25
        break

        case 50:
            qntdMoedasCinquentaCentavos = qntdMoedasCinquentaCentavos + 1
            valorTotalMoedasCinquentaCentavos = valorTotalMoedasCinquentaCentavos + 0.50
        break

    }
}


alert('O total de moedas de 1 centavo é de: ' + qntdMoedasUmCentavos + '\nCom um valor acumulado de: ' + valorTotalMoedasUmCentavos.toFixed(2) + 
'\n\nO total de moedas de 5 centavo é de: ' + qntdMoedasCincoCentavos + '\nCom um valor acumulado de: ' + valorTotalMoedasCincoCentavos.toFixed(2) +
'\n\nO total de moedas de 10 centavo é de: ' + qntdMoedasDezCentavos + '\nCom um valor acumulado de: ' + valorTotalMoedasDezCentavos.toFixed(2) +
'\n\nO total de moedas de 25 centavo é de: ' + qntdMoedasVinteCincoCentavos + '\nCom um valor acumulado de: ' + valorTotalMoedasVinteCincoCentavos.toFixed(2) +
'\n\nO total de moedas de 50 centavo é de: ' + qntdMoedasCinquentaCentavos + '\nCom um valor acumulado de: ' + valorTotalMoedasCinquentaCentavos.toFixed(2))
