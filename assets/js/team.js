function toggleMenu() {
    var menu = document.getElementById("dropdown-content");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    // Si deseas utilizar la variable menuAbierto, debes declararla aquí
  }
  
  // Animación de opacidad del logo
  const logo = document.querySelector("#ec");
  const pulse = function() {
    logo.style.opacity = logo.style.opacity === "1" ? "0.5" : "1";
  };
  setInterval(pulse, 1000);
  
  // Cambio de modo oscuro a claro
  var elements = ["doctors", "header"];
  
  var darkModeBtn = document.getElementById("dark-mode-btn");
  var icon = document.getElementById("icon");
  
  darkModeBtn.addEventListener("click", function() {
    elements.forEach(function(elementId) {
      var element = document.getElementById(elementId);
      element.classList.toggle("bg-dark");
      element.classList.toggle("text-light");
    });
  
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  });
  