//Joãozinho mede 1,75m de altura e cresce 1cm por ano, enquanto seu amigo Pedrinho tem 1,60m de altura e cresce 3cm por ano.
//Faça um programa que calcule e mostre em quantos anos Pedrinho será mais alto que Joãozinho.

let alturaJoao = 1.75
let alturaPedro = 1.60
let contador = 0

while(alturaJoao > alturaPedro){
    alturaJoao = alturaJoao + 0.01
    alturaPedro = alturaPedro + 0.03
    contador++
}
alert('Pedro vai levar ' + contador + ' anos para alcançar joão')