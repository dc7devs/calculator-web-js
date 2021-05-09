// const MAX_VISOR_CHAR = 21;
let input = document.querySelector("#displayValue");
let inputArrayValue = [];
let intermediateValue;

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
   
   // let resultado = finalValue;
   if(finalValue) {
      input.value = eval(finalValue);
   }

   inputArrayValue.splice(0, input.value.length);
   inputArrayValue.splice(0, finalValue);

   if(intermediateValue.length >= 1 && inputArrayValue.length == 0){
      inputArrayValue.push(input.value.substring(finalValue));
   }

   console.log(finalValue);

   console.log(inputArrayValue);
}