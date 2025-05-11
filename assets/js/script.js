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
    const seccionHorarios = document.getElementById("horarios");
    seccionHorarios.style.display = "block";
    seccionHorarios.scrollIntoView({ behavior: "smooth" });
  }

