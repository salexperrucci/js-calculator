const reset = document.getElementById("C");
const del = document.getElementById("DEL");
const input = document.getElementById("text");
const numbers = document.getElementsByClassName("numero");
const rest = document.getElementById("%");
const moltiplication = document.getElementById("x");
const division = document.getElementById("/");
const add = document.getElementById("+");
const minus = document.getElementById("-");
const textBefore = document.getElementById("before");
const equal = document.getElementById("=");

for(let i = 0; i < numbers.length; i++) numbers[i].addEventListener("click", () => input.value === "0" ? input.value = numbers[i].innerHTML : input.value += numbers[i].innerHTML);

let vecchia = 0;
let operator = "";

add.addEventListener("click", function () {
    vecchia = parseFloat(input.value);
    input.value = "0";
    operator = "+";
    before.innerHTML = vecchia + "+";
});

minus.addEventListener("click", function () {
    vecchia = parseFloat(input.value);
    input.value = "0";
    operator = "-";
    before.innerHTML = vecchia + "-";
});

division.addEventListener("click", function () {
    vecchia = parseFloat(input.value);
    input.value = "0";
    operator = "/";
    before.innerHTML = vecchia + "/";
});

moltiplication.addEventListener("click", function () {
    vecchia = parseFloat(input.value);
    input.value = "0";
    operator = "*";
    before.innerHTML = vecchia + "*";
});

input.addEventListener("keypress", (e) => e.which <= 32 || e.which > 57 ? e.preventDefault() : null);
reset.addEventListener("click", function () { input.value = "0"; before.innerHTML = ""});
del.addEventListener("click", function () {
    input.value = input.value.substr(0, input.value.length - 1);
    if(input.value.length == 0) input.value = "0";
});
rest.addEventListener("click", function() {
    vecchia = parseFloat(input.value);
    input.value = "0";
    operator = "%";
});

equal.addEventListener("click", function () {
    if(operator === "%") before.innerHTML += input.value, input.value = vecchia % parseFloat(input.value);
    else if(operator === "/") before.innerHTML += input.value, input.value = vecchia / parseFloat(input.value);
    else if(operator === "*") before.innerHTML += input.value, input.value = vecchia * parseFloat(input.value);
    else if(operator === "+") before.innerHTML += input.value, input.value = vecchia + parseFloat(input.value);
    else if(operator === "-") before.innerHTML += input.value, input.value = vecchia - parseFloat(input.value);
});

