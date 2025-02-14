document.addEventListener("DOMContentLoaded", function () {
    getDetails(); // ✅ Load initial details on page load
});
function exit() {
    /*
    stores card in database, then exits to card collection page
    */
    window.location.href = "main-page.html"
  }

function getDetails() {
    /*
    Imagine you get the data using PHP and MySQL and store it here in a JSON file:
    */
    let main = {
        "food_name": "Co-op Southern Fried Style Chicken with Coleslaw & BBQ Sauce on a White Tortilla Wrap 211g",
        "calories": 294,
        "fat": 6.2,
        "saturated_fat": 0.8,
        "carbohydrates": 40,
        "sugar": 3.6,
        "fibre": 3.8,
        "protein": 18,
        "salt": 1.04
    };

    let snack = {
        "food_name": "Kinder Bueno Milk Chocolate and Hazelnut Twin Bars Single Pack 43g",
        "calories": 250,
        "fat": 13,
        "saturated_fat": 1.5,
        "carbohydrates": 30,
        "sugar": 2.1,
        "fibre": 2.5,
        "protein": 3.5,
        "salt": 0.8
    };

    let drink = {
        "food_name": "Co-op Starbucks DoubleShot Espresso Iced Coffee 200ml",
        "calories": 110,
        "fat": 0.2,
        "saturated_fat": 0.1,
        "carbohydrates": 25,
        "sugar": 20,
        "fibre": 1.0,
        "protein": 1.2,
        "salt": 0.02
    };

    changeDetails(main, snack, drink);
    
}

function changeDetails(main, snack, drink) {
    document.getElementById("main__name").textContent = `Main: ${main.food_name}`;
    document.getElementById("snack__name").textContent = `Snack: ${snack.food_name}`;
    document.getElementById("drink__name").textContent = `Drink: ${drink.food_name}`;

    const mainContent1 = 
    `
    Calories: ${main.calories}<br>
    Protein: ${main.protein}<br>
    Fat: ${main.fat}<br>
    Saturated Fat: ${main.saturated_fat}
    `
    const mainContent2 = 
    `
    Fibre: ${main.fibre}<br>
    Carbohydrates: ${main.carbohydrates}<br>
    Sugar: ${main.sugar}<br>
    Salt: ${main.salt}
    `
    
    document.querySelector(".main1").innerHTML = mainContent1;
    document.querySelector(".main2").innerHTML = mainContent2;

    const snackContent1 = 
    `
    Calories: ${snack.calories}<br>
    Protein: ${snack.protein}<br>
    Fat: ${snack.fat}<br>
    Saturated Fat: ${snack.saturated_fat}
    `
    const snackContent2 = 
    `
    Fibre: ${snack.fibre}<br>
    Carbohydrates: ${snack.carbohydrates}<br>
    Sugar: ${snack.sugar}<br>
    Salt: ${snack.salt}
    `
    
    document.querySelector(".snack1").innerHTML = snackContent1;
    document.querySelector(".snack2").innerHTML = snackContent2;

    const drinkContent1 = 
    `
    Calories: ${drink.calories}<br>
    Protein: ${drink.protein}<br>
    Fat: ${drink.fat}<br>
    Saturated Fat: ${drink.saturated_fat}
    `
    const drinkContent2 = 
    `
    Fibre: ${drink.fibre}<br>
    Carbohydrates: ${drink.carbohydrates}<br>
    Sugar: ${drink.sugar}<br>
    Salt: ${drink.salt}
    `
    
    document.querySelector(".drink1").innerHTML = drinkContent1;
    document.querySelector(".drink2").innerHTML = drinkContent2;

}
document.getElementById("title").addEventListener("keypress", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {  
        event.preventDefault();

        let cardName = this.value.trim();
        if (cardName !== "") {
            let styleSheet = document.createElement("style");
            let flipCard = ".flip-card:hover .flip-card-inner {transform: rotateY(180deg);}"
            styleSheet.innerHTML = flipCard;
            document.head.appendChild(styleSheet);
            this.setAttribute("readonly", true);
        }
    }
});
  