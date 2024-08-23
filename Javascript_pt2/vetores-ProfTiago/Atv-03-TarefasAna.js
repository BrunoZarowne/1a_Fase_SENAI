/* Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final. */

let tarefasDiarias = []

let tarefaUm
let tarefaDois
let tarefaTres

tarefaUm = prompt('Coloque a primeira tarefa')
tarefaDois = prompt('Coloque a segunda tarefa')
tarefaTres = prompt('Coloque a terceira tarefa')

tarefasDiarias.unshift(tarefaUm)
tarefasDiarias.unshift(tarefaDois)
tarefasDiarias.unshift(tarefaTres)

if(tarefasDiarias[2] != 'ligar para o médico'){
    tarefasDiarias.splice(1, 1,)
    tarefasDiarias.push('ligar para o médico')
}

alert(tarefasDiarias)