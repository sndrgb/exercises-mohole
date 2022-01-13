/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:            X
            X         XXX         X
                                XXX
           XXX       XXXXX      X
          XXXXX     XXXXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
*/


function primaParte(n) {
  for (let i = 1; i <= numero - 2; i += 2) {
    let string = ''
    for (let z = 1; z <= n; z++) {
      let tabCounter = (numero - i) / 2

      for (let k = tabCounter; k >= 0; k--) {
        string += '-'
      }

      for (let k = 1; k <= i; k++) {
        string += 'X'
      }

      for (let k = tabCounter; k >= 0; k--) {
        string += '-'
      }

    }
    console.log(string)
  }
}

function secondaParte(n) {
  for (let i = numero; i >= 1; i -= 2) {
    let string = ''

    for (let z = 1; z <= n; z++) {
      let tabCounter = (numero - i) / 2

      for (let k = tabCounter; k >= 0; k--) {
        string += '-'
      }

      for (let k = i; k >= 1; k--) {
        string += 'X'
      }

      for (let k = tabCounter; k >= 0; k--) {
        string += '-'
      }
    }
    console.log(string)
  }
}

function generaRombo(x, y) {
  for (let riga = 0; riga < x; riga++) {
    primaParte(y)
    secondaParte(y)
  }
}

const numero = 23
generaRombo(10, 5)



