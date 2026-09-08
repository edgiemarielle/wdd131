const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


buttonElement.addEventListener('click', function () {
    if (input.value != '') {
        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
        input.value = '';
    }
    input.focus();
});

