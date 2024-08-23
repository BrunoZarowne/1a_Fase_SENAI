//Fazer um programa que simule uma fila de lotérica. Começa vazia, escolhe A) Entrou pessoa B) Saiu pessoa. Se a fila acumular 5 pessoas, finaliza. 

let filaLoterica = []
let escolhaUsuario
let contador = 0



while(contador < 5){
    escolhaUsuario = prompt('A) Entra pessoa B) Sai pessoa').toUpperCase()
    if(escolhaUsuario == 'A'){
        filaLoterica.push('Pessoa')
        contador++
    }else if(escolhaUsuario == 'B'){
        filaLoterica.pop()
        contador--
    }
}