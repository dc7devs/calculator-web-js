'use strict'

const display = document.getElementById('displayValue');
// const calcPreview = document.getElementById("calc-preview");

const numbers = document.querySelectorAll('[id*=key]');
const operators = document.querySelectorAll('[id*=Operator]');
const equal = document.getElementById('equal');
const cleanDisplay = document.getElementById('cleanDisplay');
const clearCalculation = document.getElementById('clearCalculation');
const backspace = document.getElementById('backspace');
const decimal = document.getElementById('decimal');

const alert = document.querySelector("#alert");
showMessage(`Ola, seja bem vindo!`);

let newValue = true;
let operator;
let previousNumber;

const beggingOperation = () => operator !== undefined;

const calculate = () => {
   if(beggingOperation()) {
      const currentNumber = parseFloat(display.value);

      newValue = true;
      // const resultado = eval(`${previousNumber}${operator}${currentNumber}`)
      // updateDisplay(resultado);

      if(operator == '+') {
         updateDisplay(previousNumber + currentNumber);
      }
      else if (operator == '-') {
         updateDisplay(previousNumber - currentNumber);
      }  else if (operator == '*') {
         updateDisplay(previousNumber * currentNumber);
      }  else if (operator == '/') {
         updateDisplay(previousNumber / currentNumber);
      } else if (operator == '%') {
         updateDisplay(previousNumber/100 * currentNumber);
      }
   }
}

const updateDisplay = (text) => {
   if(newValue) {
      display.value = text;
      newValue = false;
   } else {
      display.value += text;
   }
}

const insertNumber = (event) => updateDisplay(event.target.textContent);
numbers.forEach(number => number.addEventListener('click', insertNumber));

const selectOperator = (event) => {
   if(!newValue) {

      calculate();

      newValue = true;
      if (event.target.id == 'splitOperator') operator = '/';
      else if (event.target.id == 'multiplyOperator') operator = '*';
      else if (event.target.id == 'subtractOperator') operator = '-';
      else if (event.target.id == 'addOperator') operator = '+';
      else if (event.target.id == 'percentageOperator') operator = '%';

      previousNumber = parseFloat(display.value);
   }
}
operators.forEach(operator => operator.addEventListener('click', selectOperator));

const activateEqual = () => {
   calculate();

   operator = undefined;
}
equal.addEventListener('click', activateEqual)

const cleanDisplayFunction = () => display.value = '';
cleanDisplay.addEventListener('click', cleanDisplayFunction);

const clearCalculationFunction = () => {
   cleanDisplayFunction();
   operator = undefined;
   newValue = true;
   previousNumber = undefined;
}
clearCalculation.addEventListener('click', clearCalculationFunction);

const backspaceFunction = () => {
   display.value = display.value.slice(0, -1);
}
backspace.addEventListener('click', backspaceFunction);

const existentDecimal = () => display.value.indexOf('.') !== -1;
const existentValue = () => display.value.length > 0;

const decimalFunction = () => {
   if(!existentDecimal()) {
      if(existentValue()) {
         updateDisplay('.');
      } else {
         updateDisplay('0.');
      }
   }
}
decimal.addEventListener('click', decimalFunction);

const mapaTeclado = {
   '0'         : 'key0',
   '1'         : 'key1',
   '2'         : 'key2',
   '3'         : 'key3',
   '4'         : 'key4',
   '5'         : 'key5',
   '6'         : 'key6',
   '7'         : 'key7',
   '8'         : 'key8',
   '9'         : 'key9',
   '/'         : 'splitOperator',
   '*'         : 'multiplyOperator',
   '-'         : 'subtractOperator',
   '+'         : 'addOperator',
   '%'         : 'percentageOperator',
   '='         : 'equal',
   'Enter'     : 'equal',
   'Backspace' : 'backspace',
   'C'         : 'cleanDisplay',
   'c'         : 'cleanDisplay',
   'Escape'    : 'clearCalculation',
   '.'         : 'decimal'
}

const mapearTelcado = (event) => {
   const tecla = event.key;

   const allowedKey = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
   if(allowedKey()) document.getElementById(mapaTeclado[tecla]).click();
}
document.addEventListener('keydown', mapearTelcado);

function showMessage(message) {
   if(!alert.classList.contains('showAlert')){
      alert.classList.add('showAlert');
   }

   alert.style.animationName = "animacao";
   alert.innerHTML = message;

   setTimeout(() => {
      alert.classList.remove("showMessage");
      alert.removeAttribute("style", "animationName: animacao");
      alert.innerHTML = "";
   }, 3000);
}