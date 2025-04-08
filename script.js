const palabras = [
  { palabra: "girasol", definicion: "Planta que gira siguiendo al sol" },
  { palabra: "limón", definicion: "Fruta amarilla y ácida" },
  { palabra: "estrella", definicion: "Cuerpo celeste que brilla con luz propia" },
  { palabra: "montaña", definicion: "Elevación natural del terreno" },
  { palabra: "tigre", definicion: "Felino de gran tamaño y rayas" }
];

const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let palabraActual = "";

function generarSopa() {
  const gridSize = 15;
  const sopa = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
  const seleccion = palabras[Math.floor(Math.random() * palabras.length)];
  const palabra = seleccion.palabra.toUpperCase();
  palabraActual = palabra;

  const fila = Math.floor(Math.random() * gridSize);
  const colInicio = Math.floor(Math.random() * (gridSize - palabra.length));

  for (let i = 0; i < palabra.length; i++) {
    sopa[fila][colInicio + i] = palabra[i];
  }

  for (let fila = 0; fila < gridSize; fila++) {
    for (let col = 0; col < gridSize; col++) {
      if (sopa[fila][col] === "") {
        sopa[fila][col] = letras[Math.floor(Math.random() * letras.length)];
      }
    }
  }

  const sopaDiv = document.getElementById("sopa");
  sopaDiv.innerHTML = "";

  sopa.forEach(fila => {
    fila.forEach(letra => {
      const celda = document.createElement("div");
      celda.className = "letra";
      celda.textContent = letra;
      sopaDiv.appendChild(celda);
    });
  });

  document.getElementById("definicion").textContent = seleccion.definicion;
}

function mostrarRespuesta() {
  alert("La palabra oculta es: " + palabraActual);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("letra")) {
    e.target.classList.toggle("marcada");
  }
});

window.onload = generarSopa;
