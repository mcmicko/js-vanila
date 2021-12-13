const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

function getUserNumberInput() {
  return parseInt(userInput.value); // '55' --> 55
}

function writeOutput(operator, resultBeforeCalculation, calculationNumber) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${calculationNumber}`;
  outputResult(currentResult, calculationDescription);
}

function writeToLog(
  typeOfOperation,
  previousResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: typeOfOperation,
    previousResult: previousResult,
    operationNumber: operationNumber,
    newResult: newResult,
  };
  logOfOperations.push(logEntry);
  console.log(logOfOperations);
}

function add() {
  const enteredNumber = getUserNumberInput(); // 55
  const initialResult = currentResult; // za pocetak 0
  // currentResult = currentResult + enteredNumber; // npr 0 + 55
  currentResult += enteredNumber; // 55
  writeOutput("+", initialResult, enteredNumber);
  writeToLog("ADDING", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  writeOutput("-", initialResult, enteredNumber);
  writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  writeOutput("*", initialResult, enteredNumber);
  writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  writeOutput("/", initialResult, enteredNumber);
  writeToLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

function clear() {
  currentResult = 0;
  userInput.value = 0;
  logOfOperations = [];
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clear);
