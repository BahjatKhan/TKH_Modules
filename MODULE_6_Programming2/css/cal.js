const calculator = {
  displayValue: "10",
  firstNumber: null,
  operand: null,
  secondNumber: false,
};

function updateDisplay() {
  const display = document.querySelector("calculator-screen");
  display.value = calculator.displayValue;
}

updateDisplay();
