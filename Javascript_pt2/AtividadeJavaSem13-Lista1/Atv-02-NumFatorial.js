/* Fazer um programa que calcule o fatorial de um número. Fatorial é a multiplicação do próprio número por todos abaixo dele até 1.
(Exemplo do fatorial de 5 seria: 5x4x3x2x1 = 120. Fatorial de 5 é 120). */

var fatorial

fatorial = Number(prompt('Digite um numero'))

var resultado = fatorial
for (var i = 1; i < fatorial; i++) {
    resultado *= i
}
alert('O resultado é: ' + resultado)


