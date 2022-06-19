// Ps: muito ultilizado para criar laço de repetição mais conhecido como o While 
// Ps: Pode ser ultilizado com outros contadores artméticos como "contador--"
// Ps: a diferença do primeiro exemplo para o segundo é que no exemplo1 ele chama a variavel e depois adiciona o valor e no exemplo2 ele adiciona o valor e depois chama a variavel mais abaixo estarei mostrando a diferença

let contador = 1;
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
contador++; // 6

// console.log(contador);

let contador2 = 1;

// console.log(contador2++) // aqui o resultado é 1 pois primeiro é mostrado na tela a variavel e depois adicionado. isso significa que se executarmos novamente o console.log o resultado sera 2 

// console.log(contador2) //Resultado é 2 


// outra pratica para efetuar isso poderia ser +=

let contador3 = 2;
contador3 += 2;  // 4
contador3 += 2;  // 6
contador3 += 2;  //8
console.log(contador3);  //exibiu o valor