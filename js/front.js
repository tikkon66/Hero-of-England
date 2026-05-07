
let clickCount = 0;


// фон
const fon = document.getElementById("brightness");


// появление текста по буквам
// монологи
const monolog_1 = document.getElementById("monolog_1");
const monolog_2 = document.getElementById("monolog_2");
const monolog_3 = document.getElementById("monolog_3");
const monolog_4 = document.getElementById("monolog_4");
const monolog_5 = document.getElementById("monolog_5");
const monolog_6 = document.getElementById("monolog_6");

let text = ["Oго, самурай в этих краях? Не каждый день таких встречаю.",
    "Чего молчишь? Челюсти свело от здешнего ветра?",
    "Ладно, вижу, ты парень не слабый. Слушай, есть тут одна проблемка... Демоны, знаешь  ли, распоясались, деревни жгут. Я уже не тот, чтобы их гонять.",
    "Что скажешь? Хотя чего спрашивать — молчание, оно ведь знак согласия!",
    "Но хоть ты и не хиляк, нужно потренироваться перед боем. Не хочу, чтоб тебя в первом же замесе порвали, как старый сапог.",
    "Давай-ка проверим, на что ты способен, а там и к делу перейдём. Нажми на табличку с огоньком",
];

let i = 0;
function typeEffect(name, text_count, i = 0) {
    if (i < text[text_count].length) {
        name.textContent += text[text_count][i];
        setTimeout(() => typeEffect(name, text_count, i + 1), 70);
    }
}

typeEffect(monolog_1, 0);



// // заменение монолога

if (clickCount != 6) {
    document.addEventListener("click", () => {

        if (clickCount == 0) {
            document.getElementById("monolog_1").style.display = "none";
            document.getElementById("elder_smile").style.display = "none";

            document.getElementById("monolog_2").style.display = "flex";
            document.getElementById("elder_angry").style.display = "flex";

            typeEffect(monolog_2, 1);

            clickCount++;
        }

                else if (clickCount == 1) {
                    document.getElementById("monolog_2").style.display = "none";

                    document.getElementById("monolog_3").style.display = "flex";

                    typeEffect(monolog_3, 2);

                    clickCount++;
                }

                else if (clickCount == 2) {
                    document.getElementById("monolog_3").style.display = "none";
                    document.getElementById("elder_angry").style.display = "none";

                    document.getElementById("monolog_4").style.display = "flex";
                    document.getElementById("elder_smile").style.display = "flex";

                    typeEffect(monolog_4, 3);

                    clickCount++;
                }

                else if (clickCount == 3) {
                    document.getElementById("monolog_4").style.display = "none";
                    document.getElementById("elder_smile").style.display = "none";

                    document.getElementById("monolog_5").style.display = "flex";
                    document.getElementById("elder_angry").style.display = "flex";

                    typeEffect(monolog_5, 4);

                    clickCount++;
                }

                else if (clickCount == 4) {
                    document.getElementById("monolog_5").style.display = "none";

                    document.getElementById("monolog_6").style.display = "flex";

                    typeEffect(monolog_6, 5);

                    clickCount++;
                }

                else if (clickCount == 5) {
                    document.getElementById("monolog_6").style.display = "none";
                    document.getElementById("elder_angry").style.display = "none";

                    fon.style.filter = "brightness(100%)";
                    fon.style.pointerEvents = "auto";

                    clickCount++;
                }
    });

}


// функция табличек

const fireTab = document.getElementById("fire_link");
const profilTab = document.getElementById("profil_link");
const katanaTab = document.getElementById("katana_link");
const map = document.getElementById("katana");
const profil = document.getElementById("profil");
const fire = document.getElementById("fire");

function hideAll() {
    fire.style.display = "none";
    profil.style.display = "none";
    map.style.display = "none";
}

fireTab.addEventListener("click", function () {
    hideAll();
    fire.style.display = "block";
});

profilTab.addEventListener("click", function () {
    hideAll();
    profil.style.display = "block";
});

katanaTab.addEventListener("click", function () {
    hideAll();
    map.style.display = "block";
});



// никнэйм

const nickname_place = document.getElementById("nickname-place");
const nickname_button = document.getElementById("nickname-confirm");

nickname_button.addEventListener("click", function () {
    if (nickname_place.value.trim() !== "") {
        nickname_place.placeholder = nickname_place.value;
        nickname_place.value = "";
    }
});


// кнопка старт пары слов

const startFire = document.getElementById("start_fire");
const gameWord = document.getElementById("fire-game");
const wordLesson1 = document.getElementById("words_1");
const lessonCLose = document.getElementById("word1Close");
const nav = document.getElementById("header");
const gameHeader = document.getElementById("fire-game_header");

startFire.addEventListener("click", function () {
    fire.style.display = "none";
    nav.style.display = "none";

    wordLesson1.style.display = "flex";
    gameWord.style.display = "block";
    gameHeader.style.display = "flex";

    fon.style.filter = "brightness(60%)";
    fon.style.pointerEvents = "none";

    clickCount = 6;
});


// убрать обучалку при нажатий на экран

function hideWindow(lesson) {
    lesson.style.display = "none";

    fon.style.filter = "brightness(100%)";
    fon.style.pointerEvents = "auto";
}

lessonCLose.addEventListener("click", () => {
    hideWindow(wordLesson1);
});


// открытие меню

const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

function openWindiw(window) {
    window.style.display = "flex";

    fon.style.filter = "brightness(60%)";
    fon.style.pointerEvents = "none";
}

menuIcon.addEventListener("click", () => {
    openWindiw(menu);
});


//start продолжение игры lesson открытие обучалки back назад

const continuou = document.getElementById("continuou");
const lessonOpen = document.getElementById("lesson");
const backToPage = document.getElementById("backToPage");


const lessonOpen2 = document.getElementById("lesson2");
const backToPage2 = document.getElementById("backToPage2");

continuou.addEventListener("click", () => {
    hideWindow(menu);
});

lessonOpen2.addEventListener("click", () => {
    wordLesson1.style.display = "flex";
});

