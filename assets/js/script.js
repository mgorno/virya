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


 function mostrarHorarios() {
    document.getElementById('contenidoPrincipal').classList.add('d-none');
    document.getElementById('horarios').classList.remove('d-none');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function mostrarInicio() {
  document.getElementById('contenidoPrincipal').classList.remove('d-none');
  document.getElementById('horarios').classList.add('d-none');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
