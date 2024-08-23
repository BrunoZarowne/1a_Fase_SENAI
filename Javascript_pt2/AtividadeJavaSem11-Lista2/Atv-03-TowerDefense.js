/*Em um jogo de Tower Defense, o castelo (torre) tem um total de 500 de HP. Faça um programa no qual o usuário possa escolher entre 3 tipos de ataque e um de defesa: 

A) Ataque Bomba -100HP
B) Ataque Granada -80HP
C) Ataque Arqueiro -40HP
D) Defesa Escudo +20HP
*/

let vidaTorre = 500
let ataqueBomba = 100 // -100
let ataqueGranada = 80  // -80
let ataqueArqueiro = 40 // -40
let defesaEscudo = 20 // +20
let opcaoEscolhidaPeloUsuario
let rodadas = 0

while(vidaTorre > 0){
    opcaoEscolhidaPeloUsuario = prompt('Escolha uma dessas opções:\nA) Ataque Bomba -100HP\nB) Ataque Granada -80HP\nC) Ataque Arqueiro -40HP\nD) Defesa Escudo +20HP' + '\nVida da torre: ' + vidaTorre).toUpperCase()
    switch (opcaoEscolhidaPeloUsuario){
        case 'A':
            vidaTorre = vidaTorre - 100
            rodadas++
        break

        case 'B':
            vidaTorre = vidaTorre - 80
            rodadas++
        break

        case 'C':
            vidaTorre = vidaTorre - 40
            rodadas++
        break

        case 'D':
            vidaTorre = vidaTorre + 20
            rodadas++
        break

        default:
            alert('Não escolheu nenhuma das opções dadas')
        break
    }
    if(vidaTorre <= 0){
        alert('Jogo encerrado em ' + rodadas + ' turnos')
    }
}