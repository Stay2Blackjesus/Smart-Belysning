
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

//Ändrar Bakgrundsfärg till Dark-Mode värdet från Style.css
function Btn1() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

