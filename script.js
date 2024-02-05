let displayVal = 0
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
				button.addEventListener("click", pressAdd)
				break
			case "subtract":
				button.addEventListener("click", pressSubtract)
				break
			case "multiply":
				button.addEventListener("click", pressMultiply)
				break
			case "divide":
				button.addEventListener("click", pressDivide)
				break
			case "equal":
				button.addEventListener("click", pressEqual)
				break
		}
	}	
}


function pressDigit(e) {
	let digit = e.target.textContent
	displayVal += digit
	updateDisplay()
}

function pressAdd() {
	displayVal += "+"
	updateDisplay()
}

function pressEqual() {
	displayVal = "Error: noMath"
	updateDisplay()
}

function pressDecimal() {
	displayVal += "."
	updateDisplay()
}
function pressSubtract() {
	displayVal += "-"
	updateDisplay()
}
function pressMultiply() {
	displayVal += "*"
	updateDisplay()
}
function pressDivide() {
	displayVal += "/"
	updateDisplay()
}

function updateDisplay() {
	let display = document.querySelector(".display")
	display.textContent = displayVal
}

startCalculator()
