let varRad1 = document.getElementById('rad1')
let varRad2 = document.getElementById('rad2')

let varCheck1 = document.getElementById('check1')

function avançarPagina(){
    if(varRad1.checked && varCheck1.checked){
        window.location.href = "Login.html"
    }else if(varRad2.checked && varCheck1.checked){
        window.location.href = "Login.html"
    }else{
        alert('Voce não aceitou os termos de uso')
    }

}
function logar(){
    window.location.href = "Login.html"
}