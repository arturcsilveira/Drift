const track = document.querySelector(".carousel-track");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");
const cards = document.querySelectorAll(".testemunha-card");

let currentIndex = 0;

function getCardsPerView() {
  if (window.innerWidth <= 768) {
    return 2;
  }

  return 3;
}

function updateCarousel() {
  const card = cards[0];

  if (!card) return;

  const cardWidth = card.offsetWidth;

  const trackStyle = window.getComputedStyle(track);
  const gap = parseFloat(trackStyle.gap) || 0;

  const moveAmount = (cardWidth + gap) * currentIndex;

  track.style.transform = `translateX(-${moveAmount}px)`;
}

nextButton.addEventListener("click", () => {
  if (currentIndex >= cards.length - getCardsPerView()) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  updateCarousel();
});

prevButton.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = cards.length - getCardsPerView();
  } else {
    currentIndex--;
  }

  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

updateCarousel();
