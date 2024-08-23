// parte do modal //
let buttonLogin=document.getElementById('button_open_modal_login')
let modalLogin=document.getElementById('modal_login')
let fechaModalLogin=document.getElementById('fechaModal')

function abrirModalLogin()
{
modalLogin.showModal()

}
function fechamodalLogin(){

modalLogin.close()

}

let buttonOpenModal=document.getElementById('button_open_modal')
let modalCadastro=document.getElementById('modal_Cadastro')
let fechaModalCadastro=document.getElementById('fechaModalCadastro')

function abrirModalCadastro()
{
    modalCadastro.showModal()

}
function fechamodalCadastrO(){

modalCadastro.close()

}
// parte do modal //

//variaveis pro login//
let objEmailLogin = document.getElementById('loginEmail')
let objSenhaLogin = document.getElementById('loginSenha')

let posicaoUsuario

let usuarioLogado
//variaveis pro login//


//variaveis pro cadastro//
let objNomeCadastro = document.getElementById('nomeCadastro')
let objSenhaCadastro = document.getElementById('senhaCadastro')
let objEmailCadastro = document.getElementById('emailCadastro')
let objNascimentoCadastro = document.getElementById('dataNascimentoUsuario')
//variaveis pro cadastro//

let vetorUsernames = []
let vetorSenhas = []
let vetorEmail = []
let vetorDataNascimento = []

//Função Cadastrar
function cadastrar(){

    vetorUsernames = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
    vetorSenhas = JSON.parse(localStorage.getItem('Senhas-Salvas'))
    vetorEmail = JSON.parse(localStorage.getItem('Emails-Salvos'))
    vetorDataNascimento = JSON.parse(localStorage.getItem('Datas-Salvas'))
    
    if(vetorUsernames == null){
    
        vetorUsernames = []
        vetorSenhas = []
        vetorEmail = []
        vetorDataNascimento = []
    
        confirmarCadastro()
    
    }else{
    
    confirmarCadastro()
    
    }
    function confirmarCadastro(){

    vetorUsernames.push(objNomeCadastro.value)
    vetorSenhas.push(objSenhaCadastro.value)
    vetorEmail.push(objEmailCadastro.value)
    vetorDataNascimento.push(objNascimentoCadastro.value)
    
    localStorage.setItem('Usuarios-Salvos', JSON.stringify(vetorUsernames))
    localStorage.setItem('Senhas-Salvas', JSON.stringify(vetorSenhas))
    localStorage.setItem('Emails-Salvos', JSON.stringify(vetorEmail))
    localStorage.setItem('Datas-Salvas', JSON.stringify(vetorDataNascimento))
    
    alert('Cadastro bem sucedido!')
    }
    }



function logar(){
    //Função login
    vetorUsernames = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
    vetorSenhas = JSON.parse(localStorage.getItem('Senhas-Salvas'))
    vetorEmail = JSON.parse(localStorage.getItem('Emails-Salvos'))
    vetorDataNascimento = JSON.parse(localStorage.getItem('Datas-Salvas'))
        
    posicaoUsuario = vetorEmail.indexOf(objEmailLogin.value)
        
    if(posicaoUsuario == -1){
        
        alert('Usuário inexistente')
        
    }else if(objEmailLogin.value == vetorEmail[posicaoUsuario] && objSenhaLogin.value == vetorSenhas[posicaoUsuario]){
        
        alert('Login bem sucedido')
        window.location.href = 'tela-usuario.html'
        usuarioLogado = vetorEmail[posicaoUsuario]
        localStorage.setItem('posicaoUsuario', JSON.stringify(posicaoUsuario))
        
     }else{
        alert('Usuário ou senha estão incorretos')
    }
    }
        
    function acessarPagina(){
        vetorUsernames = JSON.parse(localStorage.getItem('Usuarios-Salvos'))
    elementoLabelTelaPerfil.innerHTML = 'oi ' + (vetorNomeUsuario) + ' voce é demais'
    }
    
    /*function acessarPagina(){
        vetorNomeUsuario = JSON.parse(localStorage.getItem('UsuariosSalvos'))
        elementoLabelTelaPerfil.innerHTML = 'oi ' + (vetorNomeUsuario) + ' voce é demais'
    }*/
    