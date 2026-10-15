// The same two-page document is available as a downloadable PDF.
const pageImage = document.querySelector('[data-cv-page]');
const counter = document.querySelector('[data-cv-counter]');
const previous = document.querySelector('[data-cv-action="prev"]');
const next = document.querySelector('[data-cv-action="next"]');
const zoom = document.querySelector('[data-cv-zoom]');
let currentPage = 1;

function renderPage() {
  pageImage.src = `assets/images/cv-20261014-${currentPage}.jpg`;
  pageImage.alt = `Xuechun Yu CV — page ${currentPage} of 2`;
  counter.textContent = `${currentPage} / 2`;
  previous.disabled = currentPage === 1;
  next.disabled = currentPage === 2;
  pageImage.parentElement.scrollTop = 0;
}

previous.addEventListener('click', () => { currentPage--; renderPage(); });
next.addEventListener('click', () => { currentPage++; renderPage(); });
zoom.addEventListener('change', () => { pageImage.style.width = `${zoom.value}%`; });
renderPage();
