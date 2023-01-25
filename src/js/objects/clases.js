//* Clase zona de construccion de torres
class constructionZone {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 96;
    this.color = "rgba(20,100,255,.3)";
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
      this.color = "green";
    } else {
      this.color = "rgba(20,100,255,.3)";
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
    this.balas = [
      new Balas({
        position: {
          x: this.center.x,
          y: this.center.y,
        },
        enemy: enemies[0],
      }),
    ];
  }

  dibujarse() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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
  ß;
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
      enemies[0].center.y - this.position.y,
      enemies[0].center.x - this.position.x
    );

    this.velocidad.x = Math.cos(angulo);
    this.velocidad.y = Math.sin(angulo);

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
  }

  //* dibujar enemigos
  dibujarse() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radio, 0, Math.PI * 2);
    ctx.fill();
  }

  actualizar() {
    this.dibujarse();

    const waypoint = waypoints[this.waypointIndex];
    const distanciaY = waypoint.y - this.center.y;
    const distanciaX = waypoint.x - this.center.x;
    const angulo = Math.atan2(distanciaY, distanciaX);

    this.position.x += Math.cos(angulo);
    this.position.y += Math.sin(angulo);
    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (
      Math.round(this.center.x) === Math.round(waypoint.x) &&
      Math.round(this.center.y) === Math.round(waypoint.y) &&
      this.waypointIndex < waypoints.length - 1
    ) {
      this.waypointIndex++;
    }
  }
}
