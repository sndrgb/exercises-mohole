/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù - 0
    2. Torta della nonna - 1
    3. Cheesecake alla nutella - 2
    4. Macedonia - 3

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile
*/

// const menu = [
//   "Tiramisù",
//   "Torta della nonna",
//   "Cheesecake alla nutella",
//   "Macedonia"
// ]


// if (menu[index - 1]) {
  //   console.log(`Hai scelto il dolce ${menu[index - 1]}`)
  // } else {
    //   console.log(`Dolce non disponibile`)
    // }




const index = Number(window.prompt("Inserisci numero dolce"))

const menu = [
  {
    numero: 1,
    ricetta: "Sbatti le uova",
    nome: "Tiramisù",
  }, {
    numero: 2,
    ricetta: "Mangia le uova",
    nome: "Torta della nonna",
  }, {
    numero: 3,
    ricetta: "Mangia tutte le uova",
    nome: "Cheesecake alla nutella",
  }, {
    numero: 4,
    ricetta: "Non mangiare le uova",
    nome:"Macedonia"
  }
]

// const indiceLetteraE = ['a','b','c','d','c','c'].findIndex(function (lettera) {
//   return lettera === 'c'
// })

// console.log(indiceLetteraE)

const indiceElementoTrovato = menu.findIndex(function (piatto) {
  return piatto.numero === index
});

console.log(menu[indiceElementoTrovato].ricetta)

const elementoTrovato = menu.find(function (piatto) {
  return piatto.numero === index
});

console.log(elementoTrovato.ricetta)

// window.prompt("inserisci numero dolce")