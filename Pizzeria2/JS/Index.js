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

  document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll(".seleccion_productos a");
  
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function () {
        enlaces.forEach((e) => e.classList.remove("activo"));
        this.classList.add("activo");
      });
    });
  });

  
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});


