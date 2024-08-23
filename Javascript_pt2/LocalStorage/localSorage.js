// let nomeSalvo
// let idadeSalva

// localStorage.setItem('nomePessoa', 'joao')
// nomeSalvo = localStorage.getItem('nomePessoa')
// idadeSalva = localStorage.getItem('idadePessoa')

// alert(nomeSalvo)
// alert(idadeSalva)

// exemplo com JSON

let vetorIdades = [12, 13, 14, 15]

//SEM JSON
localStorage.setItem('idadesSalvas', vetorIdades)
console.log(localStorage.getItem('idadesSalvas'))

//COM JSON
localStorage.setItem('idadesSalvas', JSON.stringify(vetorIdades))
console.log(JSON.parse(localStorage.getItem('idadesSalvas')))

let objUsers = {
    nome: 'Lucas',
    idade: 20
}
localStorage.setItem('objUserSalvac', JSON.stringify(objUsers))
console.log(JSON.parse(localStorage.getItem('objUserSalvac')))