function getElement(id) {
    return document.getElementById(id);
}

function defineMeals() {
    let array = [];
    array.push(["Gordon Bleu", 14.90, "A, B, C"]);
    array.push(["Schnitzel", 12.50, "C, D"]);
    array.push(["Kaiserschmarren", 10.30, "D, F"]);

    return array;
}

function submit() {
    let index = parseInt(getElement("index").value),
        amount = parseInt(getElement("amount").value),
        order = getElement("order"),
        meal = getElement("meal"),
        orderAmount = getElement("orderAmount"),
        allergenic = getElement("allergenic"),
        foodList = defineMeals();
        error = getElement("error");
        chosenMeal = null;

    if(index > 0 && index <= foodList.length) {
        chosenMeal = foodList[index - 1];
        order.className = "visible";
        meal.innerHTML = amount + " Mal " + chosenMeal[0] + " á €" + chosenMeal[1];
        orderAmount.innerHTML = "Gesamtpreis: €" + (amount * chosenMeal[1]);
        allergenic.innerHTML = "Allergene: " + chosenMeal[2];
    }
    else {
        error.className = "visible error";
        error.innerHTML = "Menünummer muss zwischen 1 und " + foodList.length + " liegen!";
    }
}