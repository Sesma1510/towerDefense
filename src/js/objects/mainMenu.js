const div = document.createElement("div");
div.classList.add("container-2");
document.body.appendChild(div);

const buttons = [
  { text: "Play Game", url: "juego.html" },
  { text: "Instructions", url: "instructions.html" },
  { text: "Credits", url: "credits.html" },
];

buttons.forEach(function (button) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("container-2");
  div.appendChild(buttonContainer);

  const buttonDiv = document.createElement("button");
  buttonDiv.classList.add("btn", "btn-two");
  buttonContainer.appendChild(buttonDiv);
  buttonDiv.innerText = button.text;

  buttonDiv.addEventListener("click", function () {
    window.location.href = button.url;
  });
});
