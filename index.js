// Navburger animation
function menuToggle() {
    // Toggle hamburger menu lines when menu is open
    const menuLines = document.querySelectorAll('.hidden')
    menuLines.forEach(span => span.classList.toggle('icon-active'));

    // Toggle navlinks
    document.querySelector('.nav-items').classList.toggle('menu-active');
}

// Give menu icon toggle function
document.querySelector('.navburger').addEventListener('click', menuToggle);

// Featured Section Slider
let slides = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#right-arrow'),
    arrowLeft = document.querySelector('#left-arrow'),
    current = 0;

// Clear Slides    
function reset(){
    for(let i =0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
}

// Initialise Featured Slider
function startSlides(){
    reset();
    slides[0].style.display = 'grid';
}

// Show previous section
function slideLeft() {
    reset();
    slides[current - 1].style.display = 'grid';
    current--;
}

// Show next section 
function slideRight() {
    reset();
    slides[current + 1].style.display = 'grid';
    current++;
}

// Left Arrow event listener 
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = slides.length;
    }
    slideLeft();
});

// Right Arrow event listener
arrowRight.addEventListener('click', function(){
    if(current === slides.length - 1){
        current = -1
    }
    slideRight();
});

startSlides();