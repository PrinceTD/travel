const marsCost = 5000;
const moonCost = 3000;


function handleQuantity(planet, oprator) {

    let quantityInput = parseInt(document.getElementById(planet + '-quantity').value);
    let quantity = parseInt(quantityInput)
    if (oprator == "positive") {
        quantity++
    }
    else {
        if (quantity < 1) {
            return;
        }
        else {
            quantity--
        }
    }

    document.getElementById(planet + '-quantity').value = quantity;
    calculateJourney(planet)
}

let marsTotal = 0;
let moonTotal = 0;
function calculateJourney(planet) {
    let quantityInput = parseInt(document.getElementById(planet + '-quantity').value);
    let quantity = parseInt(quantityInput);
    if (planet === "mars") {
        marsTotal = quantity * marsCost;
        updateUI(planet, marsTotal);
    }
    else {
        moonTotal = quantity * moonCost;
        updateUI(planet, moonTotal);
    }
    total(marsTotal, moonTotal)
}

function updateUI(planet, total) {
    const planetTotal = document.getElementById(planet + "-total");
    planetTotal.innerText = total;
}
function total(marsTotal, moonTotal) {
    let total = marsTotal + moonTotal;
    document.getElementById("total").innerText = total;
}