backToPage2.addEventListener("click", function () {
    gameWord.style.display = "none";
    gameHeader.style.display = "none";

    fire.style.display = "block";
    nav.style.display = "flex";
    normal()
    e = 4;
    checkCount = 1;
    scoreCount = 0;
    scoreText.textContent = scoreCount; 
    checkWordsCount = 0;
    simpleWordsCount = 0;

    checkWordsCount = 0;
    hideWindow(menu2);
});

lessonOpen.addEventListener("click", () => {
    hideWindow(menu);
    openWindiw(wordLesson1);
});

backToPage.addEventListener("click", function () {
    
    normal()
    e = 4;
    checkCount = 1;
    scoreCount = 0;
    scoreText.textContent = scoreCount; 
    checkWordsCount = 0;
    simpleWordsCount = 0;
    WriteInTranslate()
    hideWindow(menuLoose)
    gameWord.style.display = "none";
    gameHeader.style.display = "none";

    fire.style.display = "block";
    nav.style.display = "flex";

    hideWindow(menu);
});


// логика выбора слов

let simpleWords = [
    "I", "я", "like", "нравится", "apples", "яблоки",
    "She", "она", "reads", "читает", "books", "книги",
    "don’t", "не", "drink", "пью", "coffee", "кофе",
    "doesn’t", "не (she, he , it)", "watch", "смотрит", "TV", "телевизор",
    "Is", "есть (she, he, it)", "she", "она", "sister", "сестра",
    "Are", "есть", "you", "ты", "student", "студент"
];
let simpleWordsCount = 0;
let randomWord;
let englWords = document.getElementsByClassName("us");
let rusWords = document.getElementsByClassName("ru");

let t = [
    [],
    [],
    []
];

function WriteInTranslate() {
    let numbers = [0, 1, 2];
    let numbers2 = [0, 1, 2];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * (3 - i));
        q = numbers.splice(randomIndex, 1)[0];

        let randomIndex2 = Math.floor(Math.random() * (3 - i));
        q2 = numbers2.splice(randomIndex2, 1)[0];


        randomWord = Math.floor(Math.random() * (34 - simpleWordsCount)) + 1 + simpleWordsCount;
        if (randomWord % 2 == 0) {
            englWords[q].textContent = simpleWords[randomWord];
            simpleWords[randomWord] = simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2)];
            simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2)] = englWords[q].textContent;

            rusWords[q2].textContent = simpleWords[randomWord + 1];
            simpleWords[randomWord + 1] = simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2) + 1];
            simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2) + 1] = rusWords[q2].textContent;
        }
        else {
            englWords[q].textContent = simpleWords[randomWord - 1];
            simpleWords[randomWord - 1] = simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2)];
            simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2)] = englWords[q].textContent;

            rusWords[q2].textContent = simpleWords[randomWord];
            simpleWords[randomWord] = simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2) + 1];
            simpleWords[(simpleWordsCount / 2) + (simpleWordsCount / 2) + 1] = rusWords[q2].textContent;
        }

        t[q][0] = englWords[q].textContent;
        t[q][1] = rusWords[q2].textContent;

        simpleWordsCount += 2;
    }
}
WriteInTranslate()



// выбор слов

const us1 = document.getElementById("us1");
const us2 = document.getElementById("us2");
const us3 = document.getElementById("us3");
const ru1 = document.getElementById("ru1");
const ru2 = document.getElementById("ru2");
const ru3 = document.getElementById("ru3");

let e = 0;
let checkCount = 1;
let scoreCount = 0;
let us1Check = false, us2Check = false, us3Check = false, ru1Check = false, ru2Check = false, ru3Check = false;

function pushButton(i, floor, room, check) {
    if (!check) {
        i.style.transform = "scale(0.95)";
        i.style.filter = "brightness(87%)";
        if (checkCount % 2 != 0) {
            e = floor;
        }
        else if (t[e][room] == i.textContent) {
            scoreCount++;
        }
        checkCount++;
        console.log(check + " check " + e + " checkCount; " + checkCount + " room; " + room + " scoreCount; " + scoreCount + " floor; " + floor + t[e][room] + i.textContent);
        return true;
    }
    else {
        i.style.transform = "scale(1)";
        i.style.filter = "brightness(100%)";
        if (t[e][room] == i.textContent) {
            scoreCount--;
        }
        checkCount--;
        return false;
    }
}

us1.addEventListener("click", function () {
    us1Check = pushButton(us1, 0, 0, us1Check);
});
us2.addEventListener("click", function () {
    us2Check = pushButton(us2, 1, 0, us2Check);
});
us3.addEventListener("click", function () {
    us3Check = pushButton(us3, 2, 0, us3Check);
});
ru1.addEventListener("click", function () {
    ru1Check = pushButton(ru1, 0, 1, ru1Check);
});
ru2.addEventListener("click", function () {
    ru2Check = pushButton(ru2, 1, 1, ru2Check);
});
ru3.addEventListener("click", function () {
    ru3Check = pushButton(ru3, 2, 1, ru3Check);
});


const checkTrans = document.getElementById("checkTrans");
const scoreText = document.getElementById("score_count");
const restart = document.getElementById("restart");
const menuLoose = document.getElementById("menu2");

function normal() {
    
    us1.style.transform = "scale(1)";
    us2.style.transform = "scale(1)";
    us3.style.transform = "scale(1)";
    ru1.style.transform = "scale(1)";
    ru2.style.transform = "scale(1)";
    ru3.style.transform = "scale(1)";
    us1.style.filter = "brightness(100%)";
    us2.style.filter = "brightness(100%)";
    us3.style.filter = "brightness(100%)";
    ru1.style.filter = "brightness(100%)";
    ru2.style.filter = "brightness(100%)";
    ru3.style.filter = "brightness(100%)";
    us1Check = false;
    us2Check = false;
    us3Check = false;
    ru1Check = false;
    ru2Check = false;
    ru3Check = false;
    

}

