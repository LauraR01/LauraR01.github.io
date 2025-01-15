let index = 0;
const carrusel = document.querySelector('.carrusel');
const proyectos = document.querySelectorAll('.proyecto');
const totalProyectos = proyectos.length;

// Función para actualizar la posición del carrusel
function updateCarrusel() {
    const offset = -index * carrusel.offsetWidth;
    carrusel.style.transform = `translateX(${offset}px)`;
}

// Función para mover al siguiente proyecto
function siguienteProyecto() {
    index = (index + 1) % totalProyectos;  // Aumenta el índice y vuelve al principio si se llega al final
    updateCarrusel();
}

// Función para mover al proyecto anterior
function anteriorProyecto() {
    index = (index - 1 + totalProyectos) % totalProyectos;  // Disminuye el índice y vuelve al final si es necesario
    updateCarrusel();
}

// Botones de navegación
document.querySelector('.prev').addEventListener('click', anteriorProyecto);
document.querySelector('.next').addEventListener('click', siguienteProyecto);