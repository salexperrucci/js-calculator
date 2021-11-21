const reset = document.getElementById("C");
const del = document.getElementById("DEL");
const input = document.getElementById("text");
const numbers = document.getElementsByClassName("numero");

for(let i = 0; i < numbers.length; i++) numbers[i].addEventListener("click", () => input.value === "0" ? input.value = numbers[i].innerHTML : input.value += numbers[i].innerHTML);

input.addEventListener("keypress", (e) => e.which <= 32 || e.which > 57 ? e.preventDefault() : null);
reset.addEventListener("click", () => input.value = "0");
del.addEventListener("click", function () {
    input.value = input.value.substr(0, input.value.length - 1);
    if(input.value.length == 0) input.value = "0";
});

