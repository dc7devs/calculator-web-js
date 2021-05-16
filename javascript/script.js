let input = document.querySelector("#displayValue")
let alert = document.querySelector("#alert")

let inputArrayValue = [];
let intermediateValue;

showNote(`Opa, bora calcular!`);

setTimeout(() => {
      alert.classList.remove("showAlert");
      alert.removeAttribute("style", "animationName: animacao");
      alert.innerHTML = "";
}, 3000)

function insert(num){
   // Condicionamento para a inserção
   operator = ['÷', '×', '+', '-']
   let lastValue = input.value.slice(-1);

   if (input.value.length == 0 && operator.slice(0, 3).includes(num)) {
      return;

   } else if (operator.includes(lastValue) && operator.includes(num)) {
      return;
         
   } else if (lastValue == '' && num == '.') {
      input.value += "0";
   }

   input.value += num;

   inputArrayValue.push(input.value.slice(-1))
   intermediateValue = inputArrayValue.join('');
   inputArrayValue.splice(0, input.value.length, intermediateValue);
   
   console.log(inputArrayValue);
}

// Clear - Limpa o display
function clean() {
   intermediateValue = undefined;
   inputArrayValue.splice(0, input.value.length);
   if (input.value != "") {
      input.value = "";
   }
   console.log(inputArrayValue);
}

// back - deleta o ultimo caracater inserido
function back() {
   let resultado = input.value;
   input.value = resultado.substring(0, resultado.length -1);

   inputArrayValue.splice(0, 1, inputArrayValue[0].substring(0, resultado.length -1));

   console.log(inputArrayValue);
}

// calculate - calcula o resultado das operações em questão
function calculate() {
   let finalValue;
   if (intermediateValue == undefined) {
      showNote(`<strong style="color: #a2f52a">Insira uma operação valida!!</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      }, 3000)
      return 0;

   } else if(intermediateValue.includes('÷')){
      
      finalValue = intermediateValue.replace('÷', '/');

   } else if (intermediateValue.includes('×')){
      finalValue = intermediateValue.replace('×', '*');

   } else {
      finalValue = intermediateValue;
   }

   if(finalValue) {
      input.value = eval(finalValue);
   }

   inputArrayValue.splice(0, input.value.length);
   inputArrayValue.splice(0, finalValue);

   if(intermediateValue.length >= 1 && inputArrayValue.length == 0){
      inputArrayValue.push(input.value.substring(finalValue));
   }

   console.log(inputArrayValue);
}


// Função mostra uma notificação quando a operação for invalida
function showNote(message) {
   if(alert.classList.contains('showAlert') == false){
      alert.classList.add('showAlert');
   }

   alert.style.animationName = "animacao";
   alert.innerHTML = message;
}

/**  ## Implementations
 * [] Previzualização do resultado no <p class="clac-preview">
 * [] Interação da aplicação utilizando o teclado atraves dos keyCodes
 */
