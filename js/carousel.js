// carousel.js

// Example: Basic Image Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = carousel.querySelectorAll('.carousel-slide');
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === i ? 'block' : 'none';
        });
    }

    showSlide(index);

    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3000); // Change slide every 3 seconds
});
