// =========================================================================
// ДАННЫЕ О КОМАНДАХ (Вы можете легко менять их здесь вручную)
// =========================================================================
const teamsData = [
    {
        id: 1,
        name: "Virtus.Pro 2",
        logo: "https://placehold.co/100x100/de9b35/ffffff?text=VP2",
        description: "Академический состав легендарной организации Virtus.Pro. Молодые таланты, готовые ворваться на тир-1 сцену CS2.",
        players: ["player_1", "player_2", "player_3", "player_4", "player_5"]
    },
    {
        id: 2,
        name: "Mentai Squad",
        logo: "https://placehold.co/100x100/235ecf/ffffff?text=MS",
        description: "Агрессивный стиль игры и нестандартные тактические решения выделяют эту команду среди остальных претендентов.",
        players: ["Sempai", "MentaL", "Chidori", "Shogun", "Ronin"]
    },
    {
        id: 3,
        name: "Guboshleps",
        logo: "https://placehold.co/100x100/de3535/ffffff?text=GS",
        description: "Команда-мем, которая неожиданно для всех начала выигрывать региональные квалификации. Их главная сила — синергия и юмор.",
        players: ["Guba", "Shlep", "Pupa", "Lupa", "Buster"]
    },
    // {
    //     id: 4,
    //     name: "Team Spilis",
    //     logo: "https://placehold.co/100x100/35de79/ffffff?text=TS",
    //     description: "Сбалансированный коллектив с упором на сильную дефенс-сторону. Медленный и тягучий стиль игры заставляет соперников ошибаться.",
    //     players: ["Spil", "Hardy", "Focus", "Zeal", "Apex"]
    // },
    {
        id: 5,
        name: "Zubry Gaming",
        logo: "https://placehold.co/100x100/9b35de/ffffff?text=ZG",
        description: "Настоящие мастодонты локальной сцены. Невероятный опыт и хладнокровие в самых сложных клатч-ситуациях.",
        players: ["Zubr", "Bizon", "Mammoth", "Taiga", "Siberia"]
    },
    {
        id: 6,
        name: "OOO Pogremushki",
        logo: "https://placehold.co/100x100/de35b0/ffffff?text=OOO",
        description: "Они создают много шума на карте! Максимально быстрые раунды, постоянные эко-раши и невероятная стрельба на бегу.",
        players: ["Shum", "Grom", "Bum", "Bang", "Flash"]
    },
    {
        id: 7,
        name: "Vrotality",
        logo: "https://placehold.co/100x100/dede35/ffffff?text=V",
        description: "Бескомпромиссные ребята, чей девиз — тотальное доминирование. Не прощают ошибок на эко-раундах оппонента.",
        players: ["Vro", "Tali", "Ty", "Neo", "Trinity"]
    },
    {
        id: 8,
        name: "Kotakbas Gaming",
        logo: "https://placehold.co/100x100/35dede/ffffff?text=KG",
        description: "Опытный центральноазиатский ростер с филигранным пониманием карты Mirage и невероятной стрельбой из снайперских винтовок.",
        players: ["Nomad", "Steppe", "Khan", "Alga", "Batyra"]
    },
    {
        id: 9,
        name: "WWW Team",
        logo: "https://placehold.co/100x100/778899/ffffff?text=WWW",
        description: "Интернет-герои, перешедшие на LAN-формат. Показывают идеальную раскидку гранат и стратегический подход к каждому раунду.",
        players: ["Dot", "Com", "Net", "Web", "Link"]
    }
];

// =========================================================================
// ЛОГИКА ОТОБРАЖЕНИЯ И ИНТЕРФЕЙСА
// =========================================================================
const teamsGrid = document.getElementById('teamsGrid');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');

const modalLogo = document.getElementById('modalLogo');
const modalTeamName = document.getElementById('modalTeamName');
const modalDescription = document.getElementById('modalDescription');
const modalRoster = document.getElementById('modalRoster');

// Отрисовка карточек на странице
function renderTeams() {
    if (!teamsGrid) return;
    teamsGrid.innerHTML = '';
    
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

// Открытие информации о команде
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
        li.innerHTML = `${player} <span>Pro Player</span>`;
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

// Запуск рендеринга при загрузке документа
document.addEventListener('DOMContentLoaded', renderTeams);