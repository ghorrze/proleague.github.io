// =========================================================================
// СЛАЙДШОУ НА ЗАСТАВКЕ
// =========================================================================
const slideImages = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop", // Оригинальная (арена)
];

function initSlideshow() {
    const container = document.getElementById('heroSlideshow');
    if (!container) return;

    container.innerHTML = '';
    
    slideImages.forEach((url, index) => {
        const slide = document.createElement('div');
        slide.className = `hero-slide${index === 0 ? ' active' : ''}`;
        slide.style.backgroundImage = `url('${url}')`;
        container.appendChild(slide);
    });

    const slides = container.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return; // Нет смысла крутить слайды, если картинка одна

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000); // Смена каждые 5 секунд
}

document.addEventListener('DOMContentLoaded', initSlideshow);