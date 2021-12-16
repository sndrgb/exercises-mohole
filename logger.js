const old = console.log;
const logger = document.querySelector('#logger');
let counter = 0

console.log = (...args) => {
  counter++

  let log = args.reduce((oldVal, val) => {
    let newValue = val

    if (typeof newValue === 'object') {
      newValue = JSON.stringify(newValue);
    }

    return `${oldVal} ${newValue}`;

  })

  const row = document.createElement('pre');
  const text = document.createTextNode(`(${counter}): ${log}`);
  row.appendChild(text);
  logger.appendChild(row);

  old(...args);
}