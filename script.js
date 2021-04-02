const MAX_VISOR_CHAR = 20;

function AddCaracter(num) {
   document.querySelector("#displayValue").removeAttribute("hidden");
   if (document.querySelector("#displayValue").innerHTML.length < MAX_VISOR_CHAR) {
      if (document.querySelector("#displayValue").innerHTML == 0) {
         document.querySelector("#displayValue").innerHTML = "";
      }
      document.querySelector("#displayValue").innerHTML += num;
   }
}

// Clear
function deletar() {}

// Delete
function ClearAll() {

   if (document.querySelector("#displayValue").innerHTML != 0) {
      document.querySelector("#displayValue").innerHTML = 0;
   }

}


// Operadores
function somar() {}

function subtrair() {}

function multiplicar() {}

function dividir() {}



