document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

const main = document.querySelector('.navigation')
const button = document.querySelector('#menu');

button.addEventListener('click', () => {
    main.classList.toggle('show');
    button.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Alabang Philippines",
        location: "Alabang, Muntinlupa City",
        dedicated: "2026, January, 18",
        area: 35998,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/alabang-philippines-temple/alabang-philippines-temple-65306-main.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Quezon City, Metro Manila",
        dedicated: "1984, September, 25-27",
        area: 26683,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
    },
    {
        templeName: "Bacolod Philippines",
        location: "Bacolod City, Negros Occidental",
        dedicated: "2026, May, 31",
        area: 27895,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bacolod-philippines-temple/bacolod-philippines-temple-70237-main.jpg"
    },
];

function displayTemples(templeList) {
    const album = document.querySelector("#temples-album");

    album.innerHTML = "";

    templeList.forEach(temple => {
        const templeCard = document.createElement("section");
        templeCard.classList.add("temple-card");

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>LOCATION: </strong> ${temple.location}</p>
            <p><strong>DEDICATED: </strong> ${temple.dedicated}</p>
            <p><strong>SIZE: </strong> ${temple.area} sq ft</p>
            <img
                src="${temple.imageUrl}"
                srcset="${temple.imageUrl} 400w, ${temple.imageUrl} 800w"
                alt="${temple.templeName} Temple" 
                sizes="(max-width: 700px) 100vw, 50vw
                loading="lazy" 
                width="400" 
                height="250">
        `;
        album.appendChild(templeCard);
    });
}

displayTemples(temples);

document.querySelector('a[href="#old"]').addEventListener("click", (event) => {
    event.preventDefault();
    const oldTemples = temples.filter(temple => {
        const year = getYear(temple.dedicated);
        return year < 1900;
    });
    displayTemples(oldTemples);
});

document.querySelector('a[href="#new"]').addEventListener("click", (event) => {
    event.preventDefault();
    const newTemples = temples.filter(temple => {
        const year = getYear(temple.dedicated);
        return year > 2000;
    });
    displayTemples(newTemples);
});

function getYear(date) {
    const match = date.match(/\b\d{4}\b/);
    return match ? parseInt(match[0], 10) : 0;
}

document.querySelector('a[href="#large"]').addEventListener("click", (event) => {
    event.preventDefault();
    const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });
    displayTemples(largeTemples);
})

document.querySelector('a[href="#small"]').addEventListener("click", (event) => {
    event.preventDefault();
    const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });
    displayTemples(smallTemples);
})

document.querySelector('a[href="#home"]').addEventListener("click", (event) => {
    event.preventDefault();
    displayTemples(temples);
})