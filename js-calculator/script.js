
var input = firstNumber = operator = "";
var calcButtons = document.getElementsByClassName("calc-button");


for (var button of calcButtons){
	var i = button.innerHTML;
	if (i == 1 || i == 2 || i == 3 || i == 4
		|| i == 5 || i == 6 || i == 7 || i ==8 
		|| i ==9 || i ==0){
		button.addEventListener("click", function(){
			updateDisplay(this.innerHTML);
		})
	}
	if (i === "AC"){
		button.addEventListener("click", function(){
			clearDisplay();
		})
	}
	if (i === "+" || i == "-" || i == "*" || i == "/"){
		button.addEventListener("click", function(){
			applyOperator(this.innerHTML);
		})
	}
	if (i === "="){
		button.addEventListener("click", function(){
			calculate();
		})
	}
}

function updateDisplay(buttonInput){
	input += buttonInput;
   document.getElementById("display").textContent = input;
}

function clearDisplay(){
	input = "";
	document.getElementById("display").textContent = input;
}

function applyOperator(operatorInput){
	operator = operatorInput;
	firstNumber = input;
	input = "";
	document.getElementById("display").textContent = input;
}

function calculate(){
var result = "";
	switch(operator){
		case '+':
			result = (+firstNumber + +input);
			break;
		case '-':
			result = (firstNumber - input);
			break;
		case '*':
			result = (firstNumber * input);
			break;
		case '/':
			result = (firstNumber / input);
			break;
	}
input = result;
document.getElementById("display").textContent = input;

}


