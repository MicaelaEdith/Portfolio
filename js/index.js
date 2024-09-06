document.addEventListener('DOMContentLoaded', function () {
    const carousels = {
      '#carouselDesktop': {
        texts: [
          'Free TTS - Kivy App: <br> Una app para pasar texto a audio construida con Python y Kivy basada en coqui TTS.<br><br>Clickea en la imagen para ver su código.',
          'StockFlow - Desktop App: <br>Una app para gestión de E-commerce que cuenta con control de stock, ventas y estadísticas. Desarrollada en .Net, C# con sqlServer. La interfaz fue desarrollada con winforms y MaterialSkin2.<br><br>Clickea en la imagen para ver su código.',
          'E-Teacher - Desktop App: <br>App para profesores que sirve para gestionar, cursos y alumnso. También fue desarrollada en .Net, C# con sqlServer y la interfaz fue desarrollada con winforms y MaterialSkin2.<br><br>Clickea en la imagen para ver su código.',
        ],
        textId: 'desktopText'
      },
      '#carouselWeb': {
        texts: [
          'Flask Blog: <br>Un pequeño blog desarrollado con Python utilizando el micro framework Flask.<br><br>Clickea en la imagen para ver su código.',
          'React Movies: <br>Pequeña web de películas utilizando React y la API de themoviedb.org.<br><br>Clickea en la imagen para ver su código.<br>              <a href="https://micaelaedith.github.io/react-movies/" target="_blank">Link a la página.</a>'
        ],
        textId: 'webText'
      },
      '#carouselGame': {
        texts: [
          'Combate Aéreo - Pygame: <br>Un pequeño juego retro estilo pixel art desarrollado en Python utilizando la biblioteca Pygame.<br><br>Clickea en la imagen para ver su código.',
          'Holt´s scape - Unity: <br>Primer nivel de un proyecto de plataformas diseñado con blander y desarrollado con Unity y C#.<br><br>Clickea en la imagen para ver su código.'
        ],
        textId: 'gameText'
      }
    };

    function updateText(carouselId, textIndex) {
    const { textId } = carousels[carouselId];
    const textElement = document.getElementById(textId);
    if (textElement) {
      textElement.innerHTML = carousels[carouselId].texts[textIndex];
    }
  }

  function initializeTexts() {
    for (const [carouselId, { texts }] of Object.entries(carousels)) {
      updateText(carouselId, 0);
    }
  }

  initializeTexts();

  for (const [carouselId, { texts }] of Object.entries(carousels)) {
    const carousel = document.querySelector(carouselId);
    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', function (event) {
        const textIndex = event.to % texts.length;
        updateText(carouselId, textIndex);
      });
    }
  }
});

function changeSkillIcons() {
    const skillIcons = document.getElementById('skillicons');
    const mediaQuery = window.matchMedia("(max-width: 768px)");
  
    if (mediaQuery.matches) {
      skillIcons.src = "https://skillicons.dev/icons?i=cs,java,py,dotnet,spring,flask,html,css,js,bootstrap,react,mysql,unity,blender&perline=4";
    } else {
      skillIcons.src = "https://skillicons.dev/icons?i=cs,java,py,dotnet,spring,maven,flask,html,css,js,bootstrap,react,php,mysql,sqlite,unity,blender,ps&perline=6";
    }
  }
  
  window.addEventListener('resize', changeSkillIcons);
  
  window.addEventListener('load', changeSkillIcons);
  
  var submitted = false;

  function validateForm() {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (email === "" || !emailPattern.test(email)) {
      alert("Por favor, ingrese un email válido.");
      return false;
    }
  
    if (message === "") {
      alert("Por favor, ingrese su mensaje.");
      return false;
    }
  
    submitted = true;
    return true;
  }
  
  function handleIframeLoad() {
    if (submitted) {
      alert('Formulario enviado correctamente.');
      
      window.scrollTo(0, 0); 
      
      setTimeout(function() {
        location.reload();  
      }, 2000);
    }
  }
  