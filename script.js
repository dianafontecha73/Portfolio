// función para ocultar o mostrar menú

let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true
    }
}

//se oculta el menú al seleccionar una opción

function seleccionar(){
    document.getElementById("nav").classList ="";
    menuVisible = false
}

// Función para aplicar animación a las habilidades

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("django");
        habilidades[5].classList.add("bootstrap");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("proyecto");
    }
}

// Se detecta el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}
