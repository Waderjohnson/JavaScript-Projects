function My_First_Function(){       //defines a Function
    var str="Got Em!";              //Defines a variable and gives a string value
    document.getElementById("Button_Text").innerHTML=str;       //Puts the value of the variable
                                                            //into the HTML elementFromPoint
                                                            //with the Button_Text id
}

function myFunction(){              //defines a Function
    var sentence= "I am learning";      //Defines a variable and gives sentence value
    sentence+=" a lot from this course.";   //Concatenates two sentence values
    document.getElementById("Concatenate").innerHTML=sentence;  //Puts the value of the variable
                                                            //into the HTML elementFromPoint
                                                            //with the Concatenate id
}