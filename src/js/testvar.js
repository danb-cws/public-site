import '../sass/greeting.scss';

const name = 'Michael';

function sayName() {
  return (`Yo, my name is: ${name}`);
}

export function printName() {
  const greetspot = document.getElementById('greeting');
  greetspot.innerHTML = sayName();
}

export default function () {
  console.log('I am the default module export from testvar.js');
}

