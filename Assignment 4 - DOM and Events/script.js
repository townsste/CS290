var row = 1;
var col = 1;
var currentLoc;
var selectedBorder = "3px solid";
var defaultBorder = "1px solid";
	 
function buildTable()
{
	var table = document.createElement('table');
		 
	table.setAttribute('border', '1');


	for(var i = 0; i < 4; i++) //row
	{
		var tr = document.createElement('tr');
			
		for (var j = 0; j < 4; j++) //column
		{			
			if (i == 0) //First Row
			{
				var th = document.createElement('th');
				th.textContent = "Header " + (j + 1);
				tr.appendChild(th);
			} 
			else 
			{
				var td = document.createElement('td');
				td.textContent = (j + 1) + "," + i;
				tr.appendChild(td);
					 
				if (i == 1 && j == 0)
				{
					td.style.border = selectedBorder;
					currentLoc = td;
				}
			}
		}
		table.appendChild(tr);
	}
	document.body.appendChild(table);
}



function buttons()
{
	var buttonText = ["Up", "Down", "Left", "Right", "Mark Cell"];

	for (var i = 0; i < buttonText.length; i++) 
	{
		var button = document.createElement('button');
		button.textContent = buttonText[i];
		document.body.appendChild(button);
		button.addEventListener("click", function(choice, table)
		{
			moveOrMark(choice.target.innerText);
		});
	}
}
	
	
function moveOrMark(direc)
{	
	currentLoc.style.border = defaultBorder;
	
	if(direc == "Up")
	{
		if(row > 1 || col < 1)
		{
			currentLoc = currentLoc.parentNode.previousSibling; //Previous Line
			currentLoc = currentLoc.firstChild;
			if (col > 1)
			{
				for(var i = 1; i < col; i++)
					currentLoc = currentLoc.nextElementSibling
			}
			row--;
		}
	}
	else if(direc == "Down")
	{
		if(row < 3 || col > 4)
		{
			currentLoc = currentLoc.parentNode.nextSibling; //Next Line
			currentLoc = currentLoc.firstChild;
			if (col > 1)
			{
				for(var i = 1; i < col; i++)
					currentLoc = currentLoc.nextElementSibling
			}
			row++;
		}
	}
	else if(direc == "Left")
	{
		if(col > 1)
		{
			currentLoc = currentLoc.previousElementSibling;
			col--;
		}
	}
	else if(direc == "Right")
	{
		if(col < 4)
		{
			currentLoc = currentLoc.nextElementSibling;
			col++;
		}
	}		
	else if (direc == "Mark Cell")
	{
		currentLoc.style.backgroundColor = "yellow";
	}

    currentLoc.style.border = selectedBorder;
}

buildTable();
buttons();