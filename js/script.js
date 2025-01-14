// Crear un tooltip dinámico
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

// Datos para cada proyecto (puedes ampliar estos detalles si es necesario)
const projectDescriptions = {
  "images/proyecto2.png": "Tesoro Subterraneo: Dig Deeper Game Jam. Contributions: Player and enemies design & code.",
  "images/proyecto1.png": "Globito Busca Su Hogar: Description. Contributions: Part of design and code.",
  "images/proyecto3.png": "Pedagogical Support Tools: Integrating Digital Tools for Learning. Contributions: All design, art, and code.",
};

// Añadir eventos a las tarjetas
document.querySelectorAll(".proyecto").forEach((proyecto) => {
  proyecto.addEventListener("mouseover", (e) => {
    const imgSrc = proyecto.querySelector("img").getAttribute("src");
    const description = projectDescriptions[imgSrc] || "Description not available";

    // Mostrar el texto en el tooltip
    tooltip.textContent = description;
    tooltip.style.opacity = "1";
  });

  proyecto.addEventListener("mousemove", (e) => {
    // Posicionar el tooltip cerca del puntero
    tooltip.style.left = e.pageX + 15 + "px";
    tooltip.style.top = e.pageY + 15 + "px";
  });

  proyecto.addEventListener("mouseleave", () => {
    // Ocultar el tooltip
    tooltip.style.opacity = "0";
  });
});
