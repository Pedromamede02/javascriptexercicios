/**
Ps: regra de precendencia dica: "(num1 + num2 * num3)" = vai começao pela * se quiser começar pela adiçao usar ()

Ordem de precedencia 
()                        primeiro o JavaScript le isso na conta
**                        segundo o JavaScript le isso na conta
* & / & %                 terceiro o JavaScript le isso na conta
+ & -                     quarto o JavaScript le isso na conta

--------------------------- ------ Aritméticos----------------
  + Adição & Concatenação
  - Subtração 
  * Multiplicação
  ** Potenciação
  / Divisão
  % Resto da divisão
 */

//---------------------------- Adiçao & Concatenação exemplo + -----------------

const num1 = 10;
const num2 = 5;

// console.log(num1 + num2); //resultado 15

const num3 = '5';
const num4 = 10; 

//console.log(num3 + num4);  //resultado 510

// ---------------------------------------- Subtração '-' --------------------------

const num5 = 10;
const num6 = 8; 

// console.log(num5 - num6); //resultado 2

// ---------------------------------------- Multiplicação e Potenciaçao * & ** --------------------------


const num7 = 3;
const num8 = 5;

// console.log(num7 * num8); //resultado 15

const num9 = 2;
const num10 = 3;

 // console.log(num9 ** num10); //resultado 8

 // ------------------------------------------- Divisão e Resto da Divisão= / & % --------------------------


const num11 = 10;
const num12 = 5;

// console.log(num11 / num12); //resultado 2


const num13 = 10;
const num14 = 3;

 console.log(num13 % num14); //resultado 1
