function crearLluviaDePalabras() {
  const contenedor = document.getElementById("confeti-container");
  const palabras = ['🎉', 'WEKO', 'YHEAA', '💖', 'PAPURRII', '🎂', 'AAAAAHHH', '🫦', 'BESAME', '🎈'];

  for (let i = 0; i < 100; i++) {
    const palabra = document.createElement("div");
    palabra.classList.add("palabra");

    // Texto aleatorio
    palabra.textContent = palabras[Math.floor(Math.random() * palabras.length)];

    // Estilo aleatorio
    palabra.style.left = `${Math.random() * 100}vw`;
    palabra.style.animationDuration = `${2 + Math.random() * 4}s`;
    palabra.style.animationDelay = `${Math.random() * 5}s`;
    palabra.style.fontSize = `${12 + Math.random() * 24}px`;
    palabra.style.color = randomColor();

    contenedor.appendChild(palabra);
  }
}

function randomColor() {
  const colores = ['#ff4d4d', '#4d94ff', '#4dff88', '#ffd24d', '#b84dff', '#ff66cc'];
  return colores[Math.floor(Math.random() * colores.length)];
}

crearLluviaDePalabras();


