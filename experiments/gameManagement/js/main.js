let categories = loadCategoriesFromStorage();

function loadCategoriesFromStorage() {
    return JSON.parse(localStorage.getItem("categories"));
}

function saveCategoriesToStorage() {
    localStorage.setItem("categories", JSON.stringify(categories));
}

function populateOptions() {
    let options = document.getElementById("categories");
    for(let category in categories) {
        options.innerHTML += "<option>" + category + "</option>";
    }
    showGames(document.getElementById("categories").value);
}

function showGames(category) {
    let games = categories[category];
    let element = document.getElementById("games");
    element.innerHTML = "";

    for(let i = 0; i < games.length; i++) {
        element.innerHTML += "<option>" + games[i] + "</option>";
    }
}

function addCategory() {
    let newCategory = prompt("Welche Kategorie wollen Sie hinzufügen?");
    let categoryElement = document.getElementById("categories");
    categories[newCategory] = [];
    categoryElement.innerHTML += "<option>" + newCategory + "</option>";
    categoryElement.value = newCategory;
    showGames(newCategory);
    saveCategoriesToStorage();
}

function addGame() {
    let currentCategory = document.getElementById("categories").value;
    let newGameName = document.getElementById("game").value;
    if(!categories[currentCategory].includes(newGameName)) {
        categories[currentCategory].push(newGameName);
        saveCategoriesToStorage();
    }
    else {
        console.log("Spiel bereits in Kategorie vorhanden");
    }

    showGames(currentCategory);
}

document.getElementById("categories").onchange = function () {
    showGames(this.value);
};

document.getElementById("addCategory").onclick = function () {
    addCategory();
};

document.getElementById("addGame").onclick = function () {
    addGame();
};

populateOptions();