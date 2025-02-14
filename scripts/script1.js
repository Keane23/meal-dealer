const carousels = {
    main: document.querySelector('.main-carousel .carousel__viewport'),
    snack: document.querySelector('.snack-carousel .carousel__viewport'),
    drink: document.querySelector('.drink-carousel .carousel__viewport')
};

let currentIndex = {
    main: 0,
    snack: 0,
    drink: 0
};

const totalSlides = {
    main: document.querySelectorAll('.main-carousel .carousel__slide').length,
    snack: document.querySelectorAll('.snack-carousel .carousel__slide').length,
    drink: document.querySelectorAll('.drink-carousel .carousel__slide').length
};

function updateCarousel(category) {
    const offset = currentIndex[category] * -100;
    carousels[category].style.transform = `translateX(${offset}%)`;
}

function nextSlide(category) {
    if (currentIndex[category] < totalSlides[category] - 1) {
        currentIndex[category]++;
    } else {
        currentIndex[category] = 0; // Loop back to start
    }
    updateCarousel(category);
}

function prevSlide(category) {
    if (currentIndex[category] > 0) {
        currentIndex[category]--;
    } else {
        currentIndex[category] = totalSlides[category] - 1; // Loop to last slide
    }
    updateCarousel(category);
}

function confirmChoice() {
    alert("Meal, Snack, and Drink chosen!"); 
    window.location.href = "display-card-page.html";
}