const old = console.log;
const logger = document.querySelector('#logger');
let counter = 0

console.log = (message) => {
  counter++
  let log = message

  if (typeof message === 'object') {
    console.log(log)
    log = JSON.stringify(message);
  }


  const row = document.createElement('pre');
  const text = document.createTextNode(`(${counter}): ${log}`);
  row.appendChild(text);
  logger.appendChild(row);

  old(message);
}