function mostrarDetalles(nombre, version, tamano, modInfo, linkDescarga, urlImagen) {
  // Ocultamos el inicio y mostramos los detalles
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-detalles').style.display = 'block';

  // Inyectamos los textos en la tabla
  document.getElementById('det-name').innerText = nombre;
  document.getElementById('tab-name').innerText = nombre;
  document.getElementById('tab-version').innerText = version;
  document.getElementById('tab-size').innerText = tamano;
  document.getElementById('tab-mod').innerText = modInfo;
  
  // Cambiamos el icono del juego dinámicamente
  document.getElementById('det-icon').src = urlImagen;
  
  // Configuramos el botón de descarga final con su link y peso
  const btnLink = document.getElementById('btn-download-link');
  btnLink.href = linkDescarga;
  btnLink.innerText = `Download (${tamano})`;
}

function volverAlInicio() {
  // Regresamos a la pantalla principal
  document.getElementById('pantalla-inicio').style.display = 'block';
  document.getElementById('pantalla-detalles').style.display = 'none';
}
