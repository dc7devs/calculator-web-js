const MAX_VISOR_CHAR = 20;

function AddNumber(num) {
   document.querySelector("#displayValue").removeAttribute("hidden");
   if (document.querySelector("#displayValue").innerHTML.length < MAX_VISOR_CHAR) {
      if (document.querySelector("#displayValue").innerHTML == 0) {
         document.querySelector("#displayValue").innerHTML = "";
      }
      document.querySelector("#displayValue").innerHTML += num;
   }
}