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
