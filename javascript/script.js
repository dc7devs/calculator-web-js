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

function insert(num, elemento){
   // Condicionamento para a inserção
   operator = ['÷', '×', '+', '-']

   // string.slice() pega valores da direito pra esquerda se vc usar valores negativos. 
   // string.slice(string.length - 4) é a mesma coisa que string.slice(-4) e fica bem mais curto.
   // const ultimoValor = input.value.substring(input.value.length -1);
   const ultimoValor = input.value.slice(-1);
   if (input.value.length == 0 && operator.slice(0, 3).includes(num)) {
      num = '';
      console.log(elemento);
      console.log(elemento.getAttribute("disabled"));
      if (!elemento.hasAttribute('disabled')) {
         console.log('hello')
         elemento.toggleAttribute("disabled");
      }
      
   } 
   // dessa forma vc consegue usar todos os operadores sem fazer 4 ifs enormes e identicos e vc pode ignorar os outros de baixo
   else if(operator.includes(ultimoValor) && operator.includes(num)) {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>10 ${ultimoValor} 2</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);
   }

   /* 
   
   TODO ESSE CÓDIGO PODE SER APAGADO

   else if(input.value.substring(input.value.length -1) == '÷' && operator.includes(num)) {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>10 ÷ 2</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '×' && operator.includes(num)) {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>2 × 10</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '+' && operator.includes(num)) {
      showNote(`Operação podera vir a ser invalida por conter mais de um operador similar um após o outro. Tente Ex: <strong>10 + 10</strong>`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute("style", "animationName: animacao");
         alert.innerHTML = "";
      },10000);

   } else if (input.value.substring(input.value.length -1) == '÷' && operator.includes(num) || input.value.substring(input.value.length -1) == '×' && operator.includes(num)) {
      showNote(`Operação podera vir a ser invalida por conter operadores juntos um após outro. Tente Ex: <strong>2 × 20</strong> ou <strong>10 ÷ 2</strong>. Erro por <b>÷×<b> estarem juntos`);
      setTimeout(() => {
         alert.classList.remove('showAlert');
         alert.removeAttribute('style', 'animationName: animacao');
         alert.innerHTML = "";
      },10000);

   }*/ 
   
   //Tambem perceba que eu reutilizei varias vezes a constante "ultimoValor" sem precisar reescrever input.value.subst...
   else if (ultimoValor == '' && num == '.') {
      input.value += '0';
   }

   input.value += num;

   if(ultimoValor == '') {
      return 0;
   } else {
      inputArrayValue.push(ultimoValor)
      intermediateValue = inputArrayValue.join('');
      inputArrayValue.splice(0, input.value.length, intermediateValue);
   }
   
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

// calcular - calcula o resultado das operações em questão

function calcular() {
   let finalValue;
   if (intermediateValue == undefined) {
      showNote(`Error!`);

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