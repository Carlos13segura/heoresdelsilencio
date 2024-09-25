/*Masthead*/
document.querySelector('.masthead').addEventListener('mouseover', function() {
    this.querySelector('h1').style.color = 'red';
    this.querySelector('p').style.color = 'blue';
});

document.querySelector('.masthead').addEventListener('mouseout', function() {
    this.querySelector('h1').style.color = '';
    this.querySelector('p').style.color = '';
});

/* Seccion hisotiria */
document.addEventListener("DOMContentLoaded", function() {
    const section = document.getElementById("historia");
    section.style.position = "relative";
    let wave = 0;
    const waveAnimation = setInterval(function() {
      section.style.top = `${Math.sin(wave) * 20}px`;
      wave += 0.1;
    }, 20);
  });

/* Iintegrantes seccion */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('#integrantes .card');
  
  cards.forEach((card, index) => {
      card.style.transform = 'translateY(50px)';
      card.style.opacity = 0;
      card.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
      
      setTimeout(() => {
          card.style.transform = 'translateY(0)';
          card.style.opacity = 1;
      }, index * 200); // Efecto secuencial
  });
});

// Función para mostrar el loader al hacer clic en enlaces
    const spotifyLinks = document.querySelectorAll('.spotify-link, .album-link');
    spotifyLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            loader.style.display = 'flex'; // Mostrar el loader
            
            // Redirigir después de un breve retraso para mostrar el loader
            setTimeout(() => {
                window.open(link.href, '_blank');
                loader.style.display = 'none'; // Ocultar el loader después de abrir el enlace
            }, 1000); // Tiempo de carga, ajusta según sea necesario
        });
    });


/* Galeria */
// Selecciona todas las imágenes de la galería
const galleryImages = document.querySelectorAll('#galeria img');

// Agrega eventos de mouseover y mouseout a cada imagen
galleryImages.forEach(img => {
  img.addEventListener('mouseover', () => {
    img.style.transform = 'scale(1.1) rotate(5deg)';
  });

  img.addEventListener('mouseout', () => {
    img.style.transform = 'scale(1) rotate(0deg)';
  });
});
