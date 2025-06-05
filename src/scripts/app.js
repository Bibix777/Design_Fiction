"use stick";

/*Base CODE PEN SOURIS modifié CHATGPT */

const round = document.getElementById("round");
document.body.onpointermove = event => {
  const { clientX, clientY } = event;
  
  round.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 300, fill: "forwards"});
  

  
 
}


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
