document.write(typeof 5); //Display 'number'
document.write("<br>");
document.write(5>2 && 10>4); //Display True
document.write("<br>");
document.write(5>2 && 1>3); //Display False
document.write("<br>");
document.write(5>10 || 10>20); //Display False
document.write("<br>");
document.write(5>10 || 21>20); //Display True

function Test_1(){              //Create function Test_1
    document.getElementById("Test_1").innerHTML= isNaN('this is a string');         //Create isNaN call for Html
}

function Test_2(){          //Create Function Test_2
    document.getElementById("Test_2").innerHTML= 0/0;           //Create call for Html
    }

function Test_3(){          //create Function Test_3
    document.getElementById("Test_3").innerHTML= isNaN('007'); //create isNaN call for Html
}

function Test_4(){      //Create function Test_4

document.write(2E310); //Display 'Infinity'
document.write("<br>");

document.write(-3E310); //Display '-Infinity'
document.write("<br>");

document.write(10<2); //display 'false'
document.write("<br>");

document.write(10>2); //display 'true'
document.write("<br>");

document.write(10==10); //Display 'True'
document.write("<br>");

document.write(10==2); //Display 'False'
document.write("<br>");

X=10;       //assign value to X
Y=10;       //assign value to Y
Z="10";     //assign value to Z
A=7;        //assign value to 7
B="Bubba"   //assign value to B
document.write(X===Y); //Display True
document.write("<br>");
document.write(X===Z); //Display False
document.write("<br>");
document.write(X===A); //Display False
document.write("<br>");
document.write(B===X); //Display False


console.log(2+2); //Console display '4'

console.log(10<2); //Console display 'false'
}

function not_Function(){  //Create Function not_Function
    document.getElementById("Not").innerHTML = !(5>10); //create call 'Not' for Html
}