//* Get Canvas Context
const ctx = canvas.getContext("2d");
canvas.width = 1440;
canvas.height = 960;

ctx.fillRect(0, 0, canvas.width, canvas.height);

//* Load Map
let currentLevel = 1; // Nivel actual
const mapImages = [new Image()]; // Array de imágenes de mapas
mapImages[0].src = "./src/assets/sprites/DiceMap.png"; // Asignar ruta de la imagen para el primer nivel

// //* Asignar el nivel actual
// currentLevel = level;

//* Obtener la imagen del mapa correspondiente al nivel
const mapImage = mapImages[currentLevel - 1];

//* Dibujar la imagen del mapa en el canvas
//* Play-Pause
let gameReady = false;
let requestReference;
let isRunning = false;

mapImage.onload = () => {
  gameReady = true;
};

//* Enemigos
const enemies = [];
let crearEnemigo = 5;
createWave(crearEnemigo);

function createWave(count) {
  for (let i = 1; i < count + 1; i++) {
    const xDelay = i * 150;
    enemies.push(
      new Enemy({ position: { x: waypoints[0].x - xDelay, y: waypoints[0].y } })
    );
  }
}

//* Vidas
let vida = 10;

// //* HUD values
const hudValue = { position: { x: 100, y: 450 } };

//* Funcion para empezar el juego game Loop
function gameLoop() {
  const gameLoopId = requestAnimationFrame(gameLoop);
  requestReference = gameLoopId;

  //* Dibujar el mapa (game loop)
  ctx.drawImage(mapImage, 0, 0);

  //* Dibujar Enemigos
  for (let i = enemies.length - 1; i >= 0; i--) {
    const enemy = enemies[i];
    enemy.actualizar();

    //* Si los enemigos pasan la meta, resta 1 de vida
    if (enemy.position.x > canvas.width) {
      vida -= 1;
      vidas.innerText = vida;
      corazonesContainer.removeChild(corazonesContainer.firstChild);
      console.log(vida);
      enemies.splice(i, 1);
      if (vida === 0) {
        cancelAnimationFrame(gameLoopId);
        canvas.classList.add("none");
        div.classList.add("none");
        canvasContainer.classList.remove("canvasDad");
        playAgainBtn.classList.remove("none");
        gameOver.classList.remove("none");
        corazonesContainer.classList.add("none");
        vidas.classList.add("none");
        moneda.classList.add("none");
        dinero.classList.add("none");
      }
    }
  }

  //* Terminar oleada de enemigos y crear la siguiente con 2 enemigos mas
  if (enemies.length === 0) {
    crearEnemigo += 2;
    createWave(crearEnemigo);
  }

  //* Capacidad de crear torres donde ponga el mouse

  zonas.forEach((zona) => {
    zona.actualizar(mouse);
  });

  towers.forEach((tower) => {
    tower.actualizar();
    tower.blanco = null;
    //* Disparar a los enemigos dentro del radio de la torre
    const closeEnemy = enemies.filter((enemy) => {
      const diffX = enemy.center.x - tower.center.x;
      const diffY = enemy.center.y - tower.center.y;
      const distancia = Math.hypot(diffX, diffY);
      return distancia < enemy.radio + tower.radio;
    });

    tower.blanco = closeEnemy[0];

    for (let i = tower.balas.length - 1; i >= 0; i--) {
      const bala = tower.balas[i];

      bala.actualizar();
      //* Calcular distancia en X y Y entre el centro de la bala y el enemigo
      const diffX = bala.enemy.center.x - bala.position.x;
      const diffY = bala.enemy.center.y - bala.position.y;
      const distancia = Math.hypot(diffX, diffY);

      //* Colision de bala con enemigo y Eliminar enemigo si su vida es menor a 0
      if (distancia < bala.enemy.radio + bala.radio) {
        bala.enemy.vida -= 20;
        if (bala.enemy.vida <= 0) {
          const enemyIndex = enemies.findIndex((enemy) => {
            return bala.enemy === enemy;
          });
          if (enemyIndex > -1) {
            enemies.splice(enemyIndex, 1);
            monedas += 25;
            dinero.innerHTML = monedas;
          }
        }

        tower.balas.splice(i, 1);
      }
    }
  });
}
