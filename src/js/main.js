function startGameLoop() {
  // Clear al canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  loadMap(currentLevel);
  // Dibujar el mapa
  loadMap(currentLevel);
  // UFOs frame game loop para que se muevan mejor y se dibujen
  ufoGameLoop();
  // Request another animation frame
  requestAnimationFrame(startGameLoop);
}

//* Load Map
let currentLevel = 1; // Nivel actual
const mapImages = [new Image()]; // Array de imágenes de mapas
mapImages[0].src = "../src/assets/sprites/TD2DMap.png"; // Asignar ruta de la imagen para el primer nivel

//* Función para cargar un mapa específico
function loadMap(level) {
  //* Asignar el nivel actual
  currentLevel = level;

  //* Obtener la imagen del mapa correspondiente al nivel
  const mapImage = mapImages[level - 1];

  //* Dibujar la imagen del mapa en el canvas
  mapImage.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(mapImage, 0, 0);
  };
}

loadMap(1);
