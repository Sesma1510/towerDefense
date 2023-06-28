//* Get Canvas Context
const ctx = canvas.getContext("2d");
canvas.width = 1440;
canvas.height = 960;

ctx.fillRect(0, 0, canvas.width, canvas.height);

//* Load Map
let currentLevel = 1; // Nivel actual
const mapImages = [new Image()]; // Array de imágenes de mapas
mapImages[0].src = "../assets/sprites/DiceMap.png"; // Asignar ruta de la imagen para el primer nivel

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
let contadorDeOleadas = 0;
createWave(crearEnemigo);

function createWave(count) {
  for (let i = 1; i < count + 1; i++) {
    const xDelay = i * 150;
    enemies.push(
      new Enemy({
        position: { x: waypoints[0].x - xDelay, y: waypoints[0].y },
        oleada: contadorDeOleadas,
      })
    );
  }
  // Incrementa el contador de oleadas cada vez que se crea una nueva oleada.
  contadorDeOleadas++;
}

//* Vidas
let vidas = 5;

//* Explosiones
const explosiones = [];

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
      vidas -= 1;
      enemies.splice(i, 1);
      vida.innerHTML = vidas;
      if (vidas === 0) {
        cancelAnimationFrame(gameLoopId);
        canvas.classList.add("none");
        play.classList.add("none");
        home.classList.add("none");
        playAgainBtn.classList.remove("none");
        gameOver.classList.remove("none");
        corazonIcon.classList.add("none");
        vida.classList.add("none");
        monedas.classList.add("none");
        monedaIcon.classList.add("none");
        hud.style.background("transparent");
      }
    }
  }

  for (let i = explosiones.length - 1; i >= 0; i--) {
    const explosion = explosiones[i];
    explosion.dibujarse();
    explosion.actualizar();
    if (explosion.frames.actual >= explosion.frames.max - 1) {
      explosiones.splice(i, 1);
    }
  }

  //* Terminar oleada de enemigos y crear la siguiente con 2 enemigos mas
  if (enemies.length === 0) {
    crearEnemigo += 5;
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
            dinero += 5;
            monedas.innerHTML = dinero;
          }
        }
        explosiones.push(
          new Sprite({
            position: { x: bala.position.x, y: bala.position.y },
            imageSrc: "../assets/sprites/explosion.png",
            frames: { max: 8 },
            offset: { x: -5, y: -10 },
          })
        );
        tower.balas.splice(i, 1);
      }
    }
  });
}
