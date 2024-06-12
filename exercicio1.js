let notas = [8, 9, 10, 7, 8]

let escolha = "inicio"

function adicionarElementos(arr, nota, e){
    if(e == "inicio") {
        
        arr.unshift(nota)
        console.log (arr)
    } else{
        arr.push(nota)
        console.log (arr)
    }
} 

adicionarElementos(notas, 8, escolha)
adicionarElementos(notas, 6, "final")