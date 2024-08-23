//Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade.
//A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final. O usuário deve
//digitar as três notas e os seus respectivos pesos. A média deve ser calculada e mostrada na tela.

let valorNotaUm, valorNotaDois, valorNotaTres
let pesoNotaUm, pesoNotaDois, pesoNotaTres
let calculoValorPesoNotaUm, calculoValorPesoNotaDois, calculoValorPesoNotaTres 
let mediaDasNotas, valorPraUsarNaDivisaoDaMedia

alert('Para saber a sua media final me fale a nota e o peso de cada uma em sequencia.')
valorNotaUm = Number(prompt('Qual foi sua nota da Atividade Individual? '))
pesoNotaUm = Number(prompt('\nQual foi o peso dessa nota? '))

valorNotaDois = Number(prompt('Qual foi sua nota do Seminário em Equipe? '))
pesoNotaDois = Number(prompt('\nQual foi o peso dessa nota? '))

valorNotaTres = Number(prompt('Qual foi sua nota do Projeto Final? '))
pesoNotaTres = Number(prompt('\nQual foi o peso dessa nota? '))

calculoValorPesoNotaUm = valorNotaUm * pesoNotaUm
calculoValorPesoNotaDois = valorNotaDois * pesoNotaDois
calculoValorPesoNotaTres = valorNotaTres * pesoNotaTres
valorPraUsarNaMedia = pesoNotaUm + pesoNotaDois + pesoNotaTres
mediaDasNotas = (calculoValorPesoNotaUm + calculoValorPesoNotaDois + calculoValorPesoNotaTres) / valorPraUsarNaDivisaoDaMedia

alert('Sua média final é de: ' + mediaDasNotas)