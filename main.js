// создала ul, в который буду помещаться новые идеи
let ulTag = document.createElement('ul'); // создала новый элемент с тегом ul
ulTag.setAttribute('id', 'page'); // добавила атрибут id и его значение page для тега ul
document.body.appendChild(ulTag); // добавила ul в body

var commentsDivForForm = document.createElement("div"); // добавила div для формы с комментом
commentsDivForForm.id = "commentsDivForm";
commentsDivForForm.className = "commentsDivForForm";
document.body.appendChild(commentsDivForForm);

// каждая новая идея записывается в li общего тега ul при нажатии на кнопку: SUBMIT A NEW IDEA
// можно ещё придумать, чтобы пользователь выбирал фон для своего li с идеей
function createLiWithIdea() {
    let liTag = document.createElement('li'); // создала новый элемент с тегом li
    liTag.textContent = prompt('Type your name'); // заполнила тег содержимым 
    liTag.className = "liTag"; // создала класс для newDiv
    page.appendChild(liTag); // добавила новый <li> в конец <ul> по id = page

    let pTag = document.createElement('p'); // создала новый элемент с тегом li
    pTag.textContent = prompt('Type your Interface or App #IDEA'); // заполнила тег содержимым
    pTag.className = "pTag"; // создала класс для newDiv
    liTag.appendChild(pTag); // добавила новый <li> в конец <ul> по id = page
    liTag.style.backgroundColor = 'rgb(245, 223, 189)'; // перекрасила фон нового div
    liTag.style.width = '450px'; // задала ширину для нового div
    liTag.style.height = '250px'; // задала высоту для нового div
    liTag.style.border = '1px solid #57756a'; // задала границы для нового div

    var divImg = document.createElement("div"); // добавила общий div с сердечком и счётчиком сердечек в li
    divImg.id = "divImg";
    liTag.appendChild(divImg);
    divImg.style.width = '100px';
    divImg.style.height = '100px';

    var divImgTwo = document.createElement("div"); // добавила div для сердечка
    divImgTwo.id = "divImgTwo";
    divImg.appendChild(divImgTwo);

    var heartImg = document.createElement('img'); // добавила картинку сердечка
    heartImg.src = 'img/heart.png';
    heartImg.id = "heartImg";
    heartImg.onmousedown = likeClickBigger;
    divImgTwo.appendChild(heartImg);

    var divNum = document.createElement("div"); // добавила div для счётчика лайков
    divNum.id = "divNum";
    heartImg.onclick = plusLike;
    divImg.appendChild(divNum);

    var divComments = document.createElement("div"); // добавила div с кнопкой комменты
    divComments.id = "divComments";
    divImg.appendChild(divComments);

    var commentsButton = document.createElement('button'); // кнопка комменты
    commentsButton.textContent = 'Comments';
    commentsButton.id = "commentsButton";
    commentsButton.onclick = makeDivForComments;
    divComments.appendChild(commentsButton);




    var commentsDivForForm = document.createElement("div"); // добавила div для формы с комментом
    commentsDivForForm.className = "commentsDivForForm";
    page.appendChild(commentsDivForForm);

    var commentsForm = document.createElement("form"); // добавила форму
    commentsForm.className = "commentsForm";
    commentsDivForForm.appendChild(commentsForm);
    commentsForm.style.width = '450px';
    commentsForm.setAttribute('autocomplete', 'off');
    commentsForm.setAttribute('action', 'index.html');

    var commentsField = document.createElement("input"); // добавила поле для написания коммента
    commentsField.className = "commentsField";
    commentsField.style.fontFamily = 'Montserrat, sans-serif';
    commentsField.style.fontSize = '15px';
    commentsForm.appendChild(commentsField);
    commentsField.setAttribute('type', 'text');
    commentsField.setAttribute('name', 'key word');
    commentsField.setAttribute('TextMode', 'key MultiLine');

    var commentsButtonSend = document.createElement("input"); // добавила кнопку отправки коммента
    commentsButtonSend.className = "commentsButtonSend";
    commentsForm.appendChild(commentsButtonSend);
    commentsButtonSend.style.fontFamily = 'Montserrat, sans-serif';
    commentsButtonSend.style.fontSize = '15px';
    commentsButtonSend.onclick = closeCommentField;
    commentsButtonSend.setAttribute('type', 'submit');
    commentsButtonSend.setAttribute('value', 'Send');
}

// при нажатии на кнопку VIEW IDEAS можно скрыть и раскрыть все идеи на странице
function menuOpenAndClose() {
    if (document.getElementById('page').style.display == 'none') {
        var getUl = document.getElementById('page');
        getUl.style.display = 'inline-block';
    } else {
        var getUl = document.getElementById('page');
        getUl.style.display = 'none';
    }
}

function likeClickBigger() {
    var d = document.getElementById("heartImg");
    d.style.width = '27px';
    d.style.height = '22px';
    d.onmouseup = likeClickDefault;
}

function likeClickDefault() {
    var d = document.getElementById("heartImg");
    d.style.width = '25px';
    d.style.height = '20px';
}

var num = 0;
var countClick = 0;

function plusLike() {
    var plusDig = document.getElementById("divNum");
    for (var i = 0; i <= countClick; i++) {
        var plus = '+';
        num += 1;
        plusDig.textContent = plus + num;
    }
}

function makeDivForComments() {
    var gotCommentsDivForForm = document.getElementById("commentsDivForm");
    gotCommentsDivForForm.style.display = 'inline-block';
}

// показывать алерт при успешной отправке коммента
function closeCommentField() {
    var gotCommentsDiv = document.getElementsByClassName("commentsForm");
    alert('Ваш комментарий успешно добавлен!');
    return false;
}