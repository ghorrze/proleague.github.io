const teamsData = [
    {
        id: 1,
        name: "Mentai Squad",
        logo: "./resources/logos/mentai.jpg",
        description: "Агрессивный стиль игры и нестандартные тактические решения выделяют эту команду среди остальных претендентов.",
        players: [
            { firstName: "Семён", nickname: "Achtung", lastName: "Макин", role: "IGL" },
            { firstName: "Пётр", nickname: "petak", lastName: "Макин", role: "AWP" },
            { firstName: "Влад", nickname: "KyLu4", lastName: "Полушин", role: "Rifler" },
            { firstName: "Андрей", nickname: "recise", lastName: "Васильев", role: "Support, Lurker" },
            { firstName: "Фёдор", nickname: "kyushu", lastName: "Пленков", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ],
        substitutes: [
            { firstName: "Михаил", nickname: "io", lastName: "Градобоев", role: "Support" }
        ]
    },
    {
        id: 2,
        name: "Virtus.Pro 2",
        logo: "./resources/logos/vp2.jpg",
        description: "Академический состав легендарной организации Virtus.Pro. Молодые таланты, готовые ворваться на тир-1 сцену CS2.",
        players: [
            { firstName: "Михаил", nickname: "dOOr4jl3y", lastName: "Сорокин", role: "IGL" },
            { firstName: "Марк", nickname: "Pers1k", lastName: "Ахмеров", role: "Lurker, AWP" },
            { firstName: "Артур", nickname: "Вафля", lastName: "Тимошин", role: "Rifler" },
            { firstName: "Александра", nickname: "BANG!", lastName: "Ёркина", role: "Support" },
            { firstName: "Арсений", nickname: "zigeng bogeng", lastName: "Пальгуев", role: "Entry" },
            { firstName: "Максим", nickname: "mr snail", lastName: "Смирнов", role: "Coach" }
        ]
    },
    {
        id: 3,
        name: "Vrotality",
        logo: "./resources/logos/vrotality.jpg",
        description: "Бескомпромиссные ребята, чей девиз — тотальное доминирование. Не прощают ошибок на эко-раундах оппонента.",
        players: [
            { firstName: "Тимофей", nickname: "Xelsew", lastName: "Леонов", role: "IGL" },
            { firstName: "Антон", nickname: "Oxxxyanton", lastName: "Игонин", role: "AWP" },
            { firstName: "Андрей", nickname: "VIOP", lastName: "Макарчук", role: "Rifler" },
            { firstName: "Денис", nickname: "Den4mice", lastName: "Железняк", role: "Support, Lurker" },
            { firstName: "Валерий", nickname: "V1ad3", lastName: "Онищенко", role: "Entry" },
            { firstName: "Филипп", nickname: "NEO", lastName: "Кубских", role: "Coach" }
        ]
    },
    {
        id: 4,
        name: "Yolen Team",
        logo: "./resources/logos/yolen.jpg",
        description: "Сбалансированный коллектив с упором на сильную дефенс-сторону. Медленный и тягучий стиль игры заставляет соперников ошибаться.",
        players: [
            { firstName: "Фёдор", nickname: "Arceee", lastName: "Басос", role: "IGL" },
            { firstName: "Марк", nickname: "Mellor", lastName: "Луцышин", role: "AWP" },
            { firstName: "Глеб", nickname: "nindga", lastName: "Чижик", role: "Rifler" },
            { firstName: "Даниил", nickname: "Diff1k", lastName: "Перешков", role: "Support" },
            { firstName: "Роман", nickname: "kw1t0", lastName: "Королёв", role: "Entry" },
            { firstName: "-", nickname: "nick", lastName: "-", role: "Coach" }
        ]
    },
    {
        id: 5,
        name: "Zubry Gaming",
        logo: "./resources/logos/zubri.jpg",
        description: "Настоящие мастодонты локальной сцены. Невероятный опыт и хладнокровие в самых сложных клатч-ситуациях.",
        players: [
            { firstName: "Дмитрий", nickname: "kr1mZe", lastName: "Данков", role: "IGL, AWP" },
            { firstName: "Иван", nickname: "w0nt", lastName: "Попов", role: "Lurker" },
            { firstName: "Марк", nickname: "ZennLyy", lastName: "Мозжерин", role: "Support" },
            { firstName: "Даниил", nickname: "KAKOCIK", lastName: "Казак", role: "Support" },
            { firstName: "Иван", nickname: "sds", lastName: "Штык", role: "Entry" },
            { firstName: "?????", nickname: "nick", lastName: "?????", role: "Coach" }
        ]
    },
    {   
        id: 6,
        name: "VARIPISION",
        logo: "./resources/logos/varipision.jpg",
        description: "Они создают много шума на карте! Максимально быстрые раунды, постоянные эко-раши и невероятная стрельба на бегу.",
        players: [
            { firstName: "Макар", nickname: "d3aler", lastName: "Горбунов", role: "IGL, AWP" },
            { firstName: "Никита", nickname: "Анти-Талант", lastName: "Кривошеин", role: "Rifler, Lurker" },
            { firstName: "Михаил", nickname: "culture", lastName: "Тюлькин", role: "Rifler" },
            { firstName: "Никита", nickname: "VovaVeronov", lastName: "Мокрушин", role: "Support" },
            { firstName: "Кирилл", nickname: "1mp5ct", lastName: "Растегаев", role: "Entry" },
            { firstName: "Бастан", nickname: "bastan", lastName: "Окбаев", role: "Coach" }
        ]
    },
    {
        id: 7,
        name: "Gubashleps",
        logo: "./resources/logos/gubashelps.jpg",
        description: "Команда-мем, которая неожиданно для всех начала выигрывать региональные квалификации. Их главная сила — синергия и юмор.",
        players: [
            { firstName: "Константин", nickname: "хомек", lastName: "Нестюркин", role: "IGL" },
            { firstName: "Тимур", nickname: "Akiracvr", lastName: "Нигматуллин", role: "AWP" },
            { firstName: "Оскар", nickname: "afrodisiak", lastName: "Нигатуллин", role: "Rifler" },
            { firstName: "Азамат", nickname: "Azamat228__", lastName: "Тагиров", role: "Support" },
            { firstName: "Роман", nickname: "Bxnnxd", lastName: "Кильдияров", role: "Entry" },
            { firstName: "Ge", nickname: "G0ogl3", lastName: "Mini", role: "Coach" }
        ],
        substitutes: [
            { firstName: "Данис", nickname: "W1z4rd", lastName: "Алибаев", role: "Rifler" },
            { firstName: "Валерий", nickname: "otherwise", lastName: "Ниггертуллин", role: "Support" }
        ]
    },
    {
        id: 8,
        name: "Kotakbas Gaming",
        logo: "./resources/logos/kotakbas.jpg",
        description: "Опытный центральноазиатский ростер с филигранным пониманием карты Mirage и невероятной стрельбой из снайперских винтовок.",
        players: [
            { firstName: "-", nickname: "nick", lastName: "-", role: "IGL" },
            { firstName: "-", nickname: "nick", lastName: "-", role: "AWP" },
            { firstName: "-", nickname: "nick", lastName: "-", role: "Rifler" },
            { firstName: "-", nickname: "nick", lastName: "-", role: "Support" },
            { firstName: "-", nickname: "nick", lastName: "-", role: "Entry" },
            { firstName: "-", nickname: "nick", lastName: "-", role: "Coach" }
        ]
    },
    {
        id: 9,
        name: "WWW Team",
        logo: "./resources/logos/www.jpg",
        description: "Интернет-герои, перешедшие на LAN-формат. Показывают идеальную раскидку гранат и стратегический подход к каждому раунду.",
        players: [
            { firstName: "Александр", nickname: "spa4k", lastName: "Головин", role: "IGL" },
            { firstName: "Серхио", nickname: "velarbebe", lastName: "Рамос", role: "AWP" },
            { firstName: "Денис", nickname: "spesher", lastName: "Жуков", role: "Rifler" },
            { firstName: "Григорий", nickname: "Mart1n", lastName: "Степанов", role: "Support" },
            { firstName: "Дмитрий", nickname: "A4eTak", lastName: "Холлс", role: "Entry" },
            { firstName: "Сергей", nickname: "hally", lastName: "Шаваев", role: "Coach" }
        ],
        substitutes: [
            { firstName: "Семён", nickname: "упитанный", lastName: "Чарегородцев", role: "Rifler" },
            { firstName: "Григорий", nickname: "krokodil", lastName: "Иванов", role: "Rifler" }
        ]
    }
];