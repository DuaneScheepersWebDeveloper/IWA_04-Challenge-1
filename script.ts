const addButton = document.querySelector("#add")!;
const subtractButton = document.querySelector("#subtract")!;
const countDisplay = document.querySelector("#number")!;

let count = 0;

const updateCountDisplay=()=> {
  countDisplay.textContent = count.toString();
  console.log(countDisplay.textContent);
}


addButton.addEventListener("click", () => {
  count++;
  updateCountDisplay();
});


subtractButton.addEventListener("click", () => {
    count--;
    updateCountDisplay();
});