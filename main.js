// document.querySelector(".tub-img").addEventListener("mouseover",(e)=>{
    
        
//         //console.log(document.querySelector(".circle"));
//         let a = document.querySelector(".circle")
//         a.classList.toggle("circle-hover");
    
// })


Array.from(document.getElementsByClassName("img-box")).forEach((key) => {
    // Hover in (mouseover)
    key.addEventListener("mouseover", (e) => {
        // Find the specific ".circle" inside the current "key" (img-box)
        let a = key.querySelector(".circle");
        a.classList.add("circle-hover");  // Add the hover class to display circle
    });

    // Hover out (mouseout)
    key.addEventListener("mouseout", function() {
        // Find the specific ".circle" inside the current "key" (img-box)
        let a = key.querySelector(".circle");
        a.classList.remove("circle-hover");  // Remove the hover class
    });
});


let slider = document.querySelector('.slider');
let slideWidth = document.querySelector('.img-box').offsetWidth + 30; // width of one image + margin
let currentPosition = 0; // Track current position
let totalImages = document.querySelectorAll('.img-box').length; // Total number of images
let maxPosition = totalImages - 1; // Max position limit (last image)

// Hover over the right button (next-btn) to move the slider right
document.querySelector('.next-btn').addEventListener('mouseover', () => {
    if (currentPosition < maxPosition) {
        currentPosition++;
        slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }
});

// Hover over the left button (prev-btn) to move the slider left
document.querySelector('.prev-btn').addEventListener('mouseover', () => {
    if (currentPosition > 0) {
        currentPosition--;
        slider.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }
});
