/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

*/

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let array = new Array(100).fill(0).map(() => randomNumber(1,50));

const generateRecursive = () => {
  const userNumber = Number(window.prompt("Type a number", ""));
  array = array.map(a => a % userNumber === 0 ? 0 : a);

  console.log(array.some(a => a), array)

  if (array.some(a => a)) {
    setTimeout(generateRecursive, 0);
  }
}

generateRecursive()