function greet() {
  const name = prompt("Podaj imię", "");
  alert(`Witaj na stronie ${name} 🔥🔥🔥`);
}

function add() {
  calcForm.result.value =
    parseFloat(calcForm.leftNum.value) + parseFloat(calcForm.rightNum.value);
}

function subtract() {
  calcForm.result.value =
    parseFloat(calcForm.leftNum.value) - parseFloat(calcForm.rightNum.value);
}

function multiply() {
  calcForm.result.value =
    parseFloat(calcForm.leftNum.value) * parseFloat(calcForm.rightNum.value);
}

function divide() {
  if (parseFloat(calcForm.rightNum.value) === 0) {
    alert("Nie dziel przez 0!");
  } else {
    calcForm.result.value =
      parseFloat(calcForm.leftNum.value) / parseFloat(calcForm.rightNum.value);
  }
}

function sqrt() {
  const num = prompt("Podaj wartość do pierwiastka", "");
  alert(`Wartość pierwiastka z liczby ${num} wynosi: ${Math.sqrt(num)}`);
}

function factorial() {
  const num = prompt("Podaj wartość silni", "");
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  alert(`Wartość silni z liczby ${num} wynosi: ${result}`);
}

function power() {
  const a = prompt("Podaj wartość pierwszej liczby", "");
  const b = prompt("Podaj wartość drugiej liczby", "");
  const result = a ** b;

  alert("Potęga wynosi: " + result);
}

function changeDivStyle() {
  divToRestyle.style.left = restyleForm.left.value + "px";
  divToRestyle.style.top = restyleForm.top.value + "px";
  divToRestyle.style.borderColor = restyleForm.borderColor.value;
  divToRestyle.style.borderStyle = restyleForm.borderStyle.value;
  divToRestyle.style.borderWidth = restyleForm.borderWidth.value + "px";
}
