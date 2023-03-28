var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");
var countDisplay = document.querySelector("#number");
var count = 0;
var updateCountDisplay = function () {
    countDisplay.innerHTML = count.toString();
    console.log(countDisplay.textContent);
};
addButton.addEventListener("click", function () {
    count++;
    updateCountDisplay();
});
subtractButton.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateCountDisplay();
    }
});
