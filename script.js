function mostrarDetalles(nombre, version, peso, novedades, urlV8a, urlV7a, icono) {
  document.getElementById('det-name').textContent = nombre;
  document.getElementById('det-version').textContent = version;
  document.getElementById('det-peso').textContent = peso;
  document.getElementById('det-novedades').textContent = novedades;
  
  // Asignar icono
  document.getElementById('det-icon').src = icono;

  // Asignar enlaces directos a los botones
  document.getElementById('btn-descarga-v8a').href = urlV8a;
  document.getElementById('btn-descarga-v7a').href = urlV7a;

  // Mostrar pantalla
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-detalles').style.display = 'block';
}

function volverAlInicio() {
  // Oculta la vista de detalles
  document.getElementById('pantalla-detalles').style.display = 'none';
  
  // Muestra la pantalla principal de tarjetas
  document.getElementById('pantalla-inicio').style.display = 'grid';
}
