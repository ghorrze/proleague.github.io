// =========================================================================
// ОСНОВНАЯ ЛОГИКА САЙТА И ИНТЕРФЕЙСА
// =========================================================================
const teamsGrid = document.getElementById('teamsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

const modalLogo = document.getElementById('modalLogo');
const modalTeamName = document.getElementById('modalTeamName');
const modalDescription = document.getElementById('modalDescription');
const modalRoster = document.getElementById('modalRoster');

// Отрисовка карточек на главной странице
function renderTeams() {
    if (!teamsGrid) return;
    teamsGrid.innerHTML = '';
    
    // Переменная teamsData берется из файла data.js автоматически
    teamsData.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.setAttribute('data-id', team.id);
        
        card.innerHTML = `
            <div class="team-logo-container">
                <img src="${team.logo}" alt="${team.name}" class="team-logo">
            </div>
            <div class="team-name">${team.name}</div>
            <div class="click-hint">Открыть состав</div>
        `;
        
        card.addEventListener('click', () => openTeamDetails(team.id));
        teamsGrid.appendChild(card);
    });
}

// Открытие модального окна команды и определение цветовой гаммы для ролей
function openTeamDetails(id) {
    const team = teamsData.find(t => t.id === id);
    if (!team) return;

    modalLogo.src = team.logo;
    modalLogo.alt = team.name;
    modalTeamName.textContent = team.name;
    modalDescription.textContent = team.description;

    modalRoster.innerHTML = '';
    team.players.forEach(player => {
        const li = document.createElement('li');
        li.className = 'roster-item';
        
        const formattedName = `${player.firstName} <span class="player-nickname">"${player.nickname}"</span> ${player.lastName}`;
        
        // Алгоритм распознавания ролей по ключевым словам
        let roleClass = 'role-default';
        const roleLower = player.role.toLowerCase();

        if (roleLower.includes('igl')) {
            roleClass = 'role-captain';
        } else if (roleLower.includes('awp')) {
            roleClass = 'role-awp';
        } else if (roleLower.includes('rifler')) {
            roleClass = 'role-rifler';
        } else if (roleLower.includes('entry')) {
            roleClass = 'role-entry';
        } else if (roleLower.includes('support')) {
            roleClass = 'role-support';
        } else if (roleLower.includes('coach')) {
            roleClass = 'role-coach';
        }
        
        li.innerHTML = `
            <div class="player-full-name">${formattedName}</div>
            <span class="player-role ${roleClass}">${player.role}</span>
        `;
        modalRoster.appendChild(li);
    });

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модального окна
function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
}

// Поддержка тач-скринов для телефонов
let touchStartY = 0;

window.addEventListener('touchstart', function(e) {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

window.addEventListener('touchmove', function(e) {
    const touchEndY = e.touches[0].clientY;
    
    if (window.scrollY < 50 && touchStartY - touchEndY > 50 && !isScrolling) {
        isScrolling = true;
        const target = document.getElementById('teams-section');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
}, { passive: true });

// Запуск инициализации при загрузке документа
document.addEventListener('DOMContentLoaded', renderTeams);

// Ждем полной загрузки DOM-дерева, чтобы кнопка гарантированно существовала
document.addEventListener('DOMContentLoaded', () => {
    const toTeamsBtn = document.getElementById('toTeamsBtn');

    if (toTeamsBtn) {
        toTeamsBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            if (typeof window.scrollToSection === 'function') {
                window.scrollToSection(1);
            } else {
                console.warn("Функция scrollToSection не найдена в window!");
            }
        });
    }
});

// =========================================================================
// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ НА ESCAPE
// =========================================================================
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
        // Если у вас в коде уже объявлена функция закрытия, просто вызываем её:
        if (typeof closeModal === 'function') {
            closeModal();
        }
    }
});