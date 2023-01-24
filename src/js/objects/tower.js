//* Clase zona de construccion de torres
class constructionZone {
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.size = 96;
    this.color = "rgba(20,100,255,.3)";
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
      console.log("colliding");
      this.color = "green";
    } else {
      this.color = "rgba(20,100,255,.3)";
    }
  }
}

const dataConstructionZone = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 0, 8,
  8, 0, 8, 0, 0, 8, 0, 8, 0, 0, 0, 0, 0, 0, 8, 0, 8, 8, 0, 0, 8, 8, 8, 0, 8, 8,
  8, 8, 0, 8, 8, 0, 0, 0, 0, 8, 8, 8, 0, 8, 8, 0, 8, 0, 8, 8, 0, 8, 0, 0, 8, 8,
  8, 0, 8, 0, 8, 8, 0, 8, 8, 0, 8, 0, 0, 8, 8, 8, 0, 8, 8, 8, 8, 0, 0, 0, 0, 8,
  0, 0, 0, 0, 0, 0, 8, 0, 8, 8, 8, 8, 8, 8, 8, 0, 0, 8, 8, 8, 8, 8, 8, 0, 8, 8,
  8, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const zonas = [];
const zonasArr2D = [];

for (let i = 0; i < dataConstructionZone.length; i += 15) {
  zonasArr2D.push(dataConstructionZone.slice(i, i + 15));
}

zonasArr2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 8) {
      //* Agregar una torre aqui
      zonas.push(new constructionZone({ position: { x: x * 96, y: y * 96 } }));
    }
  });
});

//* Event Listener, cuando hago click con el mouse en el mapa
//* Le doy un offset de 128 px en X Y porque el elemento esta desalineado

const mouse = { x: undefined, y: undefined };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX - 128;
  mouse.y = e.clientY - 128;
});