restart.addEventListener("click", function () {
    normal()
    e = 4;
    checkCount = 1;
    scoreCount = 0;
    scoreText.textContent = scoreCount;
    checkWordsCount = 0;
    simpleWordsCount = 0;
    WriteInTranslate()
    hideWindow(menuLoose)
});

let checkWordsCount = 0;

checkTrans.addEventListener("click", function () {
    normal()
    if (checkWordsCount < 5) {
        WriteInTranslate()
        checkWordsCount++;
    }
    else if (scoreCount > 12) {
        openWindiw(document.getElementById("victory_word"));
    }
    else if (scoreCount < 12) {
        openWindiw(menuLoose);
    }

    e = 4;

    checkCount = 1;

    scoreText.textContent = scoreCount
});

console.log(Phaser)

// открытие деревни

let saved = localStorage.getItem('vailageLevel');
let getSimple = saved !== null ? saved : 0;
if (saved) {
    simpleVillage.style.background = 'url("img2/world_elemets/vilage1.png")';
    document.getElementById("present-simplelock").style.display = "none";
}

const backWithSimple = document.getElementById("backWithSimple");
const simpleVillage = document.getElementById("present-simple")

document.getElementById("backWithSimple").addEventListener("click", function () {
    gameWord.style.display = "none";
    gameHeader.style.display = "none";

    fire.style.display = "block";
    nav.style.display = "flex";
    normal()
    e = 4;
    checkCount = 1;
    scoreCount = 0;
    scoreText.textContent = scoreCount; 
    checkWordsCount = 0;
    simpleWordsCount = 0;

    checkWordsCount = 0;
    hideWindow(document.getElementById("victory_word"));

    simpleVillage.style.background = 'url("img2/samurai/stay_right.png")';
    document.getElementById("present-simplelock").style.display = "none";
    getSimple = "1" 
    localStorage.setItem('vailageLevel', '1')
});



// ANUAR EDITION

