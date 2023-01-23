//* Get Canvas Context
const ctx = canvas.getContext("2d");
canvas.width = 1440;
canvas.height = 960;

ctx.fillRect(0, 0, canvas.width, canvas.height);

//* Load Map
let currentLevel = 1; // Nivel actual
const mapImages = [new Image()]; // Array de imágenes de mapas
mapImages[0].src = "/src/assets/sprites/DiceMap.png"; // Asignar ruta de la imagen para el primer nivel

// //* Asignar el nivel actual
// currentLevel = level;

//* Obtener la imagen del mapa correspondiente al nivel
const mapImage = mapImages[currentLevel - 1];

//* Dibujar la imagen del mapa en el canvas
mapImage.onload = () => {
  gameLoop();
};

//* Enemigos
const enemies = [];
for (let i = 0; i < 10; i++) {
  const xDelay = i * 150;
  enemies.push(
    new Enemy({ position: { x: waypoints[0].x - xDelay, y: waypoints[0].y } })
  );
}

//* Funcion para empezar el juego game Loop
function gameLoop() {
  requestAnimationFrame(gameLoop);

  //* Dibujar el mapa
  ctx.drawImage(mapImage, 0, 0);
  enemies.forEach((enemy) => {
    enemy.actualizar();
  });
}
