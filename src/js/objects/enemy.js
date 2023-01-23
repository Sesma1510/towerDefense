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
  }

  //* dibujar enemigos
  dibujarse() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
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
