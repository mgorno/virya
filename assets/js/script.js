window.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  fadeElements.forEach(el => observer.observe(el));
});

const burger = document.getElementById('hamburgerBtn');
const menu = document.getElementById('menuYoga');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('show');
});
function marcarItemActivo(id) {
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.classList.remove('active');
  });

  const links = document.querySelectorAll('.navbar-nav .nav-link');
  links.forEach(link => {
    if (link.getAttribute('onclick')?.includes(id)) {
      link.classList.add('active');
    }
  });
}

function mostrarSeccion(id) {
  // Oculta todas las secciones
  document.querySelectorAll('.seccion').forEach(seccion => {
    seccion.classList.add('d-none');
  });

  // Muestra la sección seleccionada
  const seccionActiva = document.getElementById(id);
  if (seccionActiva) {
    seccionActiva.classList.remove('d-none');
  }

  // Actualiza el item activo del menú
  marcarItemActivo(id);

  // Cierra el menú en móviles
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    burger.classList.remove('active');
  }
}


