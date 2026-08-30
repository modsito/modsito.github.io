function mostrarDetalles(nombre, version, peso, novedades, urlV8a, urlV7a, icono) {
  document.getElementById('det-name').textContent = nombre;
  document.getElementById('det-version').textContent = version;
  document.getElementById('det-peso').textContent = peso;
  document.getElementById('det-novedades').textContent = novedades;
  document.getElementById('det-icon').src = icono;
  
  // Asignamos las dos URLs a sus respectivos botones
  document.getElementById('btn-descarga-v8a').href = urlV8a;
  document.getElementById('btn-descarga-v7a').href = urlV7a;

  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-detalles').style.display = 'block';
}
