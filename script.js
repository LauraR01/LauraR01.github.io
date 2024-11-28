let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = !menuVisible;
}

// Función que oculta el menú al seleccionar una opción
function seleccionar() {
    document.getElementById("nav").classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 300) {
        const habilidades = document.querySelectorAll(".progreso");
        habilidades.forEach(habilidad => {
            habilidad.classList.add("mostrar"); // Asegúrate de tener una clase 'mostrar' en tu CSS
        });
    }
}

// Evento para aplicar la animación de las habilidades cuando haces scroll
window.addEventListener("scroll", efectoHabilidades);

// Evento para alternar la visibilidad del contenido de habilidades
document.getElementById("toggle-skills").addEventListener("click", function () {
    const skillsContent = document.getElementById("skills-content");
    skillsContent.classList.toggle("active");

    // Cambia el atributo aria-expanded para accesibilidad
    const isExpanded = skillsContent.classList.contains("active");
    this.setAttribute("aria-expanded", isExpanded);
});