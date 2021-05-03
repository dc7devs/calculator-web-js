// const MAX_VISOR_CHAR = 21;
let input = document.querySelector("#displayValue");
let inputArrayValue = [];

function insert(num) {
   if(num == undefined) {
      num = "(";
      if(input.value.substring(input.value.length -1) != '') {
         num = "*(";
      }
   }
   // ? adicionar os valores do input.value a um array para modificar os caracteres....
   input.value += num;
   
   inputArrayValue.push(input.value.substring(input.value.length -1));
   
   // inputArrayValue.splice(0, inputArrayValue.join(''));
   
   console.log(inputArrayValue);
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
   let resultado = input.value;
   if(resultado) {
      input.value = eval(resultado);
   }
}