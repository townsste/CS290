function Automobile( year, make, model, type )
{
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)

	
/*
Each line representing a car should be produced via a logMe function. 
This function should be added to the Automobile class and accept a single 
boolean argument. If the argument is 'true' then it prints "year make model 
type" with the year, make, model and type being the values appropriate for 
the automobile. If the argument is 'false' then the type is ommited and just 
the "year make model" is logged.
*/
	this.logMe = function(bool)
	{ 
		var display = this.year + " " + this.make + " " + this.model;
		if (bool) 
			display += " " + this.type;
	
		console.log(display);
	};
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
	//new Automobile(2017, "Honda", "Accord", "Sedan"), //extra test
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array)
{
	return array.sort(comparator);
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2)
{
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2)
{
	return auto2.year - auto1.year; //difference of the two numbers
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2)
{
	var lower1 = auto1.make.toLowerCase(); //convert to lowercase
	var lower2 = auto2.make.toLowerCase(); //convert to lowercase
	
    if (lower1 > lower2)
		return 1;
	else if (lower1 < lower2)
		return -1;
	else
		return 0 //same make. Order does not matter
		//return yearComparator(auto1, auto2) //same make compare by year. Order matters
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2)
{
	//Type object for priority
	var typeNumber = 
	{	
      "Roadster": 1,
      "Pickup": 2,
      "SUV": 3,
      "Wagon": 4,
      "Sedan": 5
   };
	
	var auto1Priority = typeNumber[auto1.type]; //get auto1 type number from object
    var auto2Priority = typeNumber[auto2.type]; //get auto2 type number from object
	
	if (auto1Priority > auto2Priority)
		return 1;
	else if (auto1Priority < auto2Priority)
		return -1;
	else
		return yearComparator(auto1, auto2) //same type compare by year
}

/*This prints the automobile array. It accepts the array (returned by sortArr) and the bool state to output with type or not*/
function printAuto(arr, state)
{
	for(var i = 0; i < arr.length; i++)
		arr[i].logMe(state);
}

console.log('*****');
//Sorted by Year
console.log("The cars sorted by year are:");
printAuto(sortArr(yearComparator, automobiles), false);
console.log("\n")


//Sorted by Make
console.log("The cars sorted by make are:");
printAuto(sortArr(makeComparator, automobiles), false);
console.log("\n")


//Sorted by Type
console.log("The cars sorted by type are:");
printAuto(sortArr(typeComparator, automobiles), true);
console.log('*****');