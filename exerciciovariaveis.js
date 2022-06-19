 /* let varA = 'a';
 let varB = 'b';
 let varC = 'c';

varA = varB; 
varB = varC;



console.log(varA);
console.log(varB);
varA = 'a';
varC = varA;
console.log(varC);

*/

/* poderiamos resolver criando outra variavel com o valor de A, ou da maneira abaixo */


let varA = 'A';
let varB = 'B';
let varC = 'C';

[varA, varB, varC] =[varB, varC, varA];

console.log(varA, varB, varC);