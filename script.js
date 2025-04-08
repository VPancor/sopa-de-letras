// Lista de palabras con sus definiciones
const palabras = [
  { palabra: "girasol", definicion: "Planta que gira siguiendo al sol" },
  { palabra: "limón", definicion: "Fruta amarilla y ácida" },
  { palabra: "estrella", definicion: "Cuerpo celeste que brilla con luz propia" },
  { palabra: "montaña", definicion: "Elevación natural del terreno" },
  { palabra: "tigre", definicion: "Felino de gran tamaño y rayas" }
];

const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let palabraActual = "";
let posicionPalabra = { fila: null, col: null };

function generarSopa() {
  const gridSize = 15;
  const sopa = Array.from({ length: gridSize }, () => Array(gridSize).fill(""));
  const seleccion = palabras[Math.floor(Math.random() * palabras.length)];
  const palabra = seleccion.palabra.toUpperCase();
  palabraActual = palabra;

  const fila = Math.floor(Math.random() * gridSize);
  const colInicio = Math.floor(Math.random() * (gridSize - palabra.length));
  posicionPalabra = { fila, col: colInicio };

  // Insertar la palabra horizontalmente
  for (let i = 0; i < palabra.length; i++) {
    sopa[fila][colInicio + i] = palabra[i];
  }

  // Rellenar el resto con letras aleatorias
  for (let f = 0; f < gridSize; f++) {
    for (let c = 0; c < gridSize; c++) {
      if (sopa[f][c] === "") {
        sopa[f][c] = letras[Math.floor(Math.random() * letras.length)];
      }
    }
  }

  // Mostrar sopa en pantalla
  const sopaDiv = document.getElementById("sopa");
  sopaDiv.innerHTML = "";

  sopa.forEach((fila) => {
    fila.forEach((letra) => {
      const celda = document.createElement("div");
      celda.className = "letra";
      celda.textContent = letra;
      sopaDiv.appendChild(celda);
    });
  });

  // Mostrar definición
  document.getElement
