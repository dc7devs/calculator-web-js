let input = document.querySelector("#displayValue");
let inputArrayValue = [];
let intermediateValue;

function insert(num) {
   if(input.value.substring(input.value.length -1) == '÷' && num == '÷' || input.value.substring(input.value.length -1) == '×' && num == '×') {
      alert("Operation invalid");
      num = this.setAttribute("disabled"); // Funciona porém retorna - TypeError: num.setAttribute is not a function

   } else if (input.value.substring(input.value.length -1) == '÷' && num == '×' || input.value.substring(input.value.length -1) == '×' && num == '÷') {
      alert("Operation invalid");
      num = this.setAttribute("disabled"); //Funciona porém retorna - TypeError: num.setAttribute is not a function

   } else if (input.value.substring(input.value.length -1) == '' && num == '.') {
      input.value += '0'; // Debugger: Esste valor não e atribuido ao Array..

   } else if (input.value.substring(input.value.length -1) == '.' && num == '.') {
      this.setAttribute('disabled'); //Funciona porém retorna - TypeError: num.setAttribute is not a function
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
      // clean()
   }

   inputArrayValue.splice(0, input.value.length);
   inputArrayValue.splice(0, finalValue);

   if(intermediateValue.length >= 1 && inputArrayValue.length == 0){
      inputArrayValue.push(input.value.substring(finalValue));
   }

   console.log(inputArrayValue);
   console.log(finalValue);
}

// ## IDEIAS

/**
 * [] Previzualização do resultado
 * [] Maneira de add valor ao inputArrayValue pegando os valores do input.value independete de como eles estão sendo adicionados ao input.value
 * [] Alertas de quando o retorno da operação for invalida
 * [] ...
 */