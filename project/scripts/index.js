document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });
}

const attendance = document.querySelectorAll('input[name="attend"');

attendance.forEach((option) => {
    option.addEventListener("change", (event) => {
        console.log("Selected attendance:", event.target.value);
    });
});