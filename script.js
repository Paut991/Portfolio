let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills =
    window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("html");
    habilidades[2].classList.add("css");
    habilidades[3].classList.add("android");
    habilidades[4].classList.add("php");
    habilidades[5].classList.add("sql");
    habilidades[6].classList.add("java");
    habilidades[7].classList.add("shopify");
    habilidades[8].classList.add("comunicacion");
    habilidades[9].classList.add("trabajo");
    habilidades[10].classList.add("creatividad");
    habilidades[11].classList.add("dedicacion");
    habilidades[12].classList.add("liderazgo");
    habilidades[13].classList.add("tiempo");
    habilidades[14].classList.add("adaptabilidad");
    habilidades[15].classList.add("sociales");
  }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
  efectoHabilidades();
};
