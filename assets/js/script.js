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
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(sec => sec.classList.add('d-none'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const menu = document.getElementById('menuYoga');
  const burger = document.getElementById('hamburgerBtn');
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    burger.classList.remove('active');
  }
}
