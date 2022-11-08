function Powitanie() {
  let x;
  x = prompt("Podaj imie", "");
  alert("Witaj na stronie " + x + " 🔥🔥🔥");
}
function Dodaj() {
  form1.w1.value = parseFloat(form1.a1.value) + parseFloat(form1.b2.value);
}

function Odejmij() {
  form1.w1.value = parseFloat(form1.a1.value) - parseFloat(form1.b2.value);
}

function Mnoz() {
  form1.w1.value = parseFloat(form1.a1.value) * parseFloat(form1.b2.value);
}

function Dziel() {
  if (parseFloat(form1.b2.value) === 0) {
    alert("Nie dziel przez 0!");
  } else {
    form1.w1.value = parseFloat(form1.a1.value) / parseFloat(form1.b2.value);
  }
}

function Pierwiastek() {
  let x = prompt("Podaj wartość do pierwiastka", "");
  alert("Wartość pierwiastka z liczby " + x + " wynosi: " + Math.sqrt(x));
}

function Silnia() {
  let x = prompt("Podaj wartość silni", "");
  let silnia = 1;
  for (i = 1; i <= x; i++) {
    silnia *= i;
  }
  alert("Wartość silni z liczby " + x + " wynosi: " + silnia);
}

function Potega() {
  let a = prompt("Podaj wartość pierwszej liczby", "");
  let b = prompt("Podaj wartość drugiej liczby", "");
  let potega = 1;
  for (i = 1; i <= b; i++) {
    potega *= a;
  }
  alert("Potega wynosi: " + potega);
}

function Zmiana() {
  div1.style.left = form2.a2.value + "px";
  div1.style.top = form2.b2.value + "px";
  div1.style.borderColor = form2.col.value;
  div1.style.borderStyle = form2.style.value;
  div1.style.borderWidth = form2.width.value + "px";
}
