const number = document.querySelector('#number') as HTMLInputElement;
const addButton = document.querySelector('#add') as HTMLButtonElement;
const subtractButton = document.querySelector('#subtract')as HTMLButtonElement;
//parseInt() is Number() in typescript
const MAX_NUMBER = 20;
const MIN_NUMBER = -20;

const handleSubtract=(event: MouseEvent)=> {
  console.log("Clicked on the Subtract button " );

  const newValue = Number(number.value) -1;
  number.value = newValue.toString();
  
  if(addButton.disabled === true){
    addButton.disabled = false;
  }

  if (newValue <= MIN_NUMBER){
    subtractButton.disabled = true;
    // addButton.disabled = false;
  }

  console.log(typeof(Number(number.value)));
}

const handleAdd=(event: MouseEvent)=> {
    console.log("Clicked on the adding button");
    const newValue = Number(number.value)+1;
    number.value = newValue.toString();

    if(subtractButton.disabled === true){
      subtractButton.disabled = false;
    }

    if (newValue >= MAX_NUMBER){
      addButton.disabled = true;
      // subtractButton.disabled = false;
    }

    console.log(typeof(Number(number.value)));
  }
  
  addButton.addEventListener("click", handleAdd);
  subtractButton.addEventListener("click", handleSubtract);