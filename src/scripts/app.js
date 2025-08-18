"use stick";

/*Base CODE PEN SOURIS modifié CHATGPT */

const round = document.getElementById("round");
  const smallRound = document.getElementById("small_round");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let roundX = mouseX, roundY = mouseY;
  let smallX = mouseX, smallY = mouseY;

  document.body.addEventListener("pointermove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    // Petit rond : suit très vite
    roundX += (mouseX - roundX) * 0.4;
    roundY += (mouseY - roundY) * 0.4;
    round.style.left = roundX + "px";
    round.style.top = roundY + "px";

    // Grand rond : suit presque collé
    smallX += (roundX - smallX) * 0.3;
    smallY += (roundY - smallY) * 0.3;
    smallRound.style.left = smallX + "px";
    smallRound.style.top = smallY + "px";

    requestAnimationFrame(animate);
  }

  animate();


/* PAGE TRANSITION vu en COURS modifié par CHATGPT*/
 document.addEventListener("DOMContentLoaded", () => {
    const bloc2 = document.querySelector(".bloc2");
    const son = document.getElementById("clic-audio");

    const links = document.querySelectorAll("a[href]:not([target='_blank'])");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Ne rien faire pour les ancres internes (ID sur la même page)
        if (!href || href.startsWith("#")) return;

        e.preventDefault();

        // Joue le son uniquement pour les vraies transitions
        if (son) {
          son.currentTime = 0;
          
          son.play();
        }

        // Lance l’animation
        document.body.classList.add("pageAnimation");

        // Redirection après l’animation
        bloc2.addEventListener("animationend", function handle() {
          window.location.href = href;
          bloc2.removeEventListener("animationend", handle);
        });
      });
    });
  });





/* APPARITION CHAT GPT */ 
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // déclenche dès qu’un peu de l’élément est visible
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  
/* CHARGEMENT CHATGPT */


document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // Attendre 3 secondes même si la page est déjà prête
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.transition = "opacity 0.9s ease";

    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 800); // temps du fondu
  }, 2000); // délai avant de commencer à cacher le loader
});


/* CARROUSSEL CodePen et CHATGPT */

let index = 0;
const move = document.getElementById("move");
const items = document.querySelectorAll(".item");

function slide() {
  const carrousel = document.querySelector(".carrousel");
  const itemWidth = items[0].offsetWidth;
  const gap = 20; // marge horizontale définie en CSS
  const step = itemWidth + gap;

  // largeur totale visible
  const containerWidth = carrousel.offsetWidth;

  // calculer l’offset pour centrer l’item actif
  const offset = (containerWidth - itemWidth) / 2;

  move.style.transform = `translateX(${-index * step + offset}px)`;
}

document.getElementById("l").addEventListener("click", () => {
  index = (index <= 0) ? items.length - 1 : index - 1;
  slide();
});

document.getElementById("r").addEventListener("click", () => {
  index = (index >= items.length - 1) ? 0 : index + 1;
  slide();
});

window.addEventListener("resize", slide);

// initialisation
slide();


/* LIGNE DESCEND */

  const path = document.querySelector('path');
  const pathLength = path.getTotalLength();

  // initialise avec la longueur réelle
  path.style.strokeDasharray = pathLength;
  path.style.strokeDashoffset = pathLength;

  window.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = scrolled / scrollableHeight;

    // dessine au fur et à mesure du scroll
    path.style.strokeDashoffset = pathLength * (1 - progress);
  });