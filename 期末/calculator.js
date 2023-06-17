// 获取显示屏元素
var screen = document.getElementById('screen');

// 存储当前运算符和操作数的变量
var operator = '';
var operand1 = '';
var operand2 = '';

// 向显示屏追加数字
function appendNumber(number) {
  screen.value += number;
}

// 向显示屏追加运算符
function appendOperator(op) {
  operator = op;
  operand1 = screen.value;
  screen.value = '';
}

// 清除显示屏
function clearScreen() {
  screen.value = '';
  operator = '';
  operand1 = '';
  operand2 = '';
}

// 执行计算
function calculateResult() {
  operand2 = screen.value;
  var result = 0;

  // 根据运算符执行相应的计算
  switch (
