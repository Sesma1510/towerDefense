const div = document.createElement("div");
div.classList.add("container-2");
document.body.appendChild(div);

const buttons = [{ text: "Play" }, { text: "Home" }, { text: "Next Level" }];

buttons.forEach(function (button) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("container-2");
  div.appendChild(buttonContainer);

  const buttonDiv = document.createElement("button");
  buttonDiv.classList.add("btn", "btn-two");
  buttonContainer.appendChild(buttonDiv);
  buttonDiv.innerText = button.text;

  buttonDiv.addEventListener("click", function () {
    switch (button.text) {
      case "Play":
        startGameLoop();
        break;
      case "Home":
        location.href = "/index.html";
        break;
      case "Next Level":
        currentLevel++;
        loadNextLevel();
        break;
    }
  });
});

//* Crear el canvas container div y ponerle clase
const canvasContainer = document.createElement("div");
canvasContainer.classList.add("container");

//* Crear el canvas
const canvas = document.createElement("canvas");

//* Agregar el canvas a un container div
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(canvas);
