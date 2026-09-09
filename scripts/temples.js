document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const main = document.querySelector('.navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
    main.classList.toggle('show');
    button.classList.toggle('show');
});