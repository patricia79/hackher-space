
// Desplegar navbar --------------------------------------------

document.getElementById("toggle-btn").addEventListener("click", function() {
    let NavHoriz = document.getElementById("nav-horizontal");
    let MENU = document.getElementById("menu");
    
    NavHoriz.classList.toggle("abierto"); // Alterna la clase open
  
    // Agregar un pequeño retraso en la transición de los items
    if (NavHoriz.classList.contains("abierto")) {
      setTimeout(() => MENU.style.opacity = "1", 200);
    } else {
      MENU.style.opacity = "0";
    }
});

