function getReceipt() {
    // this initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; // Declares the variable and sets its initial value
    var runningTotal = 0; // Declares the variable and sets its initial value
    var sizeTotal = 0; // Declares the variable and sets its initial value
    var sizeArray = document.getElementsByClassName("size"); // Declares an array and sets its values to the HTML elements with the class name "size"
    for (var i = 0; i < sizeArray.length; i++) { // Starts a loop to iterate through each value in the array declared above
        if (sizeArray[i].checked) { // Conditional checks if the radio button element is checked. If it is it performs the actions on the follownig lines (since these are radio buttons, this will only occur once)
            var selectedSize = sizeArray[i].value; // Declares the variable and assigns it the value of the array element in that iteration of the for loop
            text1 = text1+selectedSize+"<br>"; // concatenates an additional string from the selectedSize variable, based on the checked array element, and a linebreak to the end of the text1 variable
        }
    }
    if (selectedSize === "Personal Pizza") { // Conditional statements run through the different pizza sizes assigned to selectedSize variable and finds the number value assigned to the one selected
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; // gives the price of the size of the pizza to the initial value of the runningTotal variable
    console.log(selectedSize+" = $"+sizeTotal+".00"); // these print out information to the console much like a cashier at a pizza place would see the information about an order displayed for them.
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) { //Uses the values assembled above to continue adding to them before sending the final information to the HTML document to display
    var toppingTotal = 0; // Declares the variable and set's its initial value
    var selectedTopping = []; // Declares an array with no current values
    var toppingArray = document.getElementsByClassName("toppings"); // Declares another array and assigns its values to the HTML elements with the class name "toppings"
    for (var j = 0; j < toppingArray.length; j++) { // Starts a loop that iterates through the length of the toppingArray initialized above and based on the checkbox HTML buttons
        if (toppingArray[j].checked) { // begins a conditional statement that will check through each iteration of the for loop to see which "toppings" checkboxes are checked (this could be all or none of the checkboxes)
            selectedTopping.push(toppingArray[j].value); // This pushes the value of the current iteration of the toppingArray loop to the previously declared array "selectedToppings"
            console.log("selected topping item: ("+toppingArray[j].value+")"); // Sends additional information to the console
            text1 = text1+toppingArray[j].value+"<br>"; // Adds additional information about toppings and a linebreak to the text1 variable for each topping that was checked to text1
        }
    }
    var toppingCount = selectedTopping.length; // Declares the variable and assigns it a numerical value based on the length of the selectedTopping array (the number of toppings chosen)
    if (toppingCount > 1) { // conditional statement that checks to see if the value of toppingsCount is greater than one
        toppingTotal = (toppingCount - 1); // if the value is greater than one, one is subtracted from that amount and assigned to the variable toppingTotal
    } else {
        toppingTotal = 0; // If the toppingCount is one or less, the value of toppingTotal is set to 0 (this accounts for the one free topping on any pizza)
    }
    runningTotal = (runningTotal + toppingTotal); // running total adds to its value the toppingTotal value to get the final cost of the pizza
    console.log("total selected topping items: "+toppingCount); // This series of lines sends additional information about the toppings and costs to the console
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1; // Sends the total concatenated value of the pizza size and topping options to the selected HTML element
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>"; // Sends the final price to the selected HTML element
};