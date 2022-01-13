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

const numero = 89

for (let i = 1; i <= numero - 2; i += 2) {
  let string = ''
  let tabCounter = (numero - i) / 2

  for (let k = tabCounter; k >= 0; k--) {
    string += ' '
  }

  for (let k = 1; k <= i; k++) {
    string += 'X'
  }

  console.log(string)
}

for (let i = numero; i >= 1; i -= 2) {
  let string = ''
  let tabCounter = (numero - i) / 2

  for (let k = tabCounter; k >= 0; k--) {
    string += ' '
  }

  for (let k = i; k >= 1; k--) {
    string += 'X'
  }

  console.log(string)
}


