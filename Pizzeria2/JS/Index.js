// Para darle borde al seleccionar la bandera de index.html
function cambiarBorderBoton(id) {
  document.getElementById('imagen_esp_bandera').style.border = '';
  document.getElementById('imagen_ingles_bandera').style.border = '';
  document.getElementById('imagen_esp_bandera').style.boxShadow = '';

  if (id === 'esp') {
      document.getElementById('imagen_esp_bandera').style.border = '4px solid #fff';
  } else if (id === 'ingles') {
      document.getElementById('imagen_ingles_bandera').style.border = '4px solid #fff';
  }

  document.getElementById('ContenidoCarta').innerHTML = (id === 'ingles') ? 'See menu' : 'Ver carta';
}

// Para marcar como activo el enlace del índice con un borde inferior
document.addEventListener("DOMContentLoaded", function () {
  const enlaces = document.querySelectorAll(".seleccion_productos a");

  enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function () {
          enlaces.forEach((e) => e.classList.remove("activo"));
          this.classList.add("activo");
      });
  });
});

//----------------------------SIDEBAR------------------------------------------------

// Para abrir y cerrar el sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

// Función para abrir/cerrar el sidebar
menuToggle.addEventListener("click", (event) => {
  event.stopPropagation(); // Evita que el clic en el botón cierre el sidebar inmediatamente
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
});

// Evita que los clics dentro del sidebar lo cierren
sidebar.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Cerrar sidebar al hacer clic fuera de él o en el overlay
document.addEventListener("click", (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      sidebar.classList.remove("open");
      overlay.classList.remove("active");
  }
});

// Cerrar el sidebar si se hace clic en el overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});

// Para el menú desplegable del sidebar
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
  });
});

//----------------------------MODAL------------------------------------------------

// Obtener el modal y el botón de apertura
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Mostrar el modal al hacer clic en el icono
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de él
window.addEventListener("click", function(event) {
  if (event.target === modal) {
      modal.style.display = "none";
  }
});


//----------------------------SEARCH------------------------------------------------

// Elementos
const searchIcon = document.getElementById("search-icon");
const searchOverlay = document.getElementById("search-overlay");
const backIcon = document.getElementById("back-icon");

// Mostrar el input y fondo blanco al hacer clic en la lupa
searchIcon.addEventListener("click", () => {
  searchOverlay.style.display = "flex"; // Muestra el overlay con el input
});

// Volver al estado anterior al hacer clic en la flecha
backIcon.addEventListener("click", () => {
  searchOverlay.style.display = "none"; // Oculta el overlay
});
