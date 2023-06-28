//* Crear el canvas
const canvas = document.getElementById("canva");

//* Event Listener del boton Play Again
const playAgainBtn = document.getElementById("jugarOtra");
playAgainBtn.addEventListener("click", () => {
  window.location.reload();
});

const gameOver = document.getElementById("gameOver");

const home = document.getElementById("homeLink");
const play = document.getElementById("botonJugar");

const vida = document.getElementById("vidas");
const monedas = document.getElementById("monedas");
const monedaIcon = document.getElementById("monedaIcon");
const corazonIcon = document.getElementById("corazonIcon");

const hud = document.getElementById("hud");

let bgMusic = new Audio("../../assets/sounds/background.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.5; // ajusta el volumen a la mitad

const botonJugar = document.querySelector("a");
botonJugar.addEventListener("click", function () {
  if (gameReady) {
    if (!isRunning) {
      botonJugar.innerText = "Pausa";
      bgMusic.play();
      gameLoop();
      vida.classList.remove("none");
      monedas.classList.remove("none");
      isRunning = true;
    } else {
      bgMusic.pause();
      cancelAnimationFrame(requestReference);
      botonJugar.innerText = "Jugar";
      isRunning = false;
    }
  }
});
