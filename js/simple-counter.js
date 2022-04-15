// Elements on the page
let counterOutput = document.getElementById('counter-output');
let btnDecrementCounter = document.getElementById('decrementCounter');
let btnIncrementCounter = document.getElementById('incrementCounter');
let btnResetCounter = document.getElementById('resetCounter');

let counter = 0;



function updateCounterOutput(counter) {
      counterOutput.innerHTML = counter;
}


function decrementCounter() {
      counter--;
      console.log(counter);
      updateCounterOutput(counter);
}


function incrementCounter() {
      counter++;
      console.log(counter);

      updateCounterOutput(counter);
}


function resetCounter() {
      counter = 0;
      console.log(counter);

      updateCounterOutput(counter);
}

btnDecrementCounter.addEventListener('click', decrementCounter);
btnIncrementCounter.addEventListener('click', incrementCounter);
btnResetCounter.addEventListener('click', resetCounter);