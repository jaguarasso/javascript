let vetores = [8,1,7,4,2,9]
//maneira tradicional
for(let pos=0; pos<vetores.length;pos++){
    console.log(`posição ${pos} tem o valor ${vetores[pos]}`)
}
//maneira nova e melhor aplicada com arrays
for(let pos in vetores){
    console.log(`${vetores[pos]}`)
}

let prox = vetores.indexOf(8)
console.log(`o numero 8 esta na posição ${prox}`)

let proxi = vetores.indexOf(33)
console.log(`o numero 33 esta na posicção ${proxi}`)// o terminal retornou -1 pois o java nao encontrou nenhum numero 33 no array