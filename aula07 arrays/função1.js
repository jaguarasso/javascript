function parimpar(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}
/*
let res = parimpar(4)
console.log(res)*/

console.log(parimpar(522))

console.log('------_________________-------')

function soma(n1, n2){
    return n1 + n2
}

console.log(soma(2,5))

console.log('------_________________-------')

function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2))