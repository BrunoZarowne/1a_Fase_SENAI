//Fazer um programa onde o usuário pode acessar as seguintes opções:

//A) Falar com a atendente    B) Falar com o RH
//C) Falar com o gerente       D) Sair

let escolhaUsusario

escolhaUsusario = prompt('Escolha qual opção voce quer acessar? (A, B, C, D)').toUpperCase()

switch(escolhaUsusario){

    case 'A':
    alert('Falar com a diretoria')
        break

    case 'B':
        alert('Falar com o RH')
        break

    case 'C':
        alert('Falar com o gerente')
        break

    case 'D':
        alert('Sair')
        break

    default:
        alert('Nenhuma das opçoes mostrados foi escolhida')
}