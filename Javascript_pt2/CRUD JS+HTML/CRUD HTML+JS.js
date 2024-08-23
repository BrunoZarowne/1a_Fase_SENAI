let elementoInptNomeUsuario = document.getElementById('inptNomeUsuario')
let elementolabelLista = document.getElementById('labelLista')
let vetorUsuarios = []
let editaUser
let posicaoUser

function Cadastrar(){
    vetorUsuarios.push(elementoInptNomeUsuario.value)
    alert('Usuário cadastrado! :D')
    elementoInptNomeUsuario.value = ''
    Listar()
}

function Editar(){
    editaUser = prompt('Qual o novo nome do usuário?')
    posicaoUser = vetorUsuarios.indexOf(elementoInptNomeUsuario.value)
    vetorUsuarios[posicaoUser] = editaUser
    alert('Dados editaods')
    Listar()
}

function Excluir(){
    posicaoUser = vetorUsuarios.indexOf(elementoInptNomeUsuario.value)

    if(posicaoUser == -1){

        alert('Usuário inexistente')

    }else if(posicaoUser != -1){
        vetorUsuarios.splice(posicaoUser, 1)
        alert('Usuario excluido')
        elementoInptNomeUsuario.value = ''
        Listar()
    }

    
}

function Listar(){
    elementolabelLista.innerHTML = vetorUsuarios
}
