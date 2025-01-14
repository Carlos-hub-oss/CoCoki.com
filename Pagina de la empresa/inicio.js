let indice = 0;

function moverCarrusel(direccion) {
  const mover = document.querySelector(".mover");
  const comentarios = document.querySelectorAll(".comentario");
  const totalComentarios = comentarios.length;

  indice += direccion;

  if (indice < 0) {
    indice = totalComentarios - 1;
  } else if (indice >= totalComentarios) {
    indice = 0;
  }

  const desplazamiento = -indice * 100; 
  mover.style.transform = `translateX(${desplazamiento}%)`;
}