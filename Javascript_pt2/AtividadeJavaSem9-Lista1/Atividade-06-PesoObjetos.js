//Criar um programa que recebe o peso (kg) de um objeto no planeta Terra. Em seguida, apresentar a lista abaixo e pedir ao usuário para digitar o
//número desejado para escolher outros lugares do sistema solar. Ao final mostrar, o peso desse objeto no lugar selecionado. Lista de locais
//(lua e planetas) e gravidades relativas à Terra:

//1 - 0,06 Plutão
//2 - 0,17 Lua
//3 - 0,38 Mercúrio
//4 - 0,38 Marte
//5 - 0,91 Vênus
//6 - 0,92 Urano
//7 - 1,06 Saturno
//8 - 1,19 Netuno
//9 - 2,34 Júpiter

let nomeObjeto, pesoObjeto, pesoObjetoFinal
let escolhaUsuario

nomeObjeto = prompt('Qual o objeto que vc quer ver o peso em outro planeta?')
pesoObjeto = Number(prompt('Qual o peso desse objeto? '))
escolhaUsuario = Number(prompt('Me diga de qual vai querer ver o peso pro objeto?\nLmebrando que temos:\n1 - 0,06 Plutão\n2 - 0,17 Lua\n3 - 0,38 Mercúrio\n4 - 0,38 Marte\n5 - 0,91 Vênus\n6 - 0,92 Urano\n7 - 1,06 Saturno\n8 - 1,19 Netuno\n9 - 2,34 Júpiter'))

switch(escolhaUsuario){

    case 1:
        pesoObjetoFinal = pesoObjeto * 0.06
        alert('O peso do(a) ' + nomeObjeto + ' em Plutão será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 2:
        pesoObjetoFinal = pesoObjeto * 0.17
        alert('O peso do(a) ' + nomeObjeto + ' na Lua será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 3:
        pesoObjetoFinal = pesoObjeto * 0.38
        alert('O peso do(a) ' + nomeObjeto + ' em Mercúrio será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 4:
        pesoObjetoFinal = pesoObjeto * 0.38
        alert('O peso do(a) ' + nomeObjeto + ' em Marte será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 5:
        pesoObjetoFinal = pesoObjeto * 0.91
        alert('O peso do(a) ' + nomeObjeto + ' em Vênus será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 6:
        pesoObjetoFinal = pesoObjeto * 0.92
        alert('O peso do(a) ' + nomeObjeto + ' em Urano será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 7:
        pesoObjetoFinal = pesoObjeto * 1.06
        alert('O peso do(a) ' + nomeObjeto + ' em Saturno será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 8:
        pesoObjetoFinal = pesoObjeto * 1.19
        alert('O peso do(a) ' + nomeObjeto + ' em Netuno será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    case 9:
        pesoObjetoFinal = pesoObjeto * 2.34
        alert('O peso do(a) ' + nomeObjeto + ' em Júpiter será de: ' + pesoObjetoFinal.toFixed(2) + 'Kgs')
        break

    default:
        alert('Nenhuma das opçoes mostradas')



}

