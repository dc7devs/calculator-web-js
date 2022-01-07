let input = document.querySelector("#displayValue")
let alert = document.querySelector("#alert")

let intermediantValue;

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
}

window.addEventListener('keydown', e => {
   showMessage('<strong style="color: #0f0">Operação em desenvolvimento...<strong>');
   
   if(e.key == 0 || e.key == 1 || e.key == 2 || e.key == 3 || e.key == 4 || e.key == 5 || e.key == 6 || e.key == 7 || e.key== 8 || e.key == 9) {
      if(e.key == 0) {

         if (input.value.length == 1 && input.value.slice(-1) == '0') return;
      }

      if (e.key == ',' && input.value.length == undefined) {
         console.log('teste')
         input.value += '0';
      } else if (e.key == ',' && input.value.slice(-1) != '') {
         for (let i=0; i<input.value.length; i++) {
            if(input.value[i] == '.') {
               return;
            }
         }
      }

      input.value += e.key;
   }

   if(e.key == '+') input.value += '+';
   if(e.key == '-') input.value += '-';
   if(e.key == '*') input.value += '×';
   if(e.key == '/') input.value += '÷';
         
   if(e.key == 'Delete') clean();
   if(e.key == 'Backspace') back();
   if(e.key == 'Enter') calculate();
})

// Clear - Limpa o display

function clean() {
   if (input.value != "") {
      input.value = "";
   }
}

// back - deleta o ultimo caracater inserido
function back() {
   let resultado = input.value;
   input.value = resultado.substring(0, resultado.length -1);
}

// exibir o resultado no display
function calculate() {
   intermediantValue = String(input.value);
   let finalValue;

   if (intermediantValue == '') {
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
