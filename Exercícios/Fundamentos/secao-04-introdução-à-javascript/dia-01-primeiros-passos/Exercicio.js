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

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}

const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}