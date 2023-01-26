const div = document.createElement("div");
div.classList.add("container");
document.body.appendChild(div);

const buttons = [{ text: "Play" }, { text: "Home" }];

buttons.forEach(function (button) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("containerDos");
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
        location.href = "./index.html";
        break;
    }
  });
});

//* Crear el canvas container div y ponerle clase
const canvasContainer = document.createElement("div");
canvasContainer.classList.add("canvasDad");

//* Crear el canvas
const canvas = document.createElement("canvas");

//* Agregar el canvas a un container div
document.body.appendChild(canvasContainer);
canvasContainer.appendChild(canvas);

//* Agrega un boton de Game Over
const playAgainBtn = document.createElement("button");
playAgainBtn.classList.add("btn", "btn-two", "none", "playAgain");
playAgainBtn.innerText = "PLAY AGAIN";
canvasContainer.appendChild(playAgainBtn);
playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});

const gameOver = document.createElement("div");
gameOver.classList.add("gameOver", "none");
gameOver.innerText = "Game Over";
canvasContainer.appendChild(gameOver);

// //* Agrega Barra de Vida del Jugador
// const barraVida = document.createElement("img");
// barraVida.classList.add("hud2");
// barraVida.src = "/src/assets/sprites/playerHealthBar.png";
// canvasContainer.appendChild(barraVida);

// //* Agrega div de Vidas
const vidas = document.createElement("div");
vidas.classList.add("hud");
vidas.innerText = "10";
canvasContainer.appendChild(vidas);

// //* Agrega 10 Corazones
const corazonesContainer = document.createElement("div");
corazonesContainer.classList.add("hud2");
for (let i = 0; i < 10; i++) {
  const corazon = document.createElement("img");
  corazon.src = "./src/assets/sprites/heart.png";
  corazonesContainer.appendChild(corazon);
}
canvasContainer.appendChild(corazonesContainer);

// //* Agrega div de Dinero
const dinero = document.createElement("div");
dinero.classList.add("hud3");
dinero.innerText = "100";
canvasContainer.appendChild(dinero);
//* Monedas
const moneda = document.createElement("img");
moneda.classList.add("hud4");
moneda.src = "./src/assets/sprites/coin.png";
corazonesContainer.appendChild(moneda);
