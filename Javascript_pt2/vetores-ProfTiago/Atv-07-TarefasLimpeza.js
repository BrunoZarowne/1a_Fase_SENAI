/* Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final. */

let tarefasLimpeza = []

let tarefaUm
let tarefaDois
let tarefaTres
let tarefaQuatro

tarefaUm = prompt('Me diga qual sera a primeira tarefa')
tarefaDois = prompt('Me diga qual sera a segunda tarefa')
tarefaTres = prompt('Me diga qual sera a terceira tarefa')
tarefaQuatro = prompt('Me diga qual sera a quarta tarefa')

tarefasLimpeza.push(tarefaUm)
tarefasLimpeza.push(tarefaDois)
tarefasLimpeza.push(tarefaTres)
tarefasLimpeza.push(tarefaQuatro)

tarefasLimpeza.splice(2, 1)
tarefasLimpeza[1] = ('Limpar banheiro')

alert(tarefasLimpeza)