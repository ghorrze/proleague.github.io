// =========================================================================
// ПОСТРАНИЧНЫЙ СМАРТ-СКРОЛЛ В ОБЕ СТОРОНЫ (БЕЗ ОБЫЧНОГО СКРОЛЛА)
// =========================================================================

const sections = [
    document.querySelector('.hero'),
    document.getElementById('teams-section')
];

let currentSectionIndex = 0;
let isScrollTransitioning = false;

// Функция плавного перемещения к указанной секции
// Функция плавного перемещения к указанной секции
function scrollToSection(index) {
    if (index < 0 || index >= sections.length) return;
    
    const targetSection = sections[index];
    if (!targetSection) return;

    isScrollTransitioning = true;
    currentSectionIndex = index;

    // На сколько пикселей опустить экран ниже при переходе к командам
    // (Поменяйте 80 на любое другое число, если нужно еще ниже или выше)
    const scrollOffset = index === 1 ? 65 : 0; 

    // Вычисляем точную позицию с учетом отступа
    const targetPosition = targetSection.offsetTop + scrollOffset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    setTimeout(() => {
        isScrollTransitioning = false;
    }, 100); 
}

// 1. Обработка колесика мыши и тачпадов ноутбуков
window.addEventListener('wheel', function(e) {
    // Полностью запрещаем стандартную прокрутку браузера
    e.preventDefault();

    if (isScrollTransitioning) return;

    if (e.deltaY > 0) {
        // Колесико вниз -> к командам (секция 1)
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }
    } else if (e.deltaY < 0) {
        // Колесико вверх -> к заставке (секция 0)
        if (currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    }
}, { passive: false }); // passive: false обязателен для работы e.preventDefault()

// 2. Обработка свайпов на смартфонах и планшетах
let touchStartPos = 0;

window.addEventListener('touchstart', function(e) {
    touchStartPos = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', function(e) {
    if (isScrollTransitioning) {
        e.preventDefault();
        return;
    }

    const touchEndPos = e.touches[0].clientY;
    const swipeDistance = touchStartPos - touchEndPos;

    // Если свайп достаточно длинный (более 50px), чтобы избежать случайных нажатий
    if (Math.abs(swipeDistance) > 50) {
        e.preventDefault(); // Запрещаем стандартный мобильный скролл

        if (swipeDistance > 0) {
            // Свайп вверх -> листаем вниз к командам
            if (currentSectionIndex < sections.length - 1) {
                scrollToSection(currentSectionIndex + 1);
            }
        } else {
            // Свайп вниз -> листаем вверх к заставке
            if (currentSectionIndex > 0) {
                scrollToSection(currentSectionIndex - 1);
            }
        }
    }
}, { passive: false });

// 3. Корректировка при изменении размера экрана (чтобы секция не «съезжала»)
window.addEventListener('resize', () => {
    const targetSection = sections[currentSectionIndex];
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'auto'
        });
    }
});