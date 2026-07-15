// Función para abrir la pantalla de detalles y rellenar los datos
function mostrarDetalles(nombre, version, peso, novedades, linkDescarga, imagenIcono) {
  // 1. Ocultar la pantalla de inicio y mostrar la de detalles
  document.getElementById('pantalla-inicio').style.display = 'none';
  document.getElementById('pantalla-detalles').style.display = 'block';

  // 2. Rellenar los textos e imágenes con la info del juego seleccionado
  document.getElementById('det-name').innerText = nombre;
  document.getElementById('det-icon').src = imagenIcono;
  
  // Aquí rellenamos la tabla de información
  document.getElementById('det-version').innerText = version;
  document.getElementById('det-peso').innerText = peso;
  document.getElementById('det-novedades').innerText = novedades;

  // 3. Configurar el botón de descarga con su enlace real
  const btnDescargar = document.getElementById('btn-descarga');
  btnDescargar.href = linkDescarga;
}

// Función para volver a la lista de juegos
function volverAlInicio() {
  // Ocultar detalles y volver a mostrar la pantalla principal
  document.getElementById('pantalla-detalles').style.display = 'none';
  document.getElementById('pantalla-inicio').style.display = 'block';
}
