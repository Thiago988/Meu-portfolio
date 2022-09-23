let numero1 = 30;
let numero2 = 60;

if (numero1 > numero2) {
    console.log('numero1 é o maior')
} else if (numero1 < numero2) {
    console.log('numero2 é o maior')
} 

let numero3 = 20;
let numero4 = 40;
let numero5 = 60;

if (numero3 > numero4 && numero3 > numero5 ) {
    console.log('numero3 é o maior')
} else if (numero4 > numero3 && numero4 > numero5) {
console.log('numero4 é o maior')
} else if (numero5 > numero3 && numero5 > numero4){
    console.log('numero5 é o maior')
}

let valor1 = true
let valor2 = false

if (valor1 === true) {
    console.log('valor positivo')
} else if (valor2 === false) {
    console.log('valor negativo')
} else {
    console.log('valor = 0')
}
