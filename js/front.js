
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
let getSimple = 0;
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

    simpleVillage.style.background = 'url("../img/world_elemets/vilage1.png")';
    document.getElementById("present-simplelock").style.display = "none";
    getSimple = 1;
});
