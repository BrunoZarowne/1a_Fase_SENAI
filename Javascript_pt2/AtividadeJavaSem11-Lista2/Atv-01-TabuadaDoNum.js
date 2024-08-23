//Faça um programa que leia um valor inteiro e mostre na tela a tabuada de 1 a 10 do valor lido.

let NumeroDigitado
let contador = 1
let Resultado

NumeroDigitado = Number(prompt('Qual o numero que seja ver a tabuada?'))

while(contador < 11){
    Resultado = NumeroDigitado * contador

    
    alert(NumeroDigitado + 'x' + contador + '\nResultado: ' + Resultado)
    contador ++
}