document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;


const staticTemperature = 28;
const staticWindSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6125 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    const windChillSpan = document.getElementById('wind-chill');

    if (staticTemperature <= 10 && staticWindSpeed > 4.8) {
        const calculatedFactor = calculateWindChill(staticTemperature, staticWindSpeed);
        windChillSpan.textContent = calculatedFactor.toFixed(1) + "°C";
    } else {
        windChillSpan.textContent = " N/A";
    }
}

window.addEventListener('DOMContentLoaded', displayWindChill)
