/*
 temos como escrever um numero em string e pedir para o motor do javascript fazer a conversao

*/

const num1 = 10;
const num2 = Number('5');  //conver de string para numero 

console.log(num1 + num2);

const num3 = 10;
const num4 = parseFloat('5.6'); //conver de string para numero com virgula

console.log(num3 + num4);

const num5 = 10;
const num6 = parseInt('5');  //conver de string para numero inteiro 

console.log(num5 + num6);

// Ps: para sabermos se um numero é string, number e boleano....

const valor1 = 'ola';
const valor2 = 12;
const valor3 = true; 
const valor4 = null; // isso é um bug

console.log(typeof valor1);
console.log(typeof valor2);
console.log(typeof valor3);
console.log(typeof valor4);