window.addEventListener("load", () => {
    // Поменяй тут элемент если хочешь чтобы он работал по другому\
    document.getElementById("present-simple").addEventListener("click", () => {
        if (getSimple == "1") {
            const MainMenu = document.getElementById("MainMenu");
            document.getElementById("brightness").style.display = "none";
            MainMenu.style.display = "none";

            class MainGame extends Phaser.Scene {
                constructor() {
                    super({ key: "MainGame" });
                }
                preload() {
                    // Background Image
                    this.load.image('World', '../img/world_elemets/pole_fight.png');
                    // Samurai Images
                    {
                        // Idle Images
                        this.load.image('IdleRight', '../img/samurai/stay_right.png');
                        this.load.image('IdleLeft', '../img/samurai/stay_left.png');
                        // Samurai Running Images
                        this.load.image('RunLeft1', '../img/samurai/run1_left.png');
                        this.load.image('RunLeft2', '../img/samurai/run2_left.png');
                        this.load.image('RunLeft3', '../img/samurai/run3_left.png');
                        this.load.image('RunLeft4', '../img/samurai/run4_left.png');

                        this.load.image('RunRight1', '../img/samurai/run1_right.png');
                        this.load.image('RunRight2', '../img/samurai/run2_right.png');
                        this.load.image('RunRight3', '../img/samurai/run3_right.png');
                        this.load.image('RunRight4', '../img/samurai/run4_right.png');
                        // Samurai Attack Images
                        this.load.image('AttackRight', '../img/samurai/Attack.png');
                        this.load.image('AttackLeft', '../img/samurai/Attack_left.png');
                        // Attack animation
                        this.load.spritesheet('AttackFrames', '../img/playervfx/sprite-sheet.png', {
                            frameWidth: 128, // Ensure this matches the frame width in the sheet
                            frameHeight: 128, // Ensure this matches the frame height in the sheet
                        });
                    }
                    // Arrow 
                    this.load.image('Arrow', '../img/playervfx/Arrow.png');

                    // Enemy Images
                    {
                        // Demon Idle Images
                        this.load.image('DemIdleDown', '../img/demon/demons_stand_down.png');
                        this.load.image('DemIdleUp', '../img/demon/demons_stand_up.png');
                        this.load.image('DemIdleRight', '../img/demon/demons_stand_right.png');
                        this.load.image('DemIdleLeft', '../img/demon/demons_stand_left.png');
                        // Demon Running Images
                        this.load.image("DemRunDown1", '../img/demon/demons_walk1_down.png');
                        this.load.image("DemRunDown2", '../img/demon/demons_walk2_down.png');

                        this.load.image("DemRunUp1", '../img/demon/demons_walk1_up.png');
                        this.load.image("DemRunUp2", '../img/demon/demons_walk2_up.png');

                        this.load.image("DemRunRight1", '../img/demon/demons_walk1_right.png');
                        this.load.image("DemRunRight2", '../img/demon/demons_walk2_right.png');

                        this.load.image("DemRunLeft1", '../img/demon/demons_walk1_left.png');
                        this.load.image("DemRunLeft2", '../img/demon/demons_walk2_left.png');
                    }
                    // Spawner
                    this.load.image('Spawner', '../img/demon/spawn.png');
                    this.load.image('Warning', '../img/demon/Warning.png');
                    // Tree Images
                    {
                        this.load.image('Tree1', '../img/trees/tree_1.png');
                        this.load.image('Tree2', '../img/trees/tree_2.png');
                        this.load.image('Tree3', '../img/trees/tree_3.png');
                        this.load.image('Tree4', '../img/trees/tree_4.png');
                        this.load.image('Tree5', '../img/trees/tree_5.png');
                        this.load.image('Tree6', '../img/trees/tree_6.png');
                        this.load.image('Tree7', '../img/trees/tree_7.png');
                        this.load.image('Tree8', '../img/trees/tree_8.png');
                    }
                    // House Images
                    {
                        this.load.image('House1', '../img/houses/house1_1.png');
                        this.load.image('House2', '../img/houses/house1_2.png');
                        this.load.image('House3', '../img/houses/house1_3.png');
                        this.load.image('House4', '../img/houses/house2_1.png');
                        this.load.image('House5', '../img/houses/house2_2.png');
                        this.load.image('House6', '../img/houses/house2_3.png');
                        this.load.image('House7', '../img/houses/house3_1.png');
                        this.load.image('House8', '../img/houses/house3_2.png');
                        this.load.image('House9', '../img/houses/house_3.png');
                    }
                    // Words and Sentences
                    this.load.image('Word', '../img/tablick/nav_tree.png');
                    // this.load.image('Sentence', '.../img/tablick/name_tree.png');
                }
                create() {

                    // Sprites
                    this.Player;
                    this.Enemies;
                    this.Enemy;
                    this.Attack;
                    this.TreeImageKeys = [
                        'Tree1', 'Tree2', 'Tree3', 'Tree4', 'Tree5', 'Tree6', 'Tree7', 'Tree8'
                    ]
                    this.FirstHouseImageKeys = ['House1', 'House4', 'House8'];
                    this.SecondHouseImageKeys = ['House2', 'House5', 'House7'];
                    this.ThirdHouseImageKeys = ['House3', 'House6', 'House9'];

                    // Controls, Movement and scoring
                    {
                        this.Dash;
                        this.cursors;
                        this.PickUp;
                        this.GameOver = false;
                        this.isDashing = false;
                        this.isAttacking = false;
                        this.isAttackOnCD = false;
                        this.direction = 'RightRun';
                        this.score = 0;
                    }

                    // Variable needed for tracking the cooldowns
                    this.lastDashed = 0;
                    this.lastAttacked = 0;
                    this.velocity;

                    // Animations
                    {
                        // Player animation
                        this.anims.create({
                            key: 'RightRun',
                            frames: [
                                { key: 'RunRight1' },
                                { key: 'RunRight2' },
                                { key: 'RunRight3' },
                                { key: 'RunRight4' }
                            ],
                            frameRate: 5,  // Frames per second
                            repeat: -1  // Infinite loop
                        });
                        this.anims.create({
                            key: 'LeftRun',
                            frames: [
                                { key: 'RunLeft1' },
                                { key: 'RunLeft2' },
                                { key: 'RunLeft3' },
                                { key: 'RunLeft4' }
                            ],
                            frameRate: 5,  // Frames per second
                            repeat: -1  // Infinite loop
                        });
                        // Attack animation
                        this.anims.create({
                            key: 'Attack',
                            frames: this.anims.generateFrameNumbers('AttackFrames', {
                                start: 0, // Ensure this matches the first frame in the sheet
                                end: 4, // Ensure this matches the last frame in the sheet
                            }),
                            frameRate: 20,
                            repeat: -1,
                        });
                        // Enemies animation
                        this.anims.create({
                            key: 'DemRunLeft',
                            frames: [
                                { key: 'DemRunLeft1' },
                                { key: 'DemRunLeft2' }
                            ],
                            frameRate: 5,  // Frames per second
                            repeat: -1  // Infinite loop
                        });
                        this.anims.create({
                            key: 'DemRunRight',
                            frames: [
                                { key: 'DemRunRight1' },
                                { key: 'DemRunRight2' }
                            ],
                            frameRate: 5,  // Frames per second
                            repeat: -1  // Infinite loop
                        });
                        this.anims.create({
                            key: 'DemRunUp',
                            frames: [
                                { key: 'DemRunUp1' },
                                { key: 'DemRunUp2' }
                            ],
                            frameRate: 5,  // Frames per second
                            repeat: -1  // Infinite loop
                        });
                        this.anims.create({
                            key: 'DemRunDown',
                            frames: [
                                { key: 'DemRunDown1' },
                                { key: 'DemRunDown2' }
                            ],
                            frameRate: 5,  // Frames per second
                            repeat: -1  // Infinite loop
                        });
                    }

                    // Adding background image
                    this.Background = this.add.tileSprite(0, 0, 2000, 2000, "World").setOrigin(0, 0);
                    // Adding a player sprite
                    this.Player = this.physics.add.sprite(500, 350, 'IdleRight').setScale(0.8);
                    this.Player.setSize(40, 50);
                    this.Player.setOffset(0, 40);
                    this.Player.setDepth(Infinity);
                    // Prevents player from leaving scene borders
                    this.Player.setCollideWorldBounds(true);

                    // Adding arrow sprite
                    this.Arrow = this.add.sprite(this.Player.x, this.Player.y + 50, 'Arrow').setScale(0.17);
                    this.Arrow.angle = -90;

                    // Camera 
                    this.cameras.main.setBounds(0, 0, 2000, 2000);
                    this.physics.world.setBounds(0, 0, 2000, 2000);
                    this.cameras.main.startFollow(this.Player, true, 0.1, 0.1); // Follow player smoothly
                    // this.cameras.main.setDeadzone(100, 100);

                    // Trees
                    {
                        this.Trees = this.physics.add.group();
                        this.TreesList = this.Trees.getChildren();

                        this.TreeRoots = this.physics.add.group({
                            immovable: true,
                            allowGravity: false
                        });
                        this.TreeRootsList = this.TreeRoots.getChildren();

                        this.physics.add.overlap(this.Trees, this.Trees, (Tree1, Tree2) => {
                            this.TreeRootsList[this.TreesList.indexOf(Tree1)].destroy();
                            Tree1.destroy();
                            this.TreeSpawn(this);
                        });

                        this.physics.add.collider(this.TreeRoots, this.Player);

                        this.physics.add.overlap(this.TreeRoots, this.Player, (Player, TreeRoot) => {
                            Player.setVelocity(this.velocity.x, this.velocity.y);
                        });
                    }

                    // House 
                    {
                        this.Houses = this.physics.add.group();
                        this.HousesList = this.Houses.getChildren();
                        this.HouseFoundations = this.physics.add.group({
                            immovable: true,
                            allowGravity: false
                        });
                        this.HouseFoundationList = this.HouseFoundations.getChildren();
                        this.physics.add.collider(this.HouseFoundations, this.Player);
                        this.physics.add.overlap(this.Houses, this.Houses, (House1, House2) => {
                            this.HouseFoundationList[this.HousesList.indexOf(House1)].destroy();
                            House1.destroy();
                            this.HouseSpawn(this);
                            // console.log("Williard")
                        });
                    }
                    this.physics.add.collider(this.Houses, this.Trees, (House, Tree) => {
                        this.TreeRootsList[this.TreesList.indexOf(Tree)].destroy();
                        Tree.destroy();
                    });

                    // Enemy
                    {
                        // Adding an enemies sprite group as they are pretty similar
                        this.Enemies = this.physics.add.group();
                        // We create a new sprite and add it in the group as it is important for handling attack logic
                        this.Enemy = this.physics.add.sprite(100, 100, 'DemIdleDown').setScale(0.6);
                        this.Enemy.setSize(100, 100);
                        this.Enemy.setOffset(45, 45);
                        this.Enemies.add(this.Enemy);
                        this.EnemiesCount = this.Enemies.getChildren();
                        // Prevents enemies from passing through each other
                        this.physics.add.collider(this.Enemies, this.Enemies);
                    }

                    // Spawner
                    {
                        this.Spawners = this.physics.add.group();
                        this.SpawnerList = this.Spawners.getChildren();
                        this.physics.add.overlap(this.Spawners, this.Houses, (Spawner, House) => {
                            this.HouseFoundationList[this.HousesList.indexOf(House)].destroy();
                            House.destroy();
                            this.HouseSpawn(this);
                        });
                        this.physics.add.overlap(this.Spawners, this.Trees, (Spawner, Tree) => {
                            this.TreeRootsList[this.TreesList.indexOf(Tree)].destroy();
                            Tree.destroy();
                            this.TreeSpawn(this);
                        });
                    }
                    // Spawn Warning
                    this.Warnings = this.physics.add.group();
                    this.WarningList = this.Warnings.getChildren();

                    // Words
                    {
                        this.Words = this.physics.add.group();
                        this.WordsList = this.Words.getChildren();
                        this.WordTexts = this.add.group();
                        this.WordTextList = this.WordTexts.getChildren();
                        this.physics.add.overlap(this.Words, this.Words, (Word1, Word2) => {
                            this.WordTextList[this.WordsList.indexOf(Word1)].destroy();
                            Word1.destroy();
                            this.WordSpawn(this);
                        });
                    }

                    // Sentence
                    {
                        this.subjects = ["She", "They", "The sun", "He", "We", "The baby", "Birds", "You", "The teacher", "My cat"];
                        this.verbs = ["read", "play", "shine", "drink", "watch", "sleep", "sing", "write", "explain", "love"];
                        this.objects = ["a book", "football", "brightly", "coffee", "movies", "peacefully", "in the morning", "emails", "the lesson", "fish"];
                        this.auxiliaryVerbs = ["do", "does"]; // "do" for plural subjects, "does" for singular subjects
                        this.negativeAuxiliaryVerbs = ["do not", "does not"];

                        this.registry.set('Subject', this.subjects);
                        this.registry.set('Object', this.objects);
                        this.registry.set('Verb', this.verbs);
                    }

                    // PickUpRange
                    {
                        this.circle = this.physics.add.sprite(this.Player.x, this.Player.y, null);
                        this.circle.body.setCircle(60);
                        this.circle.setOffset(-50, -50);
                        this.circle.setAlpha(0);
                    }
                    // PickUpMessage
                    {
                        this.PickUpMessage = this.add.text(this.Player.x, this.Player.y - 50, 'Press E to pick up', { fontSize: '20px', fill: '#FFF' });
                        this.PickUpMessage.setAlpha(0);
                        this.PickUpMessage.setDepth(Infinity);
                    }

                    // Checks whether the player has touched enemy or not
                    // Stops the game after player touches an enemy


                    this.PlayerEnemyCollider = this.physics.add.collider(this.Player, this.Enemies, () => {
                        this.scene.stop();
                        this.scene.stop("UiMenu");
                    })
                    this.PlayerEnemyOverlap = this.physics.add.overlap(this.Player, this.Enemies, () => {
                        this.scene.stop();
                        this.scene.stop("UiMenu");
                    })

                    // Control keys
                    {
                        // Movement keys
                        this.cursors = this.input.keyboard.addKeys({
                            up: Phaser.Input.Keyboard.KeyCodes.W,
                            down: Phaser.Input.Keyboard.KeyCodes.S,
                            left: Phaser.Input.Keyboard.KeyCodes.A,
                            right: Phaser.Input.Keyboard.KeyCodes.D
                        });

                        // Dash key
                        this.Dash = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

                        // Pick up key
                        this.PickUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);

                        this.input.keyboard.on('keydown-F', () => {
                            console.log(this.Player.x);
                            console.log(this.Player.y);
                        });

                        // Attack key
                        this.input.on('pointerup', () => {
                            if (!this.isAttackOnCD) {
                                this.Attacking(this, this.Player);
                                this.isAttackOnCD = true;
                                this.lastAttacked = this.time.now;
                            }
                        });
                    }
                    // Scoring
                    this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            this.score++;
                            // this.scoreText.setText(`Score: ${this.score}`);
                        },
                        callbackScope: this,
                        loop: true
                    })
                    // Spawns an enemy after 5 seconds
                    this.EnemySpawnTimer = this.time.addEvent({
                        delay: 5000,
                        callback: () => {
                            this.EnemySpawn(this);
                        },
                        callbackScope: this,
                        loop: true
                    });

                    // Pause
                    this.input.keyboard.on("keydown", (event) => {
                        if (event.code === "Escape") { // Check if ESC key is pressed
                            this.scene.launch("PauseMenu"); // Show pause menu
                            this.scene.pause(); // Pause the game
                        }
                    });
                    for (let i = 0; i < 30; i++) {
                        this.TreeSpawn(this);
                    };
                    for (let i = 0; i < 10; i++) {
                        this.HouseSpawn(this);
                    };
                    for (let i = 0; i < 6; i++) {
                        this.SpawnerPlacement(this);
                    };
                    for (let i = 0; i < 3; i++) {
                        this.WordSpawn(this, this.verbs[Math.floor(Math.random() * this.verbs.length)]);
                        this.WordSpawn(this, this.subjects[Math.floor(Math.random() * this.subjects.length)]);
                        this.WordSpawn(this, this.objects[Math.floor(Math.random() * this.objects.length)]);
                        // this.WordSpawn(this, this.verbs[-1]);
                        // this.WordSpawn(this, this.subjects[-1]);
                        // this.WordSpawn(this, this.objects[-1]);
                    };

                    this.scene.launch("UiMenu");

                }
                update(time) {
                    // Tree, House and Player interaction
                    {
                        let isOverlapping = false;
                        this.Trees.children.iterate(Tree => {
                            if (this.physics.world.overlap(this.Player, Tree)) {
                                isOverlapping = true;
                                Tree.setAlpha(0.5);
                            }
                            else {
                                Tree.setAlpha(1);
                            }
                        });
                        this.Houses.children.iterate(House => {
                            if (this.physics.world.overlap(this.Player, House)) {
                                isOverlapping = true;
                                House.setAlpha(0.5);
                            }
                            else {
                                House.setAlpha(1);
                            }
                        });
                        this.Trees.children.iterate((tree) => {
                            tree.setDepth(tree.y);
                        });
                        this.Houses.children.iterate((house) => {
                            house.setDepth(house.y);
                        });
                        this.Player.setAlpha(isOverlapping ? 0.5 : 1);
                    }
                    // PickUpRange
                    if (this.physics.world.overlap(this.circle, this.Words)) {
                        this.PickUpMessage.setAlpha(1);
                    }
                    else {
                        this.PickUpMessage.setAlpha(0);
                    };
                    this.physics.add.overlap(this.circle, this.Words, (Player, Word) => {
                        if (Phaser.Input.Keyboard.JustDown(this.PickUp)) {
                            this.WordTextList[this.WordsList.indexOf(Word)].destroy();
                            Word.destroy();
                        }
                    });

                    this.circle.x = this.Player.x;
                    this.circle.y = this.Player.y;
                    this.PickUpMessage.x = this.Player.x + 30;
                    this.PickUpMessage.y = this.Player.y;
                    // Movement
                    if (!this.isDashing && !this.isAttacking) {
                        let speed = 160;
                        this.Arrow.setAlpha(0.7);
                        // Handle horizontal movement
                        if (this.cursors.left.isDown) {
                            this.Player.setVelocityX(-speed);
                            this.Player.anims.play(this.direction, true);
                            this.direction = 'LeftRun';
                        } else if (this.cursors.right.isDown) {
                            this.Player.setVelocityX(speed);
                            this.Player.anims.play(this.direction, true);
                            this.direction = 'RightRun';
                        } else {
                            this.Player.setVelocityX(0); // Stop horizontal movement if no keys pressed
                        }

                        // Handle vertical movement independently
                        if (this.cursors.up.isDown) {
                            this.Player.setVelocityY(-speed);
                            this.Player.anims.play(this.direction, true);
                        } else if (this.cursors.down.isDown) {
                            this.Player.setVelocityY(speed);
                            this.Player.anims.play(this.direction, true);
                        } else {
                            this.Player.setVelocityY(0); // Stop vertical movement if no keys pressed
                        }

                        // Check if completely stationary to play idle animation
                        if (this.Player.body.velocity.x === 0 && this.Player.body.velocity.y === 0) {
                            this.Arrow.setAlpha(0);
                            this.Player.anims.stop();
                            switch (this.direction) {
                                case 'LeftRun':
                                    this.Player.setTexture('IdleLeft');
                                    break;
                                case 'RightRun':
                                    this.Player.setTexture('IdleRight');
                                    break;
                            }
                        }
                        // Sets the same speed for both horizontal/vertical and diagonal movement
                        this.Player.body.velocity.normalize().scale(speed);
                    }
                    // Checks whether the dash is possible or not
                    if (Phaser.Input.Keyboard.JustDown(this.Dash) && !this.isDashing && time > this.lastDashed && (this.Player.body.velocity.x != 0 || this.Player.body.velocity.y != 0)) {
                        this.dash(this);
                        this.makeInvincible(this.Player);
                        this.lastDashed = time + 2000;
                    }
                    if (this.isAttackOnCD && this.time.now > this.lastAttacked + 500) {
                        this.isAttackOnCD = false; // Reset cooldown
                    }
                    if (this.isAttacking && (this.velocity.x != 0 || this.velocity.y != 0)) {
                        this.Attack.x = this.Player.x + this.velocity.x * 70;
                        this.Attack.y = this.Player.y + this.velocity.y * 70;
                    }

                    // Make enemies follow the player
                    this.Enemies.children.iterate(Enemies => {
                        this.physics.moveToObject(Enemies, this.Player, 120);
                        Enemies.body.velocity.normalize().scale(120);
                    });
                    // Loop needed for their animation
                    for (let i = 0; i < this.EnemiesCount.length; i++) {
                        const radians = Math.atan2(this.EnemiesCount[i].body.velocity.x, this.EnemiesCount[i].body.velocity.y)
                        let degrees = Phaser.Math.RadToDeg(radians);

                        // Normalize to 0-360°
                        degrees = (degrees + 360) % 360;
                        if (degrees >= 315 || degrees < 45) {
                            // Right (0° ± 45°)
                            this.EnemiesCount[i].anims.play('DemRunDown', true);
                        } else if (degrees >= 45 && degrees < 135) {
                            // Up (90° ± 45°)
                            this.EnemiesCount[i].anims.play('DemRunRight', true);
                        } else if (degrees >= 135 && degrees < 225) {
                            // Left (180° ± 45°)
                            this.EnemiesCount[i].anims.play('DemRunUp', true);
                        } else if (degrees >= 225 && degrees < 315) {
                            // Down (270° ± 45°)
                            this.EnemiesCount[i].anims.play('DemRunLeft', true);
                        }
                    }

                    // Stops the enemy spawn upon certain number of enemies
                    if (this.EnemiesCount.length < 12) {
                        this.EnemySpawnTimer.paused = false;
                    }
                    else {
                        this.EnemySpawnTimer.paused = true;
                    }

                    const radians = Math.atan2(this.Player.body.velocity.x, this.Player.body.velocity.y)
                    let degrees = Phaser.Math.RadToDeg(radians);

                    // Normalize to 0-360°
                    degrees = (degrees + 360) % 360;

                    this.velocity = this.Player.body.velocity.clone(); // Clone before modifying

                    if (this.velocity.length() > 0) {
                        this.velocity.normalize(); // Now safe to normalize
                    }

                    this.Arrow.angle = -degrees;
                    this.Arrow.x = this.Player.x + this.velocity.x * 50;
                    this.Arrow.y = this.Player.y + this.velocity.y * 50;
                }
                dash(scene) {
                    this.isDashing = true;
                    let dashSpeed = 400;
                    let dashDuration = 200;

                    let dashX = this.Player.body.velocity.x > 0 ? dashSpeed : this.Player.body.velocity.x < 0 ? -dashSpeed : 0;
                    let dashY = this.Player.body.velocity.y > 0 ? dashSpeed : this.Player.body.velocity.y < 0 ? -dashSpeed : 0;

                    this.Player.setVelocity(dashX, dashY);
                    this.Player.body.velocity.normalize().scale(600);
                    // Ends the dash after a certain amount of time
                    scene.time.delayedCall(dashDuration, () => {
                        this.isDashing = false;
                    });
                }
                makeInvincible(player) {
                    player.setAlpha(0.5); // Make the player semi-transparent for feedback

                    // Disable collision
                    this.PlayerEnemyCollider.active = false;
                    this.PlayerEnemyOverlap.active = false;


                    // Re-enable collision after 2 seconds
                    player.scene.time.delayedCall(500, () => {
                        this.PlayerEnemyCollider.active = true;
                        this.PlayerEnemyOverlap.active = true;
                        player.setAlpha(1); // Restore visibility
                    });
                }
                Attacking(scene, player) {
                    // Still in need of improvement
                    this.isAttacking = true;
                    player.anims.stop();
                    if (this.direction == "RightRun") {
                        this.velocity.x = this.velocity.y == 0 ? 1 : 0;
                        this.Attack = scene.physics.add.sprite(player.x + this.velocity.x * 70, player.y + this.velocity.y * 50, null);
                        this.Attack.anims.play("Attack");
                        player.setTexture("AttackRight");
                    }
                    else if (this.direction == "LeftRun") {
                        this.velocity.x = this.velocity.y == 0 ? -1 : 0;
                        this.Attack = scene.physics.add.sprite(player.x + this.velocity.x * 70, player.y + this.velocity.y * 50, null);
                        this.Attack.flipX = true;
                        this.Attack.anims.play("Attack");
                        player.setTexture("AttackLeft");
                    }
                    this.Attack.setSize(128, 128); // Ensures the sprite remains full size
                    this.Attack.body.setSize(70, 110); // Adjusts only the physics box
                    this.Attack.body.setOffset(-19, -38);
                    // Attack.setAlpha(0);
                    // Removes an enemy after overlapping with their sprite
                    scene.physics.add.overlap(this.Attack, this.Enemies, (attack, enemy) => {
                        this.Attack.anims.stop();
                        enemy.destroy();
                        this.Enemies.remove(enemy, true, true);
                    })
                    scene.time.delayedCall(200, () => {
                        this.Attack.destroy();
                        this.isAttacking = false;
                    })
                    console.log("Attack");
                }
                EnemySpawn(scene) {
                    let EnemyX, EnemyY;
                    this.SpawnerList = this.Spawners.getChildren();
                    this.SpawnerSelection = Math.floor(Math.random() * this.SpawnerList.length);
                    this.WarningList[this.SpawnerSelection].setAlpha(1);
                    this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            EnemyX = this.SpawnerList[this.SpawnerSelection].x;
                            EnemyY = this.SpawnerList[this.SpawnerSelection].y;
                            this.Enemy = scene.physics.add.sprite(EnemyX, EnemyY, 'DemIdleDown').setScale(0.6);
                            this.Enemy.setSize(100, 100);
                            this.Enemy.setOffset(45, 45);
                            this.Enemies.add(this.Enemy);
                            this.EnemiesCount = this.Enemies.getChildren();
                            this.WarningList[this.SpawnerSelection].setAlpha(0);
                        },
                        callbackScope: this
                    });
                }
                TreeSpawn(scene) {
                    this.TreeCoord = {
                        x: Math.floor(Math.random() * 2000),
                        y: Math.floor(Math.random() * 2000)
                    }
                    while (Math.abs(this.Player.x - this.TreeCoord.x) < 200 && Math.abs(this.Player.y - this.TreeCoord.y) < 200) {
                        this.TreeCoord = {
                            x: Math.floor(Math.random() * 2000),
                            y: Math.floor(Math.random() * 2000)
                        }
                    }
                    this.Trees.children.iterate(Tree => {
                        while (Math.abs(Tree.x - this.TreeCoord.x) < 100 && Math.abs(Tree.y - this.TreeCoord.y) < 100) {
                            this.TreeCoord = {
                                x: Math.floor(Math.random() * 2000),
                                y: Math.floor(Math.random() * 2000)
                            }
                        }
                    });
                    this.Tree = scene.physics.add.sprite(this.TreeCoord.x, this.TreeCoord.y, this.TreeImageKeys[Math.floor(Math.random() * this.TreeImageKeys.length)]);
                    this.Tree.setSize(40, 60);
                    this.TreeRoot = scene.physics.add.sprite(this.TreeCoord.x, this.TreeCoord.y + 50, null);
                    this.TreeRoot.setSize(20, 32);
                    this.TreeRoot.setAlpha(0);
                    this.Trees.add(this.Tree);
                    this.TreeRoots.add(this.TreeRoot);
                }
                HouseSpawn(scene) {
                    this.HouseCoord = {
                        x: Math.floor(Math.random() * 2000),
                        y: Math.floor(Math.random() * 2000)
                    }
                    while (Math.abs(this.Player.x - this.HouseCoord.x) < 300 && Math.abs(this.Player.y - this.HouseCoord.y) < 300) {
                        this.HouseCoord = {
                            x: Math.floor(Math.random() * 2000),
                            y: Math.floor(Math.random() * 2000)
                        }
                    }
                    this.HouseKey = this.FirstHouseImageKeys[Math.floor(Math.random() * this.FirstHouseImageKeys.length)];
                    this.House = scene.physics.add.sprite(this.HouseCoord.x, this.HouseCoord.y, this.HouseKey);
                    this.HouseFoundation = scene.physics.add.sprite(this.HouseCoord.x, this.HouseCoord.y + 75, null);
                    if (this.HouseKey == 'House1') {
                        this.House.setSize(this.House.width - 85, 180);
                        this.House.setOffset(20, 0);
                        this.HouseFoundation.setSize(this.House.width - 84, 50);
                        this.HouseFoundation.setOffset(-48, 0);
                    }
                    else {
                        this.House.setSize(this.House.width, 180);
                        this.HouseFoundation.setSize(this.House.width + 1, 50);
                    }
                    this.HouseFoundation.setAlpha(0);
                    this.Houses.add(this.House);
                    this.HouseFoundations.add(this.HouseFoundation);
                }
                SpawnerPlacement(scene) {
                    this.SpawnerCoord = {
                        x: Math.floor(Math.random() * 100) * 20,
                        y: Math.floor(Math.random() * 100) * 20
                    }
                    while (Math.abs(this.Player.x - this.SpawnerCoord.x) < 300 && Math.abs(this.Player.y - this.SpawnerCoord.y) < 300) {
                        this.SpawnerCoord = {
                            x: Math.floor(Math.random() * 100) * 20,
                            y: Math.floor(Math.random() * 100) * 20
                        }
                    }
                    this.Spawners.children.iterate(Spawner => {
                        while (Math.abs(Spawner.x - this.SpawnerCoord.x) < 100 && Math.abs(Spawner.y - this.SpawnerCoord.y) < 100) {
                            this.SpawnerCoord = {
                                x: Math.floor(Math.random() * 100) * 20,
                                y: Math.floor(Math.random() * 100) * 20
                            }
                        }
                    }
                    );
                    this.Spawner = scene.physics.add.sprite(this.SpawnerCoord.x, this.SpawnerCoord.y, 'Spawner');
                    this.Warning = scene.add.sprite(this.SpawnerCoord.x, this.SpawnerCoord.y, 'Warning').setScale(0.1);
                    this.Warning.setAlpha(0);
                    this.Warnings.add(this.Warning);
                    this.WarningList = this.Warnings.getChildren();
                    this.Spawners.add(this.Spawner);
                }
                WordSpawn(scene, word) {
                    this.WordCoord = {
                        x: Math.floor(Math.random() * 900) + 50,
                        y: Math.floor(Math.random() * 900) + 50
                    }
                    this.Word = scene.physics.add.sprite(this.WordCoord.x, this.WordCoord.y, 'Word').setScale(0.8);
                    this.Word.setDepth(Infinity);
                    this.WordText = scene.add.text(0, 0, `${word}`, { fontSize: '18px', fill: '#272727', fontStyle: "bold", wordWrap: { width: 100 } });
                    this.WordText.setX(this.Word.x - this.WordText.width / 2);
                    this.WordText.setY(this.Word.y - this.WordText.height / 2);
                    this.WordText.setDepth(Infinity);
                    this.WordTexts.add(this.WordText);
                    this.WordTextList = this.WordTexts.getChildren();
                    this.WordContainer = scene.add.container(this.WordCoord.x, this.WordCoord.y, [this.Word, this.WordText]);
                    this.Words.add(this.Word);
                }
                // WordPickUp(scene) {

                // }
            }

            class PauseMenu extends Phaser.Scene {
                constructor() {
                    super({ key: "PauseMenu" });
                }

                create() {
                    // Add text to indicate the game is paused
                    this.add.text(550, 300, 'Game Paused', { fontSize: '32px', fill: '#FFF' }).setOrigin(0);

                    // Add a resume button
                    const resumeButton = this.add.text(600, 400, 'Resume', { fontSize: '32px', fill: '#FFF' }).setOrigin(0).setInteractive();

                    // Resume the game when the resume button is clicked
                    resumeButton.on('pointerdown', () => {
                        this.scene.stop();
                        this.scene.resume('MainGame');
                    });

                    // Resume the game when the ESC key is pressed again
                    this.input.keyboard.on("keydown", (event) => {
                        if (event.code === "Escape") { // Check if ESC key is pressed
                            this.scene.stop(); // Pause the game
                            this.scene.resume("MainGame"); // Show pause menu
                        }
                    });
                }
            }

            class UiMenu extends Phaser.Scene {
                constructor() {
                    super({ key: "UiMenu" });
                }

                preload() {
                    this.load.image('Sentence', '../img/tablick/name_tree.png');
                }

                create() {
                    this.score = 0;
                    this.scoreText = this.add.text(10, 10, `Score: ${this.score}`, { fontSize: '32px', fill: '#FFF' });
                    this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            this.score++;
                            this.scoreText.setText(`Score: ${this.score}`);
                        },
                        callbackScope: this,
                        loop: true
                    })

                    this.Sentence = this.add.sprite(400, 70, 'Sentence').setScale(1.2);
                    this.subject = this.registry.get('Subject');
                    this.Words = this.add.group();
                    // for(let i = 0; i < 3; i++){
                    //     this.Word = this.add.text(240 + i * 100, 30, {fontSize: '30px', fill: '#000'});
                    //     this.Words.add(this.Word);
                    // }
                }
                update() {
                }
            }

            const config = {
                type: Phaser.AUTO,
                width: 1300,
                height: 700,
                backgroundColor: '#3498db',
                scene: [MainGame, PauseMenu, UiMenu],
                physics: {
                    default: 'arcade',
                    arcade: {
                        debug: true
                    }
                },
            };

            const game = new Phaser.Game(config);
        }
    })
})
