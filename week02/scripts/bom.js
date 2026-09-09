const inputElement = document.querySelector('#favchap');
const buttonElement = document.querySelector('button');
const list = document.querySelector('#list');


buttonElement.addEventListener('click', function () {
    if (inputElement.value != '') {
        const li = document.createElement('li');
        li.textContent = inputElement.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            inputElement.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
        inputElement.value = '';
    }
    inputElement.focus();
});