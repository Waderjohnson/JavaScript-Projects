function my_Dictionary(){       //Created Function for Dictionary
    var Animal= {       //Created Var for Animal
        Species:"Dog",
        Color: "Black",
        Breed: "Pug",       //set key value pairs for var Animal
        Age: 3,
        Sound: "BARK"
    };
    delete Animal.Sound;       //deleted key value pair "Sound" for var Animal
    document.getElementById("Dictionary").innerHTML=Animal.Sound;       //created Call for HTML
}