const slider = document.querySelector('.slider');
const dotsContainer = document.querySelector('.dot-container');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let images = [];
let currentIndex = 0;

/* ===============================
   1. FETCH IMAGES FROM API
================================ */
async function fetchListOfImg() {
  try {
    const response = await fetch(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    const imagesList = await response.json();

    if (imagesList && imagesList.length > 0) {
      images = imagesList;
      displayImages(images);
      updateSlider();
    }
  } catch (error) {
    console.log(error);
  }
}

/* ===============================
   2. DISPLAY IMAGES + DOTS
================================ */
function displayImages(getImageList) {
  // Slides
  slider.innerHTML = getImageList
    .map(
      (item) => `
      <div class="slide">
        <img src="${item.download_url}" alt="${item.id}">
      </div>
    `
    )
    .join("");

  // Dots
  dotsContainer.innerHTML = getImageList
    .map(
      (_, index) =>
        `<span class="dot ${index === 0 ? "active" : ""}" data-index="${index}"></span>`
    )
    .join("");
}

/* ===============================
   3. UPDATE SLIDER POSITION
================================ */
function updateSlider() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
  });

  updateDots();
}

/* ===============================
   4. UPDATE DOT ACTIVE STATE
================================ */
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

/* ===============================
   5. BUTTON CONTROLS
================================ */
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex =
    (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

/* ===============================
   6. DOT CLICK
================================ */
dotsContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    currentIndex = Number(e.target.dataset.index);
    updateSlider();
  }
});

/* ===============================
   7. START APP
================================ */
fetchListOfImg();
