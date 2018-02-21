
var input = firstNumber = operator = "";
document.getElementById('calculator').addEventListener('click', handleClick);

function handleClick(event){
	const id = event.target.id;
	if (id == 1 || id == 2 || id == 3 || id == 4 || 
		id == 5 || id == 6 || id == 7 || id == 8 || 
		id == 9 || id == 0){
		updateDisplay(event.target.innerHTML);
	}
	if (id === "AC"){
		clearDisplay();
	}
	if (id === "+" || id === "-" || id === "*" || id === "/"){
		applyOperator(event.target.innerHTML);
	}
	if (id === "="){
		calculate();
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


