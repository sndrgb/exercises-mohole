const old = console.log;
const log = document.querySelector('#logger')
const methods = ['log','debug','info','warn','error']

let counter = 0

methods.forEach(verb => {
  console[verb] = ((method, verb, log) => {
    return function () {
      method.apply(console, arguments);
        counter++

      let log = Array.prototype.slice.call(arguments).reduce((oldVal, val) => {
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
    };
  })(console[verb], verb, log);
});