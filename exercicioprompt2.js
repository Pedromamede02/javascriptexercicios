const nome = prompt('Digite seu nome completo:');

document.body.innerHTML += `O seu nome é: <strong> ${nome} </strong> </br>`;

document.body.innerHTML += `Seu nome tem: <strong> ${nome.length} </strong> letras </br>`;

document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nome[1]} </strong> </br>`;

document.body.innerHTML += `Qual o primriro indice da letra a no seu nome?: <strong> ${nome.indexOf('a')} </strong> </br>`;

document.body.innerHTML += `Qual é o ultimo indice da letra a no seu nome?: <strong> ${nome.lastIndexOf('a')} </strong> </br>`;

document.body.innerHTML += `As ultimas 3 letras do seu nome sao: <strong> ${nome.slice(-3, nome.length)} </strong> </br>`;

document.body.innerHTML += `As palavras do seu nome sao: <strong> ${nome.split(' ')} </strong> </br>`;

document.body.innerHTML += `Seu nome com letras maiusculas: <strong> ${nome.toUpperCase()} </strong> </br>`;

document.body.innerHTML += `Seu nome com letras minusculas: <strong> ${nome.toLowerCase()} </strong> </br>`;