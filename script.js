var number = document.querySelector('#number');
var addButton = document.querySelector('#add');
var subtractButton = document.querySelector('#subtract');
//parseInt() is Number() in typescript
var MAX_NUMBER = 20;
var MIN_NUMBER = -20;
var handleSubtract = function (event) {
    console.log("Clicked on the Subtract button ");
    var newValue = Number(number.value) - 1;
    number.value = newValue.toString();
    if (addButton.disabled === true) {
        addButton.disabled = false;
    }
    if (newValue <= MIN_NUMBER) {
        subtractButton.disabled = true;
        // addButton.disabled = false;
    }
    console.log(typeof (Number(number.value)));
};
var handleAdd = function (event) {
    console.log("Clicked on the adding button");
    var newValue = Number(number.value) + 1;
    number.value = newValue.toString();
    if (subtractButton.disabled === true) {
        subtractButton.disabled = false;
    }
    if (newValue >= MAX_NUMBER) {
        addButton.disabled = true;
        // subtractButton.disabled = false;
    }
    console.log(typeof (Number(number.value)));
};
addButton.addEventListener("click", handleAdd);
subtractButton.addEventListener("click", handleSubtract);
