//Um programa de recomendação de livros baseado nos interesses do usuário. O sistema deve solicitar ao usuário seus
//gêneros literários favoritos e, em seguida, sugerir uma lista de livros que podem ser do seu interesse

let primeiroGeneroEscolhido
let segundoGeneroEscolhido
let terceiroGeneroEscolhido

alert('Os generos de livros que temos para recomendar são: Romance, Ação, Drama ')

primeiroGeneroEscolhido = prompt('Qual o seu primeiro genero favorito? ')
segundoGeneroEscolhido = prompt('\nQual seu segundo genero favorito? ')
terceiroGeneroEscolhido = prompt('\nQual seu terceiro genero favorito? ')

if( primeiroGeneroEscolhido == 'Romance' && segundoGeneroEscolhido == 'Ação' && terceiroGeneroEscolhido == 'Drama'){
    alert('Os livros que temos para te recomendar são: ' + '\nÉ assim que acaba,' + 'Os Três Mosqueteiros' + ' e ' + 'O caçador de pipas')
}else if( primeiroGeneroEscolhido == 'Romance' && segundoGeneroEscolhido == 'Drama' && terceiroGeneroEscolhido == 'Ação'){
    alert('Os livros que temos para te recomendar são: ' + '\nÉ assim que acaba,' + 'O caçador de pipas' + ' e ' + 'Os Três Mosqueteiros')
}
if( primeiroGeneroEscolhido == 'Ação' && segundoGeneroEscolhido == 'Romance' && terceiroGeneroEscolhido == 'Drama'){
    alert('Os livros que temos para te recomendar são: ' + '\nOs Três Mosqueteiros,' + 'É assim que acaba' + ' e ' + 'O caçador de pipas')
}else if( primeiroGeneroEscolhido == 'Ação' && segundoGeneroEscolhido == 'Drama' && terceiroGeneroEscolhido == 'Romance'){
    alert('Os livros que temos para te recomendar são: ' + '\nOs Três Mosqueteiros,' + 'O caçador de pipas' + ' e ' + 'É assim que acaba')
}
if( primeiroGeneroEscolhido == 'Drama' && segundoGeneroEscolhido == 'Romance' && terceiroGeneroEscolhido == 'Ação'){
    alert('Os livros que temos para te recomendar são: ' + '\nO caçador de pipas,' + 'É assim que acaba' + ' e ' + 'Os Três Mosqueteiros')
}else if( primeiroGeneroEscolhido == 'Drama' && segundoGeneroEscolhido == 'Ação' && terceiroGeneroEscolhido == 'Romance'){
    alert('Os livros que temos para te recomendar são: ' + '\nO caçador de pipas,' + 'Os Três Mosqueteiros' + ' e ' + 'É assim que acaba')
}