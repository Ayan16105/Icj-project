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

createSlider('slider2');
createSlider('slider3');
createSlider('slider4');

// Function to animate the counter
function animateCounter(start, end, element, duration) {
    let current = start;
    const increment = end > start ? 1 : -1; // Determine whether to increment or decrement
    const stepTime = Math.abs(Math.floor(duration / (end - start))); // Calculate step time

    const timer = setInterval(function () {
        current += increment;
        element.textContent = current;

        if (current === end) {
            clearInterval(timer); // Stop the timer when the number reaches the end value
            element.textContent = current + "+"; // Add the "+" after reaching 25
        }
    }, stepTime);
}

const counterElement = document.getElementById("counter");

// Call the animateCounter function
animateCounter(0, 25, counterElement, 2000);
document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".custom-slider-wrapper");
    const images = slider.querySelectorAll(".custom-slider-image");

    // Array of alternate images, one for each original image
    const alternateCenterImages = [
        "Assets/1 ice cream.png", // Alternate for first image
        "Assets/2ice cream.png",
        "Assets/1 ice cream.png", // Alternate for second image
        "Assets/3 ice cream.png",
        "Assets/4 ice cream.png"  // Alternate for third image, and so on
    ];

    let currentIndex = Math.floor(images.length / 2); // Start with center image
    let translateX = 0; // Slide position

    function updateCenterImage() {
        images.forEach((img, index) => {
            // Check if the image is at the center position
            if (index === currentIndex) {
                // Store original source if not already stored
                if (!img.dataset.originalSrc) {
                    img.dataset.originalSrc = img.src;
                }
                // Set the alternate center image specific to this image
                img.src = alternateCenterImages[index];
                img.classList.add("custom-center-image");
            } else {
                // Revert to the original source when moving out of center
                if (img.dataset.originalSrc) {
                    img.src = img.dataset.originalSrc;
                }
                img.classList.remove("custom-center-image");
            }
        });
    }

    function moveSliderRight() {
        if (currentIndex < images.length - 1) {
            translateX -= images[0].offsetWidth;
            slider.style.transform = `translateX(${translateX}px)`;
            currentIndex++;
            updateCenterImage();
        }
    }

    function moveSliderLeft() {
        if (currentIndex > 0) {
            translateX += images[0].offsetWidth;
            slider.style.transform = `translateX(${translateX}px)`;
            currentIndex--;
            updateCenterImage();
        }
    }

    document.querySelector(".custom-next-btn").addEventListener("click", moveSliderRight);
    document.querySelector(".custom-prev-btn").addEventListener("click", moveSliderLeft);

    // Initial call to set the first center image
    updateCenterImage();
});
