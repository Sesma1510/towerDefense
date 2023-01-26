//* Clase zona de construccion de torres
class constructionZone {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 96;
    this.color = "rgba(20,100,255,0)";
    this.overlap = false;
  }

  dibujarse() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.size, this.size);
  }

  actualizar(mouse) {
    this.dibujarse();

    if (
      mouse.x > this.position.x &&
      mouse.x < this.position.x + this.size &&
      mouse.y > this.position.y &&
      mouse.y < this.position.y + this.size
    ) {
      this.color = "rgba(0,164,42,0.4)";
    } else {
      this.color = "rgba(0,164,42,0)";
    }
  }
}

//* Clase Torre
class Tower {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 96;
    this.height = 96;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.balas = [];
    this.radio = 250;
    this.blanco;
    this.disparosPF = 0;
  }

  dibujarse() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radio, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,0,255,0)";
    ctx.fill();
  }

  actualizar() {
    this.dibujarse();
    this.disparosPF++;
    if (this.disparosPF % 60 === 0 && this.blanco) {
      this.balas.push(
        new Balas({
          position: {
            x: this.center.x,
            y: this.center.y,
          },
          enemy: this.blanco,
        })
      );
    }
  }
}

//* Clase Balas

class Balas {
  constructor({ position = { x: 0, y: 0 }, enemy }) {
    this.position = position;
    this.velocidad = {
      x: 0,
      y: 0,
    };
    this.radio = 5;
    this.enemy = enemy;
  }
  //* Dibujar Balas
  dibujarse() {
    ctx.beginPath();
    //* Balas redondas
    ctx.arc(this.position.x, this.position.y, this.radio, 0, Math.PI * 2);
    ctx.fillStyle = "yellow";
    ctx.fill();
  }

  //* velocidad y angulo de las balas (seguir enemigos)
  actualizar() {
    this.dibujarse();

    const angulo = Math.atan2(
      this.enemy.center.y - this.position.y,
      this.enemy.center.x - this.position.x
    );
    //* Que tan rapido quiero que vaya la bala
    const bulletSpeed = 4;
    this.velocidad.x = Math.cos(angulo) * bulletSpeed;
    this.velocidad.y = Math.sin(angulo) * bulletSpeed;

    this.position.x += this.velocidad.x;
    this.position.y += this.velocidad.y;
  }
}

//*Clase Enemigos

class Enemy {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 32;
    this.height = 32;
    this.waypointIndex = 0;
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
    this.radio = 16;
    this.vida = 100;
    this.velocidad = { x: 0, y: 0 };
  }

  //* Dibujar enemigos
  dibujarse() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radio, 0, Math.PI * 2);
    ctx.fill();

    //* Barra de Vida
    ctx.fillStyle = "red";
    ctx.fillRect(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      this.width,
      5
    );

    ctx.fillStyle = "green";
    ctx.fillRect(
      this.position.x - this.width / 2,
      this.position.y - this.height / 2,
      (this.width * this.vida) / 100,
      5
    );
  }

  actualizar() {
    this.dibujarse();

    const waypoint = waypoints[this.waypointIndex];
    const distanciaY = waypoint.y - this.center.y;
    const distanciaX = waypoint.x - this.center.x;
    const angulo = Math.atan2(distanciaY, distanciaX);
    const velocidad = 1;

    //* Velocidad de mis enemigos
    this.velocidad.x = Math.cos(angulo) * velocidad;
    this.velocidad.y = Math.sin(angulo) * velocidad;

    this.position.x += this.velocidad.x;
    this.position.y += this.velocidad.y;

    //* Posicion del enemgigo en el camino
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) <
        Math.abs(this.velocidad.x) &&
      Math.abs(Math.round(this.center.y) - Math.round(waypoint.y)) <
        Math.abs(this.velocidad.y) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}

//* Clase HUD
class hud {
  constructor(position = { x: 0, y: 0 }) {
    this.position = position;
    this.width = 400;
    this.height = 1000;
    this.healthBar = "/src/assets/sprites/playerHealthBar.png";
    this.score = null;
    this.dinero = null;
  }

  dibujarse() {
    //* Barra de Vida
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    // ctx.fillStyle = "green";
    // ctx.fillRect(
    //   this.position.x - this.width / 2,
    //   this.position.y - this.height / 2,
    //   (this.width * this.vida) / 100,
    //   5
    // );
  }

  actualizar() {
    this.dibujarse();
  }
}
