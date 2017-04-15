//Write a JavaScript program that declares a function 
//but calls it before it is declared. Because of 
//function hoisting this will work in JavaScript. 
//Go prove it!

//First Part

console.log(addTwo(2)); //Calls it before it is declared

function addTwo(x) 		//Declares a function
{
	return x+2; 		
}


//Write a function which is assigned to a variable. 
//Call it before it is assigned and prove that this 
//does not work.

 //Second Part

console.log(addFour(2));  //Call it before it is assigned

var addFour = function(x) //Function which is assigned to a variable.
{
	return x+4; 		
}


