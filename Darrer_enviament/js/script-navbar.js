// Desplegar navbar HORIZONTAL --------------------------------------

document.getElementById("toggle-btn-horiz").addEventListener("click", function() {
  let NavHoriz = document.getElementById("nav-horizontal");
  let MENUHoriz = document.getElementById("menu-horiz");
  
  NavHoriz.classList.toggle("abierto"); // Alterna la clase open

  // Agregar un pequeño retraso en la transición de los items
  if (NavHoriz.classList.contains("abierto")) {
    setTimeout(() => MENUHoriz.style.opacity = "1", 200);
  } else {
    MENUHoriz.style.opacity = "0";
  }
});

// Desplegar navbar VERTICAL--------------------------------------------

document.getElementById("toggle-btn").addEventListener("click", function() {
    let NavVert = document.getElementById("nav-vertical");
    let MENUvert = document.getElementById("menu-vert");
    
    NavVert.classList.toggle("abierto"); // Alterna la clase open
  
    // Agregar un pequeño retraso en la transición de los items
    if (NavVert.classList.contains("abierto")) {
      setTimeout(() => MENUvert.style.opacity = "1", 200);
    } else {
      MENUvert.style.opacity = "0";
    }
});

