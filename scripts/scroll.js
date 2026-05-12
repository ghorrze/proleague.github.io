// =========================================================================
// ЛОГИКА ПЛАВНОГО ПОЭКРАННОГО СКРОЛЛА
// =========================================================================
const sections = [
    document.querySelector('.hero'),
    document.getElementById('teams-section')
];

let currentSectionIndex = 0;
let isScrollTransitioning = false;

function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    
    const targetSection = sections[index];
    if (!targetSection) return;

    isScrollTransitioning = true;
    currentSectionIndex = index;

    const scrollOffset = index === 1 ? 65 : 0; 
    const targetPosition = targetSection.offsetTop + scrollOffset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    // Даем время на завершение анимации скролла
    setTimeout(() => {
        isScrollTransitioning = false;
    }, 800); // Увеличил таймаут для более плавной работы колесика
}

// Делаем функцию глобальной, чтобы ее видела кнопка в main.js
window.scrollToSection = scrollToSection;

// Перехват скролла колесиком мыши
window.addEventListener('wheel', function(e) {
    // ВАЖНЫЙ ФИКС: Если открыто модальное окно, не блокируем скролл!
    const modal = document.getElementById('modalOverlay');
    if (modal && modal.classList.contains('active')) return;

    if (isScrollTransitioning) {
        e.preventDefault();
        return;
    }

    e.preventDefault();

    if (e.deltaY > 0) {
        if (currentSectionIndex < sections.length - 1) scrollToSection(currentSectionIndex + 1);
    } else if (e.deltaY < 0) {
        if (currentSectionIndex > 0) scrollToSection(currentSectionIndex - 1);
    }
}, { passive: false }); 

// Перехват свайпов на телефонах
let touchStartPos = 0;

window.addEventListener('touchstart', function(e) {
    touchStartPos = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', function(e) {
    // ВАЖНЫЙ ФИКС: Если открыто модальное окно, разрешаем свайпать внутри него!
    const modal = document.getElementById('modalOverlay');
    if (modal && modal.classList.contains('active')) return;

    if (isScrollTransitioning) {
        e.preventDefault();
        return;
    }

    const touchEndPos = e.touches[0].clientY;
    const swipeDistance = touchStartPos - touchEndPos;

    if (Math.abs(swipeDistance) > 50) {
        e.preventDefault(); 
        if (swipeDistance > 0) {
            if (currentSectionIndex < sections.length - 1) scrollToSection(currentSectionIndex + 1);
        } else {
            if (currentSectionIndex > 0) scrollToSection(currentSectionIndex - 1);
        }
    }
}, { passive: false });

// Авто-корректировка при изменении размера окна (повороте телефона)
window.addEventListener('resize', () => {
    const targetSection = sections[currentSectionIndex];
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'auto'
        });
    }
});