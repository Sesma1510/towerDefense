const instructionsText = `
* Solo usa el click izquierdo para construir torres donde quieras<br>
<br>
* El objetivo del juego es evitar que los enemigos lleguen al final de el camino colocando torres en el camino.<br>
<br>
* Comienzas con una cierta cantidad de dinero y debes usarla para comprar y mejorar torres.<br>
<br>
* Las torres atacarán automáticamente a los enemigos cuando pasen.<br>
<br>
* A medida que avances por los niveles, los enemigos se volverán más fuertes y tendrás que mejorar tus torres para mantenerte vivo.<br>
<br>
* Sea estratégico en la ubicación y actualización de su torre, ya que sus recursos son limitados.<br>
<br>
* Vigila tus vidas y si llegan a cero, el juego termina.<br>
<br>
* A medida que avances por los niveles, ganarás oro que podrás usar para comprar nuevas torres<br>`;

const div = document.createElement("div");
div.classList.add("containerDos");
document.body.appendChild(div);

const buttons = [
  { text: "Play Game", url: "./src/juego.html" },
  { text: "Instructions" },
];
// { text: "Credits", url: "./src/credits.html" },

buttons.forEach(function (button) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("containerDos");
  div.appendChild(buttonContainer);

  const buttonDiv = document.createElement("button");
  buttonDiv.classList.add("btn", "btn-two", "instructionsBtn");
  buttonContainer.appendChild(buttonDiv);
  buttonDiv.innerText = button.text;

  if (button.text === "Instructions") {
    buttonContainer.classList.add("popup");
    const popup = document.createElement("div");
    popup.classList.add("popuptext");
    popup.innerHTML = instructionsText;
    buttonContainer.appendChild(popup);
    buttonContainer.addEventListener("click", function (e) {
      if (e.target !== popup) {
        popup.classList.toggle("show");
      }
    });
    popup.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }

  buttonDiv.addEventListener("click", function () {
    switch (button.text) {
      case "Play Game":
        window.location.href = button.url;
        break;
      case "Instructions":
        if (popup.classList.contains("show")) {
          popup.classList.remove("show");
        } else {
          popup.classList.add("show");
        }
        break;
      // case "Credits":
      //   window.location.href = button.url;
      //   break;
    }
  });
});
