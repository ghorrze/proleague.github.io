const teamsData = [
    {
        id: 1,
        name: "Mentai Squad",
        logo: "https://placehold.co/100x100/235ecf/ffffff?text=MS",
        description: "Агрессивный стиль игры и нестандартные тактические решения выделяют эту команду среди остальных претендентов.",
        players: [
            { firstName: "Семён", nickname: "Achtung", lastName: "Макин", role: "IGL" },
            { firstName: "Пётр", nickname: "petak", lastName: "Макин", role: "AWP" },
            { firstName: "Фёдор", nickname: "kyushu", lastName: "Пленков", role: "Rifler" },
            { firstName: "Влад", nickname: "KyLu4", lastName: "Полушин", role: "Support" },
            { firstName: "Андрей", nickname: "recise", lastName: "Васильев", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 2,
        name: "Virtus.Pro 2",
        logo: "https://placehold.co/100x100/de9b35/ffffff?text=VP2",
        description: "Академический состав легендарной организации Virtus.Pro. Молодые таланты, готовые ворваться на тир-1 сцену CS2.",
        players: [
            { firstName: "Егор", nickname: "flamie", lastName: "Васильев", role: "IGL" },
            { firstName: "Александр", nickname: "awper_young", lastName: "Иванов", role: "AWP" },
            { firstName: "Дмитрий", nickname: "rifler_1", lastName: "Петров", role: "Rifler" },
            { firstName: "Сергей", nickname: "rifler_2", lastName: "Сидоров", role: "Support" },
            { firstName: "Иван", nickname: "support_man", lastName: "Смирнов", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 3,
        name: "Gubashleps",
        logo: "https://placehold.co/100x100/de3535/ffffff?text=GS",
        description: "Команда-мем, которая неожиданно для всех начала выигрывать региональные квалификации. Их главная сила — синергия и юмор.",
        players: [
            { firstName: "Григорий", nickname: "Guba", lastName: "Козлов", role: "IGL" },
            { firstName: "Степан", nickname: "Shlep", lastName: "Новиков", role: "AWP" },
            { firstName: "Павел", nickname: "Pupa", lastName: "Морозов", role: "Rifler" },
            { firstName: "Леонид", nickname: "Lupa", lastName: "Петров", role: "Support" },
            { firstName: "Никита", nickname: "Buster", lastName: "Соловьев", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 4,
        name: "Yolen Team",
        logo: "https://placehold.co/100x100/35de79/ffffff?text=TS",
        description: "Сбалансированный коллектив с упором на сильную дефенс-сторону. Медленный и тягучий стиль игры заставляет соперников ошибаться.",
        players: [
            { firstName: "Андрей", nickname: "Spil", lastName: "Васильев", role: "IGL" },
            { firstName: "Ярослав", nickname: "Hardy", lastName: "Зайцев", role: "AWP" },
            { firstName: "Владислав", nickname: "Focus", lastName: "Павлов", role: "Rifler" },
            { firstName: "Кирилл", nickname: "Zeal", lastName: "Голубев", role: "Support" },
            { firstName: "Максим", nickname: "Apex", lastName: "Виноградов", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 5,
        name: "Zubry Gaming",
        logo: "https://placehold.co/100x100/9b35de/ffffff?text=ZG",
        description: "Настоящие мастодонты локальной сцены. Невероятный опыт и хладнокровие в самых сложных клатч-ситуациях.",
        players: [
            { firstName: "Владимир", nickname: "Zubr", lastName: "Богданов", role: "IGL" },
            { firstName: "Денис", nickname: "Bizon", lastName: "Воробьев", role: "AWP" },
            { firstName: "Федор", nickname: "Mammoth", lastName: "Федоров", role: "Rifler" },
            { firstName: "Тимур", nickname: "Taiga", lastName: "Беляев", role: "Support" },
            { firstName: "Александр", nickname: "Siberia", lastName: "Жуков", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 6,
        name: "OOO Pogremushka",
        logo: "https://placehold.co/100x100/de35b0/ffffff?text=OOO",
        description: "Они создают много шума на карте! Максимально быстрые раунды, постоянные эко-раши и невероятная стрельба на бегу.",
        players: [
            { firstName: "Роман", nickname: "Shum", lastName: "Захаров", role: "IGL" },
            { firstName: "Константин", nickname: "Grom", lastName: "Орлов", role: "AWP" },
            { firstName: "Виктор", nickname: "Bum", lastName: "Соболев", role: "Rifler" },
            { firstName: "Олег", nickname: "Bang", lastName: "Киселев", role: "Support" },
            { firstName: "Антон", nickname: "Flash", lastName: "Макаров", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 7,
        name: "Vrotality",
        logo: "https://placehold.co/100x100/dede35/ffffff?text=V",
        description: "Бескомпромиссные ребята, чей девиз — тотальное доминирование. Не прощают ошибок на эко-раундах оппонента.",
        players: [
            { firstName: "Валерий", nickname: "Vro", lastName: "Баранов", role: "IGL" },
            { firstName: "Анатолий", nickname: "Tali", lastName: "Никитин", role: "AWP" },
            { firstName: "Глеб", nickname: "Ty", lastName: "Шевченко", role: "Rifler" },
            { firstName: "Даниил", nickname: "Neo", lastName: "Соболев", role: "Support" },
            { firstName: "Матвей", nickname: "Trinity", lastName: "Румянцев", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 8,
        name: "Kotakbas Gaming",
        logo: "https://placehold.co/100x100/35dede/ffffff?text=KG",
        description: "Опытный центральноазиатский ростер с филигранным пониманием карты Mirage и невероятной стрельбой из снайперских винтовок.",
        players: [
            { firstName: "Руслан", nickname: "Nomad", lastName: "Алиев", role: "IGL" },
            { firstName: "Адиль", nickname: "Steppe", lastName: "Сагитов", role: "AWP" },
            { firstName: "Тимур", nickname: "Khan", lastName: "Ибрагимов", role: "Rifler" },
            { firstName: "Данияр", nickname: "Alga", lastName: "Ахметов", role: "Support" },
            { firstName: "Бахтияр", nickname: "Batyra", lastName: "Ермеков", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    },
    {
        id: 9,
        name: "WWW Team",
        logo: "https://placehold.co/100x100/778899/ffffff?text=WWW",
        description: "Интернет-герои, перешедшие на LAN-формат. Показывают идеальную раскидку гранат и стратегический подход к каждому раунду.",
        players: [
            { firstName: "Святослав", nickname: "Dot", lastName: "Романов", role: "IGL" },
            { firstName: "Арсений", nickname: "Com", lastName: "Власов", role: "AWP" },
            { firstName: "Григорий", nickname: "Net", lastName: "Григорьев", role: "Rifler" },
            { firstName: "Евгений", nickname: "Web", lastName: "Гусев", role: "Support" },
            { firstName: "Владислав", nickname: "Link", lastName: "Давыдов", role: "Entry" },
            { firstName: "Матвей", nickname: "monic", lastName: "Верещагин", role: "Coach" }
        ]
    }
];