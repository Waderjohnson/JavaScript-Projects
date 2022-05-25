function addition_Function(){           //created function for addition
    var addition=2+2;                   //set var fro addition
    document.getElementById("Math").innerHTML="2+2="+addition;      //created call for HTML
}

function subtraction_Function(){        //created function for subtraction
    var Subtraction=5-2;                //set var for subtraction
    document.getElementById("Math2").innerHTML="5-2="+Subtraction;  //created call for HTML
}

function multipication_Function(){      //created function for multiplication
    var simple_Math=6*8;                //set var for simple math multiplication equation
    document.getElementById("Math3").innerHTML="6x8="+simple_Math;  //created call for HTML
}

function modulus_Operator(){        //created function for division remainder equation
    var simple_Math=25%6;           //set var for simple math division equation to get the remainder
    document.getElementById("Math4").innerHTML="When you Divide 25 by 6 you have a remainder of "+simple_Math   //created call for HTML
}

function division(){        //created function for division
    var simple_Math=48/6;       //set var for simple math division equation
    document.getElementById("Math5").innerHTML="48/6="+simple_Math; //created call for HTML
}

function more_Math(){       //created function for a math operation
    var simple_Math=(1+2)*10/2-5;       //set var for simple math order of operations equation
    document.getElementById("Math6").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals "+simple_Math;  //created call for HTML
}

function negation_Operator(){       //created function for negative
    var x=10;                       //set var for x
    document.getElementById("Math7").innerHTML=-x;  //created call for HTML
}

function plus_1(){      //created function for ++
    var x=10;           //set var for x
    x++;                // increased x by 1
    document.getElementById("Math8").innerHTML=x;   //created call for HTML
}

function minus_1(){     //created function for --
    var x=10;       //set var for x
    x--;            // decreased x by 1
    document.getElementById("Math9").innerHTML=x;   //created call for HTML
}

function random(){      //created function for random number generator
    
    document.getElementById("Math10").innerHTML=Math.random()*100;  //created call for HTML
}