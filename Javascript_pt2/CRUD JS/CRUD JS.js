//CRUD simples feito com JS

let vetorUsuarios = []
let nomeDigitado
let opcaoSelecionada, excluirUsuario, edicaoUsuario, usuarioNovo
let posicaoUsuario

do{

    opcaoSelecionada = Number(prompt('>>MENU CRUD<<\n\n1) Cadastrar\n2) Editar\n3) Excluir\n4) Listar\n5) Sair\nEscolha uma opção'))

    switch(opcaoSelecionada){

        case 1:
            nomeDigitado = prompt('Digite seu nome de usuário')
            vetorUsuarios.push(nomeDigitado)
            alert('Usuário Cadastrado! :D')
            console.table(vetorUsuarios)
        break

        case 2:
            edicaoUsuario = prompt('Qual um nome de usuario para editar')
            posicaoUsuario = vetorUsuarios.indexOf(edicaoUsuario)
            usuarioNovo = prompt('Digite o novo nome de usuario: ')
            vetorUsuarios.splice(posicaoUsuario, 1, usuarioNovo)
            alert('Usuário editado com sucesso!')
            //vetorUsuarios[posicaoUsuario] = edicaoUsuario -> jeito mais rapido e facil
            console.table(vetorUsuarios)
        break

        case 3:
            excluirUsuario = prompt('Digite o usuario que será excluido: ')
            posicaoUsuario = vetorUsuarios.indexOf(excluirUsuario)
            vetorUsuarios.splice(posicaoUsuario, 1)
            alert('Usuário excluido :(')
            console.table(vetorUsuarios)
        break

        case 4:
            alert('>>Usuários Cadastrados<<\n\n' + vetorUsuarios)
        break

        case 5:
            alert('Bye bye!')
        break

        default:
            alert('Voce digitou algo diferente doq foi mostrado')
    }
}while(opcaoSelecionada != 5){
    
}

