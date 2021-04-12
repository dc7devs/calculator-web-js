const MAX_VISOR_CHAR = 21;

function insert(num) {
   document.querySelector("#displayValue").removeAttribute("hidden");
   if (document.querySelector("#displayValue").innerHTML.length < MAX_VISOR_CHAR) {
      if (document.querySelector("#displayValue").innerHTML == 0) {
            document.querySelector("#displayValue").innerHTML = "";
         }
      document.querySelector('#displayValue').innerHTML += num;
      }
      
}

// Clear - Limpa o display
function clean() {

   if (document.querySelector("#displayValue").innerHTML != 0) {
      document.querySelector("#displayValue").innerHTML = 0;
   }

}

// back - deleta o ultimo caracater inserido

function back() {
   var resultado = document.querySelector('#displayValue').innerHTML;
   document.querySelector('#displayValue').innerHTML = resultado.substring(0, resultado.length -1);
   
}

// calcular - calcula

function calcular() {

   var resultado = document.querySelector('#displayValue').innerHTML;
   if(resultado) {
      document.querySelector('#displayValue').innerHTML = eval(resultado);
   }
}