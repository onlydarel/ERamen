let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("ramen-cont");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

const slider = document.querySelector(".sd-slider");
const slides = document.querySelectorAll(".sd-slide");
const slideWidth = slides[0].offsetWidth;
const sliderWidth = slider.offsetWidth;
const maxTranslate = sliderWidth - slideWidth;

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("touchstart", dragStart);
slider.addEventListener("mouseup", dragEnd);
slider.addEventListener("touchend", dragEnd);
slider.addEventListener("mousemove", drag);
slider.addEventListener("touchmove", drag);

function dragStart(event) {
  event.preventDefault();
  if (event.type === "touchstart") {
    startPos = event.touches[0].clientX;
  } else {
    startPos = event.clientX;
  }
  isDragging = true;
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.type === "touchmove" ? event.touches[0].clientX : event.clientX;
    const diff = currentPosition - startPos;
    currentTranslate = prevTranslate + diff;

    const maxLeftTranslate = 0;
    const maxRightTranslate = -1400;
    currentTranslate = Math.max(Math.min(currentTranslate, maxLeftTranslate), maxRightTranslate);

    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function dragEnd() {
  prevTranslate = currentTranslate;
  isDragging = false;
}
