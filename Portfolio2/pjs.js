function scrollToAbout() {
  document.getElementById("about-me").scrollIntoView({ behavior: "smooth" });
}

function scrollToHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToSkills() {
  document.getElementById("scroll-skill").scrollIntoView({ behavior: "smooth" });
}

function scrollToWork() {
  document.getElementById("scroll-work").scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  document.getElementById("scroll-contact").scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const elements = document.querySelectorAll(".slideinleft, .slideinright");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
});





document.addEventListener("DOMContentLoaded", function () {
  function revealOnScroll() {
      const elements = document.querySelectorAll(".sup2dwn");
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {  
              el.classList.add("active"); 
          } else {
              el.classList.remove("active"); 
          }
      });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); 
});



