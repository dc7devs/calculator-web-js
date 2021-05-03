// const MAX_VISOR_CHAR = 21;
let input = document.querySelector("#displayValue");
let inputArrayValue = [];
let intermediateValue, finalValue;

function insert(num) {
   if(num == undefined) {
      num = "(";
      if(input.value.substring(input.value.length -1) != '') {
         num = "*(";
      }
   }
   input.value += num;

   inputArrayValue.push(input.value.substring(input.value.length -1));
   
   intermediateValue = inputArrayValue.join('');

   inputArrayValue.splice(0, input.value.length, intermediateValue);

   if(intermediateValue.indexOf('÷')){
      finalValue = intermediateValue.replace('÷', '/');
   }
   if(intermediateValue.indexOf('×')){
      finalValue = intermediateValue.replace('×', '*');
   }
}


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

// calcular - calcula o resultado das operações em questão

function calcular() {

   let resultado = finalValue;
   if(resultado) {
      input.value = eval(resultado);
   }
}