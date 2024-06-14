let cakes = [];
let desserts = [];
let specials = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        cakes = data.cakes;
        desserts = data.desserts;
        specials = data.specials;
        updateCakeDisplay();
        updateDessertDisplay();
        updateSpecialDisplay();
    });

let currentCakeIndex = 0;
let currentDessertIndex = 0;
let currentSpecialIndex = 0;

function updateCakeDisplay() {
    document.getElementById('cake-name').textContent = cakes[currentCakeIndex].name;
    document.getElementById('cake-description').textContent = cakes[currentCakeIndex].description;
    document.getElementById('cake-image').src = cakes[currentCakeIndex].image;
}

function updateDessertDisplay() {
    document.getElementById('dessert-name').textContent = desserts[currentDessertIndex].name;
    document.getElementById('dessert-description').textContent = desserts[currentDessertIndex].description;
    document.getElementById('dessert-image').src = desserts[currentDessertIndex].image;
}

function updateSpecialDisplay() {
    document.getElementById('special-name').textContent = specials[currentSpecialIndex].name;
    document.getElementById('special-description').textContent = specials[currentSpecialIndex].description;
    document.getElementById('special-image').src = specials[currentSpecialIndex].image;
}

document.getElementById('prev-cake').addEventListener('click', () => {
    currentCakeIndex = (currentCakeIndex > 0) ? currentCakeIndex - 1 : cakes.length - 1;
    updateCakeDisplay();
});

document.getElementById('next-cake').addEventListener('click', () => {
    currentCakeIndex = (currentCakeIndex < cakes.length - 1) ? currentCakeIndex + 1 : 0;
    updateCakeDisplay();
});

document.getElementById('prev-dessert').addEventListener('click', () => {
    currentDessertIndex = (currentDessertIndex > 0) ? currentDessertIndex - 1 : desserts.length - 1;
    updateDessertDisplay();
});

document.getElementById('next-dessert').addEventListener('click', () => {
    currentDessertIndex = (currentDessertIndex < desserts.length - 1) ? currentDessertIndex + 1 : 0;
    updateDessertDisplay();
});

document.getElementById('prev-special').addEventListener('click', () => {
    currentSpecialIndex = (currentSpecialIndex > 0) ? currentSpecialIndex - 1 : specials.length - 1;
    updateSpecialDisplay();
});

document.getElementById('next-special').addEventListener('click', () => {
    currentSpecialIndex = (currentSpecialIndex < specials.length - 1) ? currentSpecialIndex + 1 : 0;
    updateSpecialDisplay();
});