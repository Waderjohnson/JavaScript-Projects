function Call_Loop() { // Declares the function
    var digit = ""; // Declares the variable and assigns its value
    var x = 3; // Declares the variable and assigns its value
    while (x < 28) { // Starts the while loop for as long as x is less than 28
        digit += "<br>" + x; // digit is added to with a line break and the current value of x
        x = x * 3; // ends the iteration by multiplying the value of x by 3
    }
    document.getElementById("Loop").innerHTML = digit; // sends the value of digit to the HTML element each iteration
}

var Instruments = ["Piano", "Guitar", "Ukulele", "Mandolin", "Ocarina"]; // Declares the array and assigns its elements
var Content = ""; // Declares the variable and assigns its value
var Y; // Declares the variable and assigns its value
function for_Loop() { // Declares the function
    for (Y = 0; Y < Instruments.length; Y++) { // Starts the for loop, setting Y initially to 0 and checking to see if it is less than the length of the array, if it is, it adds 1 to Y and runs the loop
        Content += Instruments[Y] + "<br>"; // The value of content adds the string associate with that index of the Instruments array and adds a line break.
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;; // sends the value of Content to the HTML element each iteration
}

var NintendoGames = ["Banjo-Kazooie", "LOZ: Ocarina of Time", "Super Mario 64", "Star Fox 64", "Earthbound", "Pokemon Gold", "Super Metroid"] // Defines a new array object and provides its values.
function array_Function() { // Declares the function
    document.getElementById("Array").innerHTML = "Some of my favorite Nintendo Games include " + NintendoGames[0] + ", " + NintendoGames[1] + ", and " + NintendoGames[3] + "."; //Sends a concatenated string including three elements from the MMOs array
}

function constant_function() { // Declares the function
    const Cat = {breed:"Tiger", color:"White", age:1}; // Declares and defines an constant with several key value pairs
    Cat.age = 2; // Changes the value for the age key within the dictionary object
    Cat.personality = "shy" // Adds an additional key value pair within the object
    document.getElementById("Constant").innerHTML = "My favorite cat is called the " + Cat.breed + " and I know someone who has one that is " + Cat.color + " and " + Cat.age + " year old. It's very " + Cat.personality + "."; //Sends a concatenated string including four elements from the Cat dictionary
}

function blockVariable() { // Declares the function
    var son = "Bubba"; // Defines the variable son with function scope
    {
        let son = "Lem"; // Defines the variable son with block scope
        document.getElementById("Block_Variable2").innerHTML = son; // Sends the value of son to the HTML element
    }
    document.getElementById("Block_Variable1").innerHTML = son; // Sends the value of son to the HTML element
}

let cat = { // Declares the object
    breed: "Tiger ", // Sets the value of one of the object's properties
    color: "White ", // Sets the value of one of the object's properties
    age: "2 ", // Sets the value of one of the object's properties
    personality: "shy ", // Sets the value of one of the object's properties
    name: "Whitey ", // Sets the value of one of the object's properties
    description : function() { // Sets a method for the object
        return "The cat named " + cat.name + "is a " + cat.personality + cat.color + cat.breed + "that is " + cat.age + " years old."; // Sends this set of concatenated strings when this object's method is called
    }
}

function getDescription() { // Declares the function
    document.getElementById("Cat_Description").innerHTML = cat.description(); // Sends the return from cat.desciption() to the HTML element
}