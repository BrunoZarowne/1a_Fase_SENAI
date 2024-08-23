let varNomeUsusario = document.getElementById('nomeUsuario')
let varSenhaUsusario = document.getElementById('senhaUsuario')

let nomeAdmin = 'admin'
let senhaAdmin = '123'



function logar(){
    if(varNomeUsusario.value == nomeAdmin && varSenhaUsusario.value == senhaAdmin){
    alert('aaaa')
    }else{
        alert('Sua senha ou nome estão incorretas')
    }
}
function voltar(){
    window.location.href = "cadastro.html"
}
