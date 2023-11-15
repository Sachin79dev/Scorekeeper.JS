let PlayerOneCount = 0;
let PlayerTwoCount = 0;
let firstPlayer = document.querySelector("#p1Button");
let clicks1 = document.querySelector("#p1Score");
let secondPlayer = document.querySelector("#p2Button");
let clicks2 = document.querySelector("#p2Score");
let select = document.querySelector("#points");
let reset = document.querySelector("#reset");

let selectedValue = 1;

select.addEventListener("change", function () {
    selectedValue = parseInt(select.value);
});


firstPlayer.addEventListener("click", function first() {
    if (PlayerOneCount < selectedValue) {
        // if (PlayerOneCount + PlayerTwoCount < selectedValue) {
            PlayerOneCount++;
        // }
        clicks1.innerHTML = PlayerOneCount;
    } if (PlayerOneCount === selectedValue) {
        firstPlayer.setAttribute("disabled", "");
        secondPlayer.setAttribute("disabled", "");
    }
});

secondPlayer.addEventListener("click", function second() {
    if (PlayerTwoCount < selectedValue) {
        // if (PlayerOneCount + PlayerTwoCount < selectedValue) {
            PlayerTwoCount++;
        // }
        clicks2.innerHTML = PlayerTwoCount;
    } if (PlayerTwoCount === selectedValue) {
        firstPlayer.setAttribute("disabled", "");
        secondPlayer.setAttribute("disabled", "");
    }
});


reset.addEventListener("click", function() {
    let zero = clicks1 + clicks2;
    clicks1.innerHTML = 0;
    clicks2.innerHTML = 0;
    firstPlayer.removeAttribute("disabled", "");
    secondPlayer.removeAttribute("disabled", "");
    if (zero === 0) {
        first();
        second();
    }
});