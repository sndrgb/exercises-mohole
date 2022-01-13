/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)
*/

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function reverse(array) {
  let temporary = [];

  for (var i = 0; i < arrayLength; i++) {
    temporary.push(array.pop());
  }

  return temporary
}

const arrayLength = Number(window.prompt("Type the lenght of array", ""));
const array = new Array(arrayLength).fill().map(v => randomNumber(1,10))

console.log(array)
console.log(array.reverse())
console.log(reverse(array))