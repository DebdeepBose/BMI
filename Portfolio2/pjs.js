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

function flip_it(id) {
  document.getElementById(id).classList.toggle("flip");
}




