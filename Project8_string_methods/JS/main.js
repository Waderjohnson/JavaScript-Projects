var first = "Never gonna give you up, "; // The following lines declare and assign strings to several global variables
var second = "Never gonna let you down, ";
var third = "Never gonna run around and desert you! ";
var fourth = "Never gonna make you cry, ";
var fifth = "Never gonna say goodbye, ";
var sixth = "Never gonna tell a lie and hurt you!";
var rickRoll; // Declares a global variable but leaves it undefined for later use within a function
var lastLine; // Declares a global variable but leaves it undefined for later use within a function

function stringConcat() { // Declares a function
    rickRoll = first.concat(second, third, fourth, fifth, sixth); //concatenates the six string variables and assigns the value to rickRoll
    document.getElementById("Whole_String").innerHTML = rickRoll; // Sends the value of rickRoll to the identified HTML element
}

function stringSlice() { // Declares a function
    lastLine = rickRoll.slice(50,89); // Declares variable lastLine and assigns it the value of a sliced section of the rickRoll string
    document.getElementById("Part_of_Song").innerHTML = lastLine; // Sends the value of lastLine to the identified HTML element
}

function stringUpperCase() { // Declares a function
    var allCapsSong = rickRoll.toUpperCase(); //Declares variable allCapsSong and assigns it the value of rickRoll after running it throught he toUpperCase() method
    document.getElementById("Loud_Song").innerHTML = allCapsSong; // Sends the value of allCapsSong to the identified HTML element
}

function stringSearch() { // Declares a function
    var desertLocation = rickRoll.search("desert"); // Decalres variable desertLocation and assigns it the value of the location of the word "cracked" from rickRoll, using the search() method
    document.getElementById("desert_Location").innerHTML = "It is " + desertLocation + " characters from the beginning of the song."; // Sends the value of desertLocation concatenated with additional strings to the identified HTML element
}

function numberString() { // Declares a function
    var number = 27; // Declares a variable an assigns its value as a number
    document.getElementById("Number_String").innerHTML = number.toString(); // take the number value of the variable, changes it to a string, and sends it to the identified HTML element
}

function numberPrecision() { // Declares a function
    var pi = Math.PI; // Declares variable pi and assigns it the value of pi via Math.PI
    document.getElementById("Pi_Number").innerHTML = pi.toPrecision(9); // Limits the digits of pi displayed to 9 and sends the value to the identified HTML element
}

function numberFixed() { // Declares a function
    var pi = Math.PI; // Declares variable pi and assigns it the value of pi via Math.PI
    document.getElementById("Pi_Fixed").innerHTML = pi.toFixed(2); // Rounds the number of pi to 2 decimal points and sends the value to the identified HTML element
}

function numberValueOf() { // Declares a function
    var pi = Math.PI; // Declares variable pi and assigns it the value of pi via Math.PI
    document.getElementById("Pi_Value_Of").innerHTML = pi.valueOf(); // Sends the value to the identified HTML element
}
