const palabras = ["girasol", "limón", "montaña", "tigre", "estrella"];
const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function generarSopa() {
  const gridSize = 15;
  const sopa = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));

  // Elegir una palabra al azar
  const palabra = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();

  // Insertar palabra horizontal
  const fila = Math.floor(Math.random() * gridSize);
  const colInicio = Math.floor(Math.random() * (gridSize - palabra.length));

  for (let i = 0; i < palabra.length; i++) {
    sopa[fila][colInicio + i] = palabra[i];
  }

  // Rellenar el resto con letras aleatorias
  for (let fila = 0; fila < gridSize; fila++) {
    for (let col = 0; col < gridSize; col++) {
      if (sopa[fila][col] === "") {
        sopa[fila][col] = letras[Math.floor(Math.random() * letras.length)];
      }
    }
  }

  // Mostrar la sopa en pantalla
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
}

// Generar sopa automáticamente al cargar
window.onload = generarSopa;
