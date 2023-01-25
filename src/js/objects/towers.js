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

//* Array de torres
const towers = [];
let activeTower = undefined;

canvas.addEventListener("click", (e) => {
  if (activeTower && !activeTower.isOverlap) {
    towers.push(
      new Tower({
        position: {
          x: activeTower.position.x,
          y: activeTower.position.y,
        },
      })
    );
    activeTower.isOverlap = true;
  }
});

//* Event Listener, cuando hago click con el mouse en el mapa
//* Le doy un offset para que independientemente del viewport quede bien pocisionado

const mouse = { x: undefined, y: undefined };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;

  activeTower = null;
  for (let i = 0; i < zonas.length; i++) {
    const tile = zonas[i];
    if (
      mouse.x > tile.position.x &&
      mouse.x < tile.position.x + tile.size &&
      mouse.y > tile.position.y &&
      mouse.y < tile.position.y + tile.size
    ) {
      activeTower = tile;
      break;
    }
  }
});
