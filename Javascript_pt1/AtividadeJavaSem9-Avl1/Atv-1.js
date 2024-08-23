//>>>>>>>>>>>>>>>>>>> Atividade 1 (3,0) <<<<<<<<<<<<<<<<<<<

//O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema utilizando
//estrutura condicional IF/ELSE IF/ELSE, que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas.
//Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer
//a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

//Vaga para Equipe de Resgate -> O candidato deve ter de 18 a 60 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
//Vaga para Equipe de Tratamento -> O candidato deve ter de 23 a 65 anos, possuir formação em "Veterinária" e residir em Florianópolis.


//Critérios de avaliação:

//(1,0) Receber e armazenar os dados do candidato.
//(1,5) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer.
//(0,5) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer".

let nomeUsuario, idadeUsuario
let formaçãoUsuario, cidadeUsuario
let vagaEquipeResgate = false, vagaEquipeTratamento = false


nomeUsuario = prompt('Qual seu nome? ')
idadeUsuario = Number(prompt('Qual sua idade?'))
formaçãoUsuario = prompt('Qual sua formação?').toLowerCase()
cidadeUsuario = prompt('De qual cidade voce veio? ').toLowerCase()

if(idadeUsuario >= 18 && idadeUsuario <= 60 && formaçãoUsuario == 'biologia' && cidadeUsuario == 'florianopolis' || idadeUsuario >= 18 && idadeUsuario <= 60 && formaçãoUsuario == 'ecologia' && cidadeUsuario == 'florianopolis' ){
    vagaEquipeResgate = true
}
if(idadeUsuario >= 23 && idadeUsuario <= 65 && formaçãoUsuario == 'veterinaria' && cidadeUsuario == 'florianopolis'){
    vagaEquipeTratamento = true
}
if(vagaEquipeResgate == true){
    alert(nomeUsuario + ' voce está apto a vaga de resgate')
}else if(vagaEquipeResgate == false){
    alert(nomeUsuario + ' infelizmente voce n está apto a vaga de resgate')
}
if(vagaEquipeTratamento == true){
    alert(nomeUsuario + ' voce está apto a vaga de tratamento')
}else if(vagaEquipeTratamento == false){
    alert(nomeUsuario + ' infelizmente voce n está apto a vaga de tratamento')
}

