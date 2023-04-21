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


let seMereClicked = false;

function toggleContent() {
  const additionalContent = document.getElementById("additional");
  const seMereButton = document.getElementById("se-mere");

  if (seMereClicked) {
    additionalContent.classList.add("hidden");
    seMereButton.textContent = "Se kommende afleveringer";
  } else {
    additionalContent.classList.remove("hidden");
    seMereButton.textContent = "Se nuværende afleveringer";
  }

  seMereClicked = !seMereClicked;
}

document.getElementById("se-mere").addEventListener("click", toggleContent)
