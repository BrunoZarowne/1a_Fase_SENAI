//Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza.
//Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas). Fazer então o cálculo
//da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.

let velocidadeMediaNaTrilha
let distanciaPercorrida, tempoQueATrilhaDurou

alert('Durante a trilha que voce fez qual a média de tem que vc teve? pra isso poderia me falar qual foi o tempo e a distancia percorrida? (tempo em hora e distancia em quilometros')
distanciaPercorrida = Number(prompt('Qual foi a distancia percorrida? '))
tempoQueATrilhaDurou = Number(prompt('Quanto tempo a trilha durou? '))

velocidadeMediaNaTrilha = distanciaPercorrida / tempoQueATrilhaDurou

alert('A sua velocidade média na trilha foi de: ' + velocidadeMediaNaTrilha + 'Km/h')