const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = `Last Modification: ${document.lastModified}`;
}

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
    });
}

const attendance = Array.from(
    document.querySelectorAll('input[name="attend"]')
);

attendance.forEach((option) => {
    option.addEventListener("change", (event) => {
        console.log(`Selected attendance: ${option.value}`);
    });
});

function saveSentRsvp(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const rsvp = {
        name: formData.get("name"),
        attendance: formData.get("attend"),
        guests: formData.get("guest")
    };

    localStorage.setItem("weddingRsvp", JSON.stringify(rsvp));
    window.location.href = form.action;
}

function rsvpConfirmation() {
    const received = document.querySelector("#confirmation");
    const saved = localStorage.getItem("weddingRsvp");

    if (!received || !saved) {
        return;
    }

    const rsvp = JSON.parse(saved);
    received.textContent = `${rsvp.name}, thank you for your RSVP!`;
}

const rsvpForm = document.querySelector('form[action="sent-rsvp.html"]');

if (rsvpForm) {
    rsvpForm.addEventListener("submit", saveSentRsvp);
}

rsvpConfirmation();