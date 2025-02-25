const numero_clicks = document.getElementById('numero-click');
let contador = 0;
const boton = document.getElementById('circulo')
boton.addEventListener('click', function(){
    contador++;
    numero_clicks.textContent = contador;
    
})
