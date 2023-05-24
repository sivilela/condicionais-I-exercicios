/*# Exercício 2

Escreva uma função que receba três valores. 
Uma idade, um booleano que responde se a pessoa 
terminou ou não o ensino médio, e um booleano
que responda se a pessoa está cursando alguma faculdade.

Crie um `if` para cada variável, checando as 
seguintes afirmacões:
- Se a pessoa tem 18 anos ou mais;
- Se a pessoa terminou o ensino médio;
- Se a pessoa NÃO está cursando alguma faculdade;

Crie um `if` que imprima que a afirmacão é
verdadeira, e um `else` para imprimir que 
a afirmacão não é verdadeira.

<details>

<summary>Exemplo</summary>

Caso a primeira pessoa tenha idade >= 18:

<b>"A pessoa é maior de idade"</b>

e caso não seja:

<b>"A pessoa é menor de idade"</b>

</details>
*/

// const idade = Number(prompt("Informe sua idade: "))
// const ensinoMedio = prompt("Possui ensino médio? ")
// const faculdade = prompt("Está cursando faculdade? ")

const recebeValores = (idade, ensinoMedio, faculdade) => {
  if (idade >= 18){
      console.log("Maior de idade");
  }else{
      console.log("Menor de idade");
  } 
  if (ensinoMedio === true){
      console.log("Terminou ensino médio");
  } else {
      console.log("Não terminou ensino médio");
  } 
  if (faculdade === true){
      console.log("Não está cursando a faculdade");
  } else {
      console.log("Está cursando a faculdade");
  } 

}
recebeValores(15, true, true)
console.log("*************************");
recebeValores(30, true, false)
console.log("*************************");
recebeValores(43, false, true)
console.log("*************************");
recebeValores(100, false, false)