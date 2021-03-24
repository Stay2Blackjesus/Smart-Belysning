//Knappen för sidebar
function w3_open() {
  document.getElementById("sidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("sidebar").style.display = "none";
}

//If called upon, replaces Body with Dark-mode in the Style.css file
function Btn1() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}