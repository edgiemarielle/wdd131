const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const list = document.querySelector('#list');



let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

buttonElement.addEventListener('click', () => {
    if (inputElement.value != '') {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = '';
        inputElement.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.appendChild(deleteButton);
    list.appendChild(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
    localStorage.setItem('faveBOMList', JSON.stringify(chaptersArray));
}    

function getChapterList() {
    return JSON.parse(localStorage.getItem('faveBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}