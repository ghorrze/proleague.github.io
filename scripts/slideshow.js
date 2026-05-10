// =========================================================================
// СЛАЙДШОУ НА ЗАСТАВКЕ (Облегченная и безопасная версия)
// =========================================================================
const slideImages = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop", 
];

function initSlideshow() {
    const container = document.getElementById('heroSlideshow');
    if (!container) {
        console.error("Слайдшоу: Контейнер #heroSlideshow не найден в HTML!");
        return;
    }

    container.innerHTML = '';
    
    // Создаем слайды
    slideImages.forEach((url, index) => {
        const slide = document.createElement('div');
        // Первый слайд сразу делаем активным
        slide.className = `hero-slide${index === 0 ? ' active' : ''}`;
        slide.style.backgroundImage = `url('${url}')`;
        container.appendChild(slide);
    });

    const slides = container.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    // Смена слайдов каждые 5 секунд (5000 мс)
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Запуск инициализации
document.addEventListener('DOMContentLoaded', () => {
    console.log("Слайдшоу: Инициализация...");
    initSlideshow();
});