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

  // Cierra menú en vista móvil si está abierto
  const menu = document.getElementById('menuYoga');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  }

  // Si usás botón hamburguesa personalizado
  const hamburger = document.getElementById('hamburgerBtn');
  if (hamburger) {
    hamburger.classList.remove('open');
  }
}

