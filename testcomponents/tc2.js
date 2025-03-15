var swiper = new Swiper(".swiper", {
    initialSlide: 3,
    centeredSlides: true,
    loop: true,
    speed: 900,
    grabCursor: true,
    allowTouchMove: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: -10,
      stretch: -45,
      depth: 90,
      modifier: 1,
      slideShadows: true,
    },
    mousewheel: {
      thresholdDelta: 50,
      sensitivity: 1,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true, 
    },
    breakpoints: {
      0: { 
        slidesPerView: 1, 
        spaceBetween: 20 
      },
      600: { 
        slidesPerView: 3, 
        spaceBetween: 20
      },
      1200: { 
        slidesPerView: 5, 
        spaceBetween: 20 
      },
    },
  });

  const slides = document.querySelectorAll(".swiper-slide");

// Function to flip active slide
function flipActiveSlide() {
    const activeSlide = document.querySelector(".swiper-slide-active");
    if (!activeSlide) return;

    const button = activeSlide.querySelector("button");
    if (button && !button.dataset.listenerAdded) {
        button.dataset.listenerAdded = "true"; // Prevent duplicate listeners
        button.addEventListener("click", (event) => {
            event.stopPropagation();
            activeSlide.classList.toggle("flipped");
        });
    }
}

// Click event for flipping slides
slides.forEach((slide) => {
    slide.addEventListener("click", () => {
        if (slide.classList.contains("swiper-slide-active")) {
            slide.classList.toggle("flipped");
        }
    });
});

// Reset flip state on slide change
swiper.on("slideChangeTransitionStart", () => {
    slides.forEach((slide) => {
        slide.classList.remove("flipped");
    });
    flipActiveSlide();
});

// Ensure the active slide's button is initialized on load
flipActiveSlide();
