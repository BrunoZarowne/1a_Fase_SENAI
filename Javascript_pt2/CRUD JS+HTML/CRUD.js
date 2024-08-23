let elementoInptLoginNomeUsuario = document.getElementById('inptLoginNomeUsuario')
let elementoinptLoginSenhaUsuario = document.getElementById('inptLoginSenhaUsuario')

let elementoinptNomeCadastroUsuario = document.getElementById('inptNomeCadastroUsuario')
let elementoinptSenhaCadastroUsuario = document.getElementById('inptSenhaCadastroUsuario')

let elementoLabelTelaPerfil = document.getElementById('textoLabel')

//armazenar a posicao do usuario no vetor
let posicaoUsuario

let usuarioLogado

let vetorNomeUsuario = []
let vetorSenhaUsuario = []

//Função Cadastrar
function Cadastrar(){

//Traz oq tem no locoal Storage e armazena
vetorNomeUsuario = JSON.parse(localStorage.getItem('UsuariosSalvos'))
vetorSenhaUsuario = JSON.parse(localStorage.getItem('SenhasSalvas'))

if(vetorNomeUsuario == null){

    vetorNomeUsuario = []
    vetorSenhaUsuario = []

    confirmarCadastro()

}else{

confirmarCadastro()

}
function confirmarCadastro(){
    //Joga os dados dos inputs pro vetores
vetorNomeUsuario.push(elementoinptNomeCadastroUsuario.value)
vetorSenhaUsuario.push(elementoinptSenhaCadastroUsuario.value)

//Salva os vetores no localStorage
localStorage.setItem('UsuariosSalvos', JSON.stringify(vetorNomeUsuario))
localStorage.setItem('SenhasSalvas', JSON.stringify(vetorSenhaUsuario))

//Avisa o usuário que deu certo
alert('Cadastro bem sucedido!')
}
}

function Logar(){
//Função login
    vetorNomeUsuario = JSON.parse(localStorage.getItem('UsuariosSalvos'))
    vetorSenhaUsuario = JSON.parse(localStorage.getItem('SenhasSalvas'))

    posicaoUsuario = vetorNomeUsuario.indexOf(elementoInptLoginNomeUsuario.value)

    if(posicaoUsuario == -1){

        alert('Usuário inexistente')

    }else if(elementoInptLoginNomeUsuario.value == vetorNomeUsuario[posicaoUsuario] && elementoinptLoginSenhaUsuario.value == vetorSenhaUsuario[posicaoUsuario]){

        alert('Login bem sucedido')
        window.location.href = 'CRUD PERFIL.html'
        usuarioLogado = vetorNomeUsuario[posicaoUsuario]
        localStorage.setItem('posicaoUsuario', JSON.stringify(posicaoUsuario))

        }else{
            alert('Usuário ou senha estão incorretos')
        }
    }

    