function Vote_Function(){           //Defining Function Vote_Function
    var Age;        //Creates var Age
    var Can_vote;       //Creates var Can_vote
    Age=document.getElementById("Age").value;       //Defining value of var Age based on input of HTML
    Can_vote=(Age<18)?"You are not old enought to vote":"You can vote!";        //Defining value of var Can-vote
    document.getElementById("Vote").innerHTML= Can_vote;    //Creating call for HTML
}

function Book(Title, Year, Author, ISBN,) {     // An object constructor with parameters
    this.Book_Title=Title;              // Uses "this" keyword to set up the constructor to create new objects and define its properties.
    this.Book_Year=Year;
    this.Book_Author=Author;
    this.Book_ISBN=ISBN;
}

var Shining=new Book("The Shining",  1977, "Stephen King", 0385121679);     //creates a new Book object and assigns its properties
var Misery=new Book("Misery",  1987, "Stephen King", 0670813648);
var Cujo=new Book("Cujo", 1981, "Stephen King", 0670451932);

function Reading(){
    document.getElementById("Library").innerHTML=               // Sends a concatenated message of strings and object properties for the Cujo.Book object to the specified HTML element
    "A book I like is called "+Cujo.Book_Title+". It was written in "+Cujo.Book_Year+
    " by "+Cujo.Book_Author+" and the ISBN number is "+Cujo.Book_ISBN;
}

function Bubba(){       //Creates function Bubba
    var Biggo;      //Creates var Biggo
    Biggo=(10+5)        //Defines value of Biggo
        document.getElementById("New_and_This").innerHTML=Biggo;        //Creating call for HTML
}

function count_Function() {     //Creates the count_function function
    document.getElementById("Counting").innerHTML = Count();           //Returns the concatenated value of the strings plus the returned value of Count() to the specified HTML element
    function Count() {  //Creates the Count Function        
        var Starting_point = 9;         //Defines the Starting_point var
        function Plus_one() {Starting_point += 1;}      // Declares the nested function and gives it the action of adding to the value of Starting_point by one
        Plus_one();     //Calls the Plus_one function
        return Starting_point;      // returns the resulting value of Starting_point after Plus_one() operates.
    }
}