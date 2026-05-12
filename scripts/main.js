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
const substitutesContainer = document.getElementById('substitutesContainer');
const modalSubstitutes = document.getElementById('modalSubstitutes');

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

// Функция подбора CSS-класса для конкретной роли
function getRoleClass(role) {
    if (!role) return 'role-default';
    
    const roleLower = role.toLowerCase().trim();

    if (roleLower.includes('igl') || roleLower.includes('captain')) {
        return 'role-captain';
    } else if (roleLower.includes('awp')) {
        return 'role-awp';
    } else if (roleLower.includes('entry')) {
        return 'role-entry';
    } else if (roleLower.includes('rifler')) {
        return 'role-rifler';
    } else if (roleLower.includes('lurker') || roleLower.includes('люркер')) {
        return 'role-lurker';
    } else if (roleLower.includes('support')) {
        return 'role-support';
    } else if (roleLower.includes('coach')) {
        return 'role-coach';
    }
    
    return 'role-default';
}

// Функция для генерации HTML-кода ролей (поддерживает одну или несколько ролей сразу)
function renderPlayerRoles(roleData) {
    if (!roleData) return '';

    let rolesArray = [];

    // Если роли переданы массивом
    if (Array.isArray(roleData)) {
        rolesArray = roleData;
    } 
    // Если роли переданы строкой (например, "Lurker, Rifler")
    else if (typeof roleData === 'string') {
        rolesArray = roleData.split(/[,/]+/).map(r => r.trim());
    }

    // Генерируем массив бэджей и объединяем их пробелом
    return rolesArray.map(role => {
        const roleClass = getRoleClass(role);
        return `<span class="player-role ${roleClass}">${role}</span>`;
    }).join(' ');
}

// Открытие модального окна команды
function openTeamDetails(id) {
    const team = teamsData.find(t => t.id === id);
    if (!team) return;

    modalLogo.src = team.logo;
    modalLogo.alt = team.name;
    modalTeamName.textContent = team.name;
    modalDescription.textContent = team.description;

    // 1. Рендерим основной состав
    modalRoster.innerHTML = '';
    team.players.forEach(player => {
        modalRoster.appendChild(createPlayerCard(player));
    });

    // 2. Рендерим игроков запаса (если они есть в data.js)
    modalSubstitutes.innerHTML = '';
    if (team.substitutes && team.substitutes.length > 0) {
        team.substitutes.forEach(player => {
            modalSubstitutes.appendChild(createPlayerCard(player, true));
        });
        substitutesContainer.style.display = 'block'; // Показываем блок запаса
    } else {
        substitutesContainer.style.display = 'none';  // Скрываем блок, если запаса нет
    }

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function createPlayerCard(player, isSubstitute = false) {
    const li = document.createElement('li');
    // Если игрок из запаса, добавим ему дополнительный класс для стилизации
    li.className = `roster-item ${isSubstitute ? 'substitute-item' : ''}`;
    
    const formattedName = `${player.firstName} <span class="player-nickname">"${player.nickname}"</span> ${player.lastName}`;
    
    li.innerHTML = `
        <div class="player-full-name">${formattedName}</div>
        <div class="player-roles-list">
            ${renderPlayerRoles(player.role)}
        </div>
    `;
    return li;
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
        if (typeof closeModal === 'function') {
            closeModal();
        }
    }
});