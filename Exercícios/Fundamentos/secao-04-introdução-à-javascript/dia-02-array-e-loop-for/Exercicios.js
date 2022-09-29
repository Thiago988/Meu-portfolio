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
