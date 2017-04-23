function deepEqual (x,y)
{
	if(typeof(x) === "object" && x != null && 
	   typeof(y) === "object" && y != null)
	   {
			//count properties
			var xSize = 0;
			var ySize = 0;
			
			for (xCount in x)
				xSize++;
				
			for (yCount in y)
				ySize++;
			
			if (xSize == ySize)
			{   //Check that objects have same property names
				for (xObj in x)
				{
					if(xObj in y)
					{   //Recursion that checks objects are the same
						if(!deepEqual(x[xObj], y[xObj]))
							return false;						
					}
					else
						return false;  //Property not in y
				}
			}
			else 
				return false;  //Objects do not have the same count
	   }
	   else
	   {		   
		   if(x === y)
				return true;
		   else 
				return false;
	   }
	   
return true;  
}

var obj = {here: {is: "an"}, object: 2};
					

console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, {here: 1, object: 2}));
// false
console.log(deepEqual(obj, {here: {not: "an"}, object: 2}));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
console.log(deepEqual(obj, {object: 2, here: {is: "an"}})); //Test different object position
// true