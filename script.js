let savedNumber = ""
let newNumber = "0"
let operator = ""

function startCalculator() {
	let buttons = document.querySelectorAll("button")
	for (let button of buttons) {
		switch (button.className) {
			case "digit":
				button.addEventListener("click", pressDigit)
				break
			case "decimal":
				button.addEventListener("click", pressDecimal)
				break
			case "add":
			case "subtract":
			case "multiply":
			case "divide":
			case "equal":
				button.addEventListener("click", pressOperator)
				break
			case "clear":
				button.addEventListener("click", pressClear)
				break
		}
	}	
}

function pressDigit(e) {
	let digit = e.target.textContent
	if (!newNumber || newNumber == "0") {
		newNumber = digit
	} else {
		newNumber += digit
	}
	displayNumber(newNumber)
}

function pressDecimal() {
	if (!newNumber) newNumber = "0."
	else if (!newNumber.includes(".")) newNumber += "."
	displayNumber(newNumber)
}

function pressOperator(e) {
	executePendingOperation()
	operator = e.target.textContent
	if (operator == "=") operator = ""
	displayNumber(savedNumber)
}

function pressClear() {
	operator = ""
	savedNumber = ""
	newNumber = "0"
	displayNumber(newNumber)
}

function executePendingOperation() {
	if (newNumber) {
		if (operator) newNumber = getResult(operator)
		saveNumber()
	}
}

function getResult(operator) {
	if (operator == "+") {
		return parseFloat((parseFloat(savedNumber) + parseFloat(newNumber)).toFixed(10))
	} else if (operator == "-") {
		return parseFloat((parseFloat(savedNumber) - parseFloat(newNumber)).toFixed(10))
	} else if (operator == "*") {
		return parseFloat(savedNumber) * parseFloat(newNumber)
	} else if (operator == "/") {
		if (newNumber == "0") return "noobError"
		return parseFloat(savedNumber) / parseFloat(newNumber)
	}
}

function saveNumber() {
		savedNumber = newNumber
		newNumber = ""
}

function displayNumber(num) {
	let display = document.querySelector(".display p")
	display.textContent = num
	console.log(newNumber)
}

startCalculator()
