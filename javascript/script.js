let input = document.querySelector("#displayValue")
let alert = document.querySelector("#alert")

let inputArrayValue = [];
let intermediantValue

showMessage(`Opa, bora calcular!`);

function insert(num) {
   // Condicionamento para a inserção
   let lastValue = input.value.slice(-1);
   operator = ['÷', '×', '+', '-']

   if (input.value.length == 0 && operator.slice(0, 3).includes(num)) {
       return;

   } else if (input.value.length == 1 && lastValue == '0' && num == '0') {
      return;

   } else if (operator.includes(lastValue) && operator.includes(num)) {
      if(input.value.length > 1)
         input.value = input.value.replace(/.$/, num);
      return;
         
   } else if (input.value.length == 0 && num == '.') {
      input.value += "0";
   } else if (lastValue != '' && num == '.') {
      for (let i=0; i<input.value.length; i++) {
         if(input.value[i] == '.') {
            return;
         }
      }
   } else if (num == '(' || num == ')' || num == '%') { // por enquanto
      showMessage('<strong style="color: #0f0">Operação em desenvolvimento...<strong>');
      return;
   } 

   input.value += num;

   // section.push(input.value.slice(-1))
   // intermediantValue = section.join('');
   // section.splice(0, section.length, Number(intermediantValue));

   inputArrayValue.push(input.value.slice(-1))
   intermediantValue = inputArrayValue.join('');
   inputArrayValue.splice(0, input.value.length, intermediantValue);
}

window.addEventListener('keydown', e => {
   // console.log(e.key)
   // console.log(e.keyCode)

   if(e.keyCode == 96 || e.keyCode == 97 || e.keyCode == 98 || e.keyCode == 99 || e.keyCode == 100 || e.keyCode == 101 || e.keyCode == 102 || e.keyCode == 103 || e.keyCode == 104 || e.keyCode == 105 || e.keyCode == 110) {
      if(e.keyCode == 96) {

         if (input.value.length == 1 && input.value.slice(-1) == '0') return;
      }

      if (e.keyCode == 110 && input.value.length == 0) {
         input.value += '0';
      } else if (e.keyCode == 110 && input.value.slice(-1) != '') {
         for (let i=0; i<input.value.length; i++) {
            if(input.value[i] == '.') {
               return;
            }
         }
      }
      
      input.value += e.key;
   }

   if(e.keyCode == 107) input.value += '+';
   if(e.keyCode == 109) input.value += '-';
   if(e.keyCode == 106) input.value += '×';
   if(e.keyCode == 111) input.value += '÷';

   if(e.keyCode == 46) clean();
   if(e.keyCode == 8) back();
   if(e.keyCode == 13) calculate();
   
   intermediantValue = input.value.join('');
})

// Clear - Limpa o display
function clean() {
   intermediantValue = undefined;
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
}

// exibir o resultado no display
function calculate() {
   let finalValue;
   if (intermediantValue == undefined) {
      showMessage(`<strong style="color: #a2f52a">Insira uma operação valida!!</strong>`);
      return;

   } else if(intermediantValue.includes('÷')){
      
      finalValue = intermediantValue.replace('÷', '/');

   } else if (intermediantValue.includes('×')){
      finalValue = intermediantValue.replace('×', '*');

   } else {
      finalValue = intermediantValue;
   }
   
   input.value = eval(finalValue);

   inputArrayValue.splice(0, input.value.length);
   inputArrayValue.splice(0, finalValue);

   if(intermediantValue.length >= 1 && inputArrayValue.length == 0){
      inputArrayValue.push(input.value.substring(finalValue));
   }
}


// Função mostra uma notificação quando a operação for invalida
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

} // showMessage(html)

/**  ## Implementations
 * [] Previzualização do resultado no <p class="clac-preview">
 * [] debug KeyboardEvent
 */
