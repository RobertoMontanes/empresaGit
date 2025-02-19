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


    if (id === 'ingles') {
      document.getElementById('ContenidoCarta').innerHTML = 'See menu';
    } else {
      document.getElementById('ContenidoCarta').innerHTML = 'Ver carta';
    }
  }

// Para marcar como activo el enlace del indice con un borde inferior

  document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".seleccion_productos a");
  
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function () {
        enlaces.forEach((e) => e.classList.remove("activo"));
        this.classList.add("activo");
      });
    });
  });

// Para abrir y cerrar el sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

// Para el menú desplegable del sidebar
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  });
});


// Obtener el modal y el botón de apertura
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Cuando se hace clic en el icono, se muestra el modal
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Cuando se hace clic en el botón de cerrar, se oculta el modal
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Cuando se hace clic fuera del modal, también se cierra
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

