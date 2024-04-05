const carousel = document.querySelector('.Carrusel_Materia');
  const movieContainer = carousel.querySelector('.container_Materia');
  const movies = carousel.querySelectorAll('.materia');
  const movieWidth = movies[0].offsetWidth;
  const movieMarginRight = parseInt(window.getComputedStyle(movies[0]).marginRight);
  const totalMoviesWidth = (movieWidth + movieMarginRight) * movies.length;
  let currentPosition = 0;

  carousel.style.width = `${movieWidth}px`;

  movieContainer.style.width = `${totalMoviesWidth}px`;

  function slide(direction) {
    if (direction === 'left') {
      currentPosition = Math.max(currentPosition - movieWidth - movieMarginRight, 0);
    } else {
      currentPosition = Math.min(currentPosition + movieWidth + movieMarginRight, totalMoviesWidth - movieWidth - movieMarginRight);
    }
    movieContainer.style.transform = `translateX(-${currentPosition}px)`;
  }

  // Agrega eventos de clic a las flechas de navegación
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.arrow').forEach(arrow => {
      arrow.addEventListener('click', () => {
        const direction = arrow.classList.contains('arrow-left') ? 'left' : 'right';
        slide(direction);
      });
    });
  });