const taskDescriptions = [
    `Розробити просту гіпертекстову сторінку, яка буде містити матеріал лекції по даному предмету. ` +
    `Використати мінімальну кількість гіпертекстових тегів. ` +
    `Створити посилання на додаткові джерела інформації по даних питаннях, які можете знайти на сайті http://www.w3schools.com`,

    `Створити гіпертекстову сторінку з трьома фреймами (iframe). У верхній фрейм помістити назву даного курсу. ` +
    `В лівий фрейм помістити список лабораторних робіт. ` +
    `В правому фреймі повинно з'являтись завдання на відповідну роботу, що буде вибрана в лівому фреймі.`,

    `Для гіпертекстової сторінки сторінки, що була створена в першій лабораторній роботі додати каскадну таблицю стилів. ` +
    `При здачі лабораторної роботи слід вміти змінювати стилі елементів у відповідності до вимог викладача.`,

    `Створити гіпертекстову сторінку, яка буде включати декілька обзаців та одне растрове зображення. ` +
    `Растрове зображення помістити безпосередньо в HTML-документ за допомогою протоколу DATA. ` +
    `Створити за допомогою скриптів зміну стилів абзаців при наведенні графічного курсора. ` +
    `При наведенні миші на графічне зображення воно повинно збільшуватись удвічі.`,

    `Створити гіпертекстову сторінку з формою, куди помістити всі елементи(!!!), які дозволяють ввід даних. ` +
    `Написати CGI-скрипт на мові (C++|PHP|Perl|JavaScript|Shell).` +
    `За допомогою скрипта забезпечити контроль даних перед відправкою їх на сервер. ` +
    `Для обробки даних, які переслані на сервер, створити CGI-скрипт на мові Perl. Розкодовані дані повернути клієнтові`,

    `Написати PHP-скрипт для авторизації клієнта. `,
    `Дані про клієнтів зберігати в таблиці MySQL або SQLITE. Для розробки бази даних можна використати PHPMyAdmin.`
]

window.addEventListener('DOMContentLoaded', () => {
    let leftIframe = document.getElementById("left-iframe");
    let rightIframe = document.getElementById("right-iframe");

    leftIframe.addEventListener('load', () => {

        rightIframe.addEventListener('load', () => {
            let leftIframeInnerDocument = leftIframe.contentWindow.document;
            let select = leftIframeInnerDocument.getElementById("task-select");

            select.addEventListener("change", () => {
                let rightIframeInnerDocument = rightIframe.contentWindow.document;
                let taskDescription = rightIframeInnerDocument.getElementById("task-description");

                let selectedValue = select.options[select.selectedIndex].value;

                taskDescription.innerText = taskDescriptions[selectedValue];
            })
        })
    });
});