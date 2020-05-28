var numberOfSquares = 6;
var colorOptions = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#resetButton");
var strip = document.querySelector("#strip");
var pickedColor = pickColor();
var intro = document.querySelector("#intro");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
for(var i = 0; i < squares.length; i++)
{
	squares[i].style.background = colorOptions[i];
	squares[i].addEventListener("click", function() 
	{
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor) 
		{
			changeColors();
			intro.style.background = pickedColor;
			messageDisplay.textContent = "Sahi pakde Hai";
			resetButton.textContent = "Play Again?"
		} 
		else 
		{
			this.style.background = "#232323";
			messageDisplay.textContent = "Tujhse Naa Ho Paega";
		}
	});
}

function changeColors()
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = pickedColor;
    }
}

function pickColor()
{
	var randomIndex = Math.floor(Math.random() * colorOptions.length);
	return colorOptions[randomIndex];
}

function generateRandomColors(num)
{
	var arr = [num];
	for(var i=0;i<num;i++)
	{
		arr[i] = randomColor();
	}
	return arr;
}

function randomColor()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var generatedColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	return generatedColor;
}

resetButton.addEventListener("click", function()
	{
		this.textContent = "New Colors";
		colorOptions = generateRandomColors(numberOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++)
		{
			squares[i].style.background = colorOptions[i];
		}
		intro.style.background = "steelblue";
		messageDisplay.textContent = "";
	}
)

easyButton.addEventListener("click", function()
{
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	numberOfSquares = 3;
	colorOptions = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colorOptions[i])
			squares[i].style.background = colorOptions[i];
		else
			squares[i].style.display = "none";
		squares[i].addEventListener("click", function() 
		{
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor) 
			{
				changeColors();
				intro.style.background = pickedColor;
				messageDisplay.textContent = "Sahi pakde Hai";
				resetButton.textContent = "Play Again?"
			} 
			else 
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Tujhse Naa Ho Paega";
			}
		});
	}
}
)

hardButton.addEventListener("click", function()
{
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	numberOfSquares = 6;
	colorOptions = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colorOptions[i];
		squares[i].style.display = "block";
		squares[i].addEventListener("click", function() 
		{
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor) 
			{
				changeColors();
				intro.style.background = pickedColor;
				messageDisplay.textContent = "Sahi pakde Hai";
				resetButton.textContent = "Play Again?"
			} 
			else 
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Tujhse Naa Ho Paega";
			}
		});
	}
}
)


