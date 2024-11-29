const permissoes = 'admin' // 'aluno' || 'professor' || 'admin' 

switch (permissoes) {
  case 'aluno':
    console.log('Voce só pode visualizar as aulas')
    break
  case 'professor':
    console.log('Voce pode visualizar, editar e excluir as aulas')
    break
  case 'admin':
    console.log('Voce pode visualizar, editar, excluir e cadastrar as aulas')
    break
  default:
    console.log('Permissão inválida')
}