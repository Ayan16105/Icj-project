// document.querySelector(".tub-img").addEventListener("mouseover",(e)=>{
    
        
//         //console.log(document.querySelector(".circle"));
//         let a = document.querySelector(".circle")
//         a.classList.toggle("circle-hover");
    
// })


// Array.from(document.getElementsByClassName("img-box")).forEach((key) => {
//     // Hover in (mouseover)
//     key.addEventListener("click", (e) => {
//         // Find the specific ".circle" inside the current "key" (img-box)
//         let a = key.firstChild;
//         a.classList.add("circle-hover");  // Add the hover class to display circle
//     });

//     // Hover out (mouseout)
//     key.addEventListener("click", function() {
//         // Find the specific ".circle" inside the current "key" (img-box)
//         let a = key.firstElementChild;
//         console.log(a)
//         a.classList.remove("circle-hover");  // Remove the hover class
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    // Your JavaScript code here
    
});
function createSlider(sliderContainerClass) {
    // Get the slider container and slider elements
    const sliderContainer = document.querySelector(`.${sliderContainerClass}`);
    const slider = sliderContainer.querySelector('.slider');
    const images = sliderContainer.querySelectorAll('.slider img');
    
    let currentIndex = 0;
    const slideWidth = images[0].clientWidth + 20; // Image width + margin
    const totalSlides = images.length;
    let intervalId; // For storing the interval reference

    // Function to move the slider to the next image
    function slideNext() {
        if (currentIndex < totalSlides - 1) {  // Only move to the next slide if not at the last image
            currentIndex++;
        }
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Function to move the slider to the previous image
    function slidePrev() {
        if (currentIndex > 0) {  // Only move to the previous slide if not at the first image
            currentIndex--;
        }
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Start auto sliding on hover for the "Next" button
    sliderContainer.querySelector('.next-btn').addEventListener('mouseover', () => {
        intervalId = setInterval(slideNext, 800); // Slide every 500ms while hovering
    });

    // Stop sliding when hover is removed from the "Next" button
    sliderContainer.querySelector('.next-btn').addEventListener('mouseleave', () => {
        clearInterval(intervalId);  // Stop auto sliding when the mouse leaves
    });

    // Start auto sliding on hover for the "Prev" button
    sliderContainer.querySelector('.prev-btn').addEventListener('mouseover', () => {
        intervalId = setInterval(slidePrev, 800); // Slide every 500ms while hovering
    });

    // Stop sliding when hover is removed from the "Prev" button
    sliderContainer.querySelector('.prev-btn').addEventListener('mouseleave', () => {
        clearInterval(intervalId);  // Stop auto sliding when the mouse leaves
    });
}

// Initialize multiple sliders by passing the unique class names of each slider
createSlider('slider1');
createSlider('slider2');
createSlider('slider3');
createSlider('slider4');

