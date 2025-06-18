let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

const translations = {
    en: {
        menu_home: 'HOME',
        menu_portfolio: 'PORTFOLIO',
        menu_about: 'ABOUT ME',
        menu_skills: 'SKILLS',
        menu_contact: 'CONTACT',
        
        portfolio_title: 'Portfolio',
        inicio_subtitulo: 'videogames developer - Electronic Engineer',
        project1_description: "Spittle's Sewer Saga is a stylized action-adventure where players help Spittle, a brave rat, recover stolen cheese, defeat the Exterminator, and restore hope to the sewers.",
        project1_contributions: 'My contributions: ',
        project1_roles: 'UI-UX developer & Documentation',
        project2_description: "EchoQuest is an intergalactic adventure to help Echo, a robot, survive hostile planets and save humanity.",
        project2_contributions: 'My contributions: ',
        project2_roles: 'UI-UX developer, Documentation & Pitch',
        project3_title: 'Pedagogical support tools',
        project3_description: "Integrating Digital Tools for Learning about AC Electrical Circuits within Electronic Engineering.",
        project3_contributions: 'My contributions: ',
        project3_roles: 'Design & code',

        aboutme_title: 'About me',
        aboutme_intro: "Hi, I'm Laura Ramos Achicanoy",
        aboutme_paragraph1: "I'm an Electronic Engineer specializing in video game development, and I’ve been creating immersive experiences for the entertainment industry for several years...",
        aboutme_paragraph2: "Throughout my journey, I've had the pleasure of working on both collaborative and solo projects, honing skills like teamwork, adaptability, creativity, time management, communication, and leadership...",
        aboutme_paragraph3: 'If you’d like to see some of my projects or chat about game development, feel free to reach out!',
        aboutme_personalinfo: 'Personal Information',
        aboutme_birthday: 'Birthday',
        aboutme_month: 'April',
        aboutme_cellphone: 'Cellphone',
        aboutme_email: 'Email',
        aboutme_location: 'Ubication',
        aboutme_interests: 'Interests',
        interest_games: 'GAMES',
        interest_music: 'MUSIC',
        interest_travel: 'TRAVEL',
        interest_vr: 'VR',
        interest_ar: 'AR',
        interest_sport: 'SPORT',
        interest_books: 'BOOKS',
        interest_write: 'WRITE AND READ',

        skills_title: 'SKILLS',
        technical_skills: 'Technical Skills',
        professional_skills: 'Professional Skills',
        skill_communication: 'Communication',
        skill_teamwork: 'Team work',
        skill_creativity: 'Creativity',
        skill_dedication: 'Dedication',
        skill_management: 'Project Management',
        skill_leadership: 'Leadership',

        contact_title: 'CONTACT',
        contact_paragraph: "Feel free to send me a message here: lr11ramos@gmail.com, I'll try to respond as quick as I can! I'm also on the social networks listed below."
        // Sigue agregando todas las claves con sus textos en inglés...
    },
    es: {
        menu_home: 'INICIO',
        menu_portfolio: 'PORTAFOLIO',
        menu_about: 'SOBRE MÍ',
        menu_skills: 'HABILIDADES',
        menu_contact: 'CONTACTO',
        portfolio_title: 'Portafolio',
        inicio_subtitulo: 'Desarrolladora de videojuegos - Ingeniera Electrónica',
        project1_description: "Spittle's Sewer Saga es una estilizada aventura de acción en la que los jugadores ayudan a Spittle, una valiente rata, a recuperar el queso robado, derrotar al Exterminador y devolver la esperanza a las alcantarillas.",
        project1_contributions: 'Mis contribuciones: ',
        project1_roles: 'Desarrolladora UI-UX & Documentación',
        project2_description: "EchoQuest es una aventura intergaláctica para ayudar a Echo, un robot, a sobrevivir en planetas hostiles y salvar a la humanidad.",
        project2_contributions: 'Mis contribuciones: ',
        project2_roles: 'Desarrolladora UI-UX, Documentación & Presentación',
        project3_title: 'Herramientas de apoyo pedagógico',
        project3_description: "Integración de herramientas digitales para el aprendizaje de circuitos eléctricos de corriente alterna dentro de la ingeniería electrónica.",
        project3_contributions: 'Mis contribuciones: ',
        project3_roles: 'Diseño & Programación',

        aboutme_title: 'Sobre mí',
        aboutme_intro: "Hola, Soy Laura Ramos Achicanoy",
        aboutme_paragraph1: "Soy ingeniera electrónica especializada en desarrollo de videojuegos y llevo varios años creando experiencias inmersivas para la industria del entretenimiento....",
        aboutme_paragraph2: "A lo largo de mi trayectoria, he tenido el placer de trabajar tanto en proyectos de colaboración como en solitario, perfeccionando habilidades como el trabajo en equipo, la adaptabilidad, la creatividad, la gestión del tiempo, la comunicación y el liderazgo...",
        aboutme_paragraph3: 'Si quieres ver alguno de mis proyectos o charlar sobre desarrollo de juegos, ¡no dudes en ponerte en contacto conmigo!',
        aboutme_personalinfo: 'Información Personal',
        aboutme_birthday: 'Cumpleaños',
        aboutme_month: 'Abril',
        aboutme_cellphone: 'Celular',
        aboutme_email: 'Email',
        aboutme_location: 'Ubicación',
        aboutme_interests: 'Intereses',
        interest_games: 'JUEGOS',
        interest_music: 'MÚSICA',
        interest_travel: 'VIAJAR',
        interest_vr: 'RV',
        interest_ar: 'RA',
        interest_sport: 'DEPORTES',
        interest_books: 'LIBROS',
        interest_write: 'ESCRIBIR & LEER',

        skills_title: 'HABILIDADES',
        technical_skills: 'Habilidades técnicas',
        professional_skills: 'Habilidades profesionales',
        skill_communication: 'Comunicación',
        skill_teamwork: 'Trabajo en equipo',
        skill_creativity: 'Creatividad',
        skill_dedication: 'Dedicación',
        skill_management: 'Gestión de proyectos',
        skill_leadership: 'Liderazgo',

        contact_title: 'CONTACTO',
        contact_paragraph: "No dudes en enviarme un mensaje aquí: lr11ramos@gmail.com, ¡intentaré responderte lo antes posible! También estoy en las redes sociales que figuran a continuación."
        // Sigue agregando todas las claves con sus textos en español...
    }
}

function setLanguage(language) {
    const elements = document.querySelectorAll('[data-i18n]')
    elements.forEach(element => {
        const translationKey = element.getAttribute('data-i18n')
        element.innerText = translations[language][translationKey]
    })
}