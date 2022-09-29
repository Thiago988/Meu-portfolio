let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers2.length; index += 1) {
  result += numbers2[index];
}

console.log(result);


let numbers3 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers3.length; index += 1) {
  sum += numbers3[index];
}

let average = sum / numbers3.length;

console.log(average);

let numbers4 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result2 = 0;

for (let index = 0; index < numbers4.length; index += 1) {
  result2 += numbers4[index];
}

result2 = result2 / numbers4.length;

if (result2 > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
