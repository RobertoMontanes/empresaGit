function relacionarRegistrosUsuarios(registros){
    const listado = document.querySelector('.registros-usuarios');
    registros.forEach(registro => {
    let fila = document.createElement('div');
    fila.innerHTML = 
    `
    <p>ID: ${registro.id}</p>
    <p>Nombre: ${registro.nombre}</p>
    <p>Apellido 1: ${registro.apellido1}</p>
    <p>Apellido 2: ${registro.apellido2}</p>
    <p>Edad: ${registro.edad}</p>
    <hr>
    `
    listado.appendChild(fila);
    });
}
relacionarRegistrosUsuarios(registros);