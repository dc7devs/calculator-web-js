let input = document.querySelector("#displayValue");
let alert = document.querySelector("#alert");

let inputArrayValue = [];
let intermediateValue;

showNote(`Opa, bora calcular!`);

setTimeout(() => {
      alert.classList.remove("showAlert");
      alert.removeAttribute("style", "animationName: animacao");
      alert.innerHTML = "";
}, 3000)

function insert(num) {
   if(input.value.substring(input.value.length -1) == '÷' && num == '÷') {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>10 ÷ 2</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '×' && num == '×') {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>2 × 10</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '+' && num == '+' ) {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>10 + 10</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '÷' && num == '×' || input.value.substring(input.value.length -1) == '×' && num == '÷') {
      showNote(`Operação podera vir a ser invalida por conter operadores juntos um após outro. Tente Ex: <strong>2 × 20</strong> ou <strong>10 ÷ 2</strong>. Erro por <b>÷×<b> estarem juntos`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '' && num == '.') {
      input.value += '0'; // Debugger: Este valor não e atributo ao Array..

   }

   input.value += num;

   inputArrayValue.push(input.value.substring(input.value.length -1));
   intermediateValue = inputArrayValue.join('');
   inputArrayValue.splice(0, input.value.length, intermediateValue);

   console.log(inputArrayValue);

}

// Clear - Limpa o display
function clean() {
   inputArrayValue.splice(0, input.value.length);
   if (input.value != "") {
      input.value = "";
   }
}

// back - deleta o ultimo caracater inserido

function back() {
   let resultado = input.value;
   input.value = resultado.substring(0, resultado.length -1);

   inputArrayValue.splice(0, 1, inputArrayValue[0].substring(0, resultado.length -1));

   console.log(inputArrayValue);

}

// calcular - calcula o resultado das operações em questão

function calcular() {
   let finalValue;
   if(intermediateValue.includes('÷')){
      finalValue = intermediateValue.replace('÷', '/');

   } else if (intermediateValue.includes('×')){
      finalValue = intermediateValue.replace('×', '*');

   } else {
      finalValue = intermediateValue;
   }

   if(finalValue) {
      input.value = eval(finalValue);

   } else {
      input.value = "Invalid";
   }

   inputArrayValue.splice(0, input.value.length);
   inputArrayValue.splice(0, finalValue);

   if(intermediateValue.length >= 1 && inputArrayValue.length == 0){
      inputArrayValue.push(input.value.substring(finalValue));
   }

   console.log(inputArrayValue);
   // console.log(finalValue);
}

// Função que mostra uma notificação quando a operação for invalida
function showNote(message) {
   if(alert.classList.contains('showAlert') == false){
      alert.classList.add('showAlert');
   }

   alert.style.animationName = "animacao";
   alert.innerHTML = message;
}
// ## IDEIAS

/**
 * [] Previzualização do resultado
 * [] Interação da aplicação utilizando o teclado atraves dos keyCodes
 * [] Debugger parentase 
 */