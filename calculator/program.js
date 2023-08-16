let result = document.getElementById('result');
let operand1 = null;
let operator = null;
let isCalculated = false; // 新しく追加

function addNumber(num) {
  if (isCalculated) { // 新しく追加
    result.value = ''; // 新しく追加
    isCalculated = false; // 新しく追加
  }
  if (result.value === '0') {
    result.value = num;
  } else {
    result.value += num;
  }
}

function addOperator(op) {
  operand1 = parseFloat(result.value);
  operator = op;
  result.value = '0';
}

function clearResult() {
  result.value = '0';
  operand1 = null;
  operator = null;
}

function calculateResult() {
  let operand2 = parseFloat(result.value);
  let res = null;
  switch (operator) {
    case '+':
      res = operand1 + operand2;
      break;
    case '-':
      res = operand1 - operand2;
      break;
    case '*':
      res = operand1 * operand2;
      break;
    case '/':
      res = operand1 / operand2;
      break;
  }
  result.value = res;
  isCalculated = true; // 新しく追加
}
