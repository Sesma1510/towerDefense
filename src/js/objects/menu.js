const div = document.createElement("div");
div.classList.add("container-2");
document.body.appendChild(div);

const buttons = [{ text: "Play" }, { text: "Home" }];

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
        if (gameReady) {
          if (!isRunning) {
            buttonDiv.innerText = "Pause";
            gameLoop();
            isRunning = true;
          } else {
            cancelAnimationFrame(requestReference);
            buttonDiv.innerText = "Play";
            isRunning = false;
          }
        }
        break;
      case "Home":
        location.href = "/index.html";
        break;
    }
  });
});

//* Crear el canvas container div y ponerle clase
const canvasContainer = document.createElement("div");
canvasContainer.classList.add("canvasDad", "container");

//* Crear el canvas
const canvas = document.createElement("canvas");

//* Agregar el canvas a un container div
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(canvas);

//* Agrega un boton de Game Over
const gameOverBtn = document.createElement("button");
gameOverBtn.classList.add("btn", "btn-two", "none");
gameOverBtn.innerText = "GAME OVER";
gameOverBtn.addEventListener("click", () => {
  window.location.reload();
});
canvasContainer.appendChild(gameOverBtn);
