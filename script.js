function login() {
  let modme = document.getElementById("modmeid").value;
  let pass = document.getElementById("password").value;

  let p = document.getElementById("welcome");
  let bye = document.getElementById("bye");

  // Store the modme and pass in local storage
  localStorage.setItem("modme", modme);
  localStorage.setItem("pass", pass);

  if (modme === "633161" && pass === "serkan") {
    p.textContent = "Welcome to my House ✌️⭕";
    function text() {
      p.textContent = " ";
    }
    setTimeout(text, 2000);
  } else {
    bye.textContent = "Get out from my House! (❁´◡`❁)";
    function text() {
      bye.textContent = " ";
    }
    setTimeout(text, 2000);
  }
}

document.getElementById("promptButton").addEventListener("click", function () {
  let userInput = prompt("What is your question:");
  let output;

  if (userInput) {
    document.getElementById("output").innerText = userInput;
  } else {
    document.getElementById("output").innerText = "You wrote nothing.";
  }
  setTimeout(userInput, 2000)
});

window.onload = function () {
  if (localStorage.getItem("modme")) {
    document.getElementById("modmeid").value = localStorage.getItem("modme");
  }
  if (localStorage.getItem("pass")) {
    document.getElementById("password").value = localStorage.getItem("pass");
  }
};
