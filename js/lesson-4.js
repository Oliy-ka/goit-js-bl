// task-1
// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
const titleEl = document.querySelector("#title");
console.log(titleEl);
// 3 - отримай елемент class="list" і виведи його в консоль;
const listEl = document.querySelector(".list");
console.log(listEl);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const listItems = document.querySelectorAll("[data-topic]");
console.log(listItems);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(listItems[0]);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
console.log(listItems[listItems.length - 1]);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const firstTitle = document.querySelector("h1");
console.log(firstTitle.nextElementSibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const thirdTitle = document.querySelectorAll("h3");
console.log(thirdTitle);
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
thirdTitle.forEach(title => title.classList.add("active"));
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const navItem = document.querySelector('[data-topic="navigation"]');
console.log(navItem);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
navItem.setAttribute('style', 'background-color: yellow;');
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraph = navItem.querySelector('p');
console.log(paragraph)
paragraph.textContent = "Я змінив тут текст!";
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const findEl = document.querySelector(`[data-topic="${currentTopic}"]`)
console.log(findEl)
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
findEl.setAttribute('style', 'background-color: blue;')
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const findTittle = document.querySelector(".completed");
console.log(findTittle);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
findTittle.parentElement.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const newP = document.createElement("p");
newP.textContent = "Об'єктна модель документа (Document Object Model)";
console.log(newP);
listEl.prepend(newP);
// findTittle.insertAdjacentElement("afterend", listEl);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу".
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const creatLi = document.createElement("li");
// const creatH3 = document.createElement("h3");
// const creatP = document.createElement("p");

// creatH3.textContent = "Властивість innerHTML";
// creatP.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";

// creatLi.append(creatH3);
// creatLi.append(creatP);
// listEl.append(creatLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
listEl.insertAdjacentHTML("beforeend", `<li>
    <h3> "Властивість innerHTML"</h3>
<p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
</p>
</li>`);

// 20 - очисти список
// listEl.innerHTML = ``;



// task-2
// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const cont = document.querySelector(".number-container");

for (let i = 0; i < 100; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    const numberBlock = document.createElement('div');
    numberBlock.className = 'number';
    numberBlock.textContent = randomNumber;

    if (randomNumber % 2 === 0) {
        numberBlock.classList.add('even');
    } else {
        numberBlock.classList.add('odd');
    }

    cont.append(numberBlock);
}


// task-3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.








