var box = document.getElementById("afl-kasse");

box.addEventListener("click", function() {
  box.style.backgroundColor = "green";
});


function showMessage() {
  document.getElementById("popup-message").style.display = "block";
}

function hideMessage() {
  document.getElementById("popup-message").style.display = "none";
  document.getElementById("afl-kasse").style.backgroundColor = "green";
}
