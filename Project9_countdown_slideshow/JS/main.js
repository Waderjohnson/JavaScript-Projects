var slideIndex = 1; // Declares global variable and sets its value to 1
showSlides(slideIndex); // I think this is declaring a function globally, so that it can be used within the other functions in this file 

// Next/previous controls
function plusSlides(n) { // Declares the function with the parameters of "n"
    showSlides(slideIndex += n); // Calls the showSlides() function in which the slideIndex is increased by either 1 or -1 depending on which button is being used
}

// Thumbnail image controls
function currentSlide(n) { // Declares the function with the parameters of "n"
    showSlides(slideIndex = n); // Calls the showSlides() function and sets the slideIndex variable to 1, 2, or 3, depending on which "dot" element was pressed
}

function showSlides(n) { // Declares the variable and gives it the parameter of "n"
    var i; // Declares the variable i
    var slides = document.getElementsByClassName("mySlides"); // Declares the variable slides and assigns it the value of the 
    var dots = document.getElementsByClassName("dot"); // Declares the variable dots
    if (n > slides.length) {slideIndex = 1} // Conditional statement tests to see if the value of n is less than the length of slides, which I think must be related to the index of how many of these elements there are, since the value of slides.length has to be 3 for the rest of this code to work. If the condistional statement is true, then slideIndex is set to 1.
    if (n < 1) {slideIndex = slides.length} // Conditional statement tests to see if the value of n is less than 1 (like if someone presses the "prev" button on the first image) and it sets the slideIndex to 3, which is the value of slides.length, which sets it back to the third slide in the sequence.
    for (i = 0; i < slides.length; i++) { // Loop in which i is checked to see if it is less than slides.lenght, which is 3. Then it adds one and tells the slides at that index location to be hidden, removing the current image from display.
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // Loop in which i is checked to see if it is less than dots.length, and then increased by one if it is. It then replaces the class name for the dot element at that index location changing it from "active" to "", so that the active CSS styling no longer applies to it.
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; // This sets the slideIndex for slides to the appropriate value to display the current slide, since indexes begin at 0 instead of 1.
    dots[slideIndex-1].className += " active"; // This sets the dots index value associated with the slideIndex value -1 to add the string " active" to its class name, so that the CSS styling for .active can apply to that dot element.
}

function countdown() { // Declares the function
    var seconds = document.getElementById("seconds").value; // Declares the variable and sets it's value to the value retrieved from the input element identified by "seconds"

    function tick() { // Declares the function
        seconds = seconds - 1; // Sets the value of seconds, which had been retrieved previously, to one less.
        timer.innerHTML = seconds; // This sends the value of seconds to the HTML element identified by "timer"
        setTimeout(tick, 1000); // the setTimeout method calls teh tick() function again, but delays it from running for 1 second (1000 milliseconds).
    if(seconds == -1) { // Conditional that checks to see if seconds is equal to -1
        alert("Time's up!"); // When the condition is met, the timer has finished counting down to zero and the alert window pops up with a message
    }
        }
    tick(); // Not sure why this was included in the code. It runs the tick() function again after the timer reaches zero so that it keeps going into the negatives.
}
