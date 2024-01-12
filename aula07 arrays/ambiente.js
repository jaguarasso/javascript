let num = [5,8,0,9,3]
//para adicionar um numero em uma posição especifica [4] que esta o numero 9 
num[3]=6
//para adicionar um numero na ultima posição do array
num.push(8)
console.log(`nosso vetor é o ${num}`)
console.log(`o vetor tem ${num.length} posições`)//ele marcou 6 posições pois na linha 5 nos adicionamos um numero no final do array
console.log(`o primeiro numero da array é ${num[0]}`)//mostrando o primeiro numero da array
num.sort()//para ordenar o vetor do menor para o maior
console.log(`esse e o vetor ordenado do menor para o maior ${num}`)
//OBS: como o dado da 4 posição do array que era o 9 e foi substituido por 6 com o comando num[3]=6 ele nao vai aparecer no console