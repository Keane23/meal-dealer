/*
Javascript code for the double input sliders
*/

window.onload = function(){
    slideOne();
    slideTwo();
}
let sliderOne;
let sliderTwo;
let minGap = 0;
let displayValOne;
let displayValTwo;
let sliderTrack;
let sliderMaxValue;

function changeTrack(track) {
    sliderTrack = document.querySelector(track);
}

function slideOne(slider1, slider2, range_value){
    sliderMaxValue = document.getElementById("slider-1").max;
    sliderOne = document.getElementById(slider1);
    sliderTwo = document.getElementById(slider2);
    displayValOne = document.getElementById(range_value);
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(slider1, slider2, range_value){
    sliderOne = document.getElementById(slider1);
    sliderTwo = document.getElementById(slider2);
    displayValTwo = document.getElementById(range_value);
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #163446 ${percent1}% , #B0CFDF ${percent1}% , #B0CFDF ${percent2}%, #163446 ${percent2}%)`;
}

/*
Javascript code for storing the data from the filter page
*/

let nutrients = {
"calorieRange": [],
"proteinRange": [],
"carbohydrateRange": [],
"fatRange": [],
"saturatedFatRange": [],
"sugarRange": [],
"fibreRange": [],
"saltRange": [],
"vegetarianBool": false,
"veganBool": false,
"halalBool": false,
"glutenFreeBool": false,
"lactoseIntolerantBool": false,
"nutAllergyBool": false,
}

    function findProducts() {
        nutrients["calorieRange"] = [Number(document.getElementById("range1").textContent), Number(document.getElementById("range2").textContent)]
        nutrients["proteinRange"] = [Number(document.getElementById("range3").textContent), Number(document.getElementById("range4").textContent)]
        nutrients["carbohydrateRange"] = [Number(document.getElementById("range5").textContent), Number(document.getElementById("range6").textContent)]
        nutrients["fatRange"] = [Number(document.getElementById("range7").textContent), Number(document.getElementById("range8").textContent)]
        nutrients["saturatedFatRange"] = [Number(document.getElementById("range9").textContent), Number(document.getElementById("range10").textContent)]
        nutrients["sugarRange"] = [Number(document.getElementById("range11").textContent), Number(document.getElementById("range12").textContent)]
        nutrients["fibreRange"] = [Number(document.getElementById("range13").textContent), Number(document.getElementById("range14").textContent)]
        nutrients["saltRange"] = [Number(document.getElementById("range15").textContent), Number(document.getElementById("range16").textContent)]
        nutrients["vegetarianBool"] = document.getElementById("vegetarian").checked
        nutrients["veganBool"] = document.getElementById("vegan").checked
        nutrients["halalBool"] = document.getElementById("halal").checked
        nutrients["glutenFreeBool"] = document.getElementById("gluten-free").checked
        nutrients["lactoseIntolerantBool"] = document.getElementById("lactose-intolerant").checked
        nutrients["nutAllergyBool"] = document.getElementById("nut-allergy").checked

}

function nextPage() {
    window.location.href = "meal-options-page.html"
}

/*
Javascript code for showing the meal options created from the filter
*/

function showCard() {
    window.location.href = "display-card-page.html"
}

function displayMealOptions() {
    
    for (let i = 1; i < 6; i++) {
        document.getElementById(`meal__slide${i}`).innerHTML =
        `<div class="carousel__snapper">
            <a href="#meal__slide${i === 1 ? i + 4 : i - 1}" class="carousel__prev">Go to last slide</a>Stupid
            <a href="#meal__slide${i === 5 ? i - 4 : i + 1}" class="carousel__next">Go to next slide</a>
        </div>`
    }
    for (let i = 1; i < 6; i++) {
        document.getElementById(`snacks__slide${i}`).innerHTML =
        `<div class="carousel__snapper">
            <a href="#snacks__slide${i === 1 ? i + 4 : i - 1}" class="carousel__prev">Go to last slide</a>Stupid
            <a href="#snacks__slide${i === 5 ? i - 4 : i + 1}" class="carousel__next">Go to next slide</a>
        </div>`
    }
    for (let i = 1; i < 6; i++) {
        document.getElementById(`drink__slide${i}`).innerHTML =
        `<div class="carousel__snapper">
            <a href="#drink__slide${i === 1 ? i + 4 : i - 1}" class="carousel__prev">Go to last slide</a>Stupid
            <a href="#drink__slide${i === 5 ? i - 4 : i + 1}" class="carousel__next">Go to next slide</a>
        </div>`
    }
}