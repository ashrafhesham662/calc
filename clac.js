let inputScreen = document.querySelector(".input-screen");
let numbersBtn = document.querySelectorAll(".number");

const numberValue = () => {
  numbersBtn.forEach((items) => {
    items.addEventListener("click", (eo) => {
      inputScreen.value += items.textContent;
    });
  });
};

numberValue();




// when click "C" clear Screen
const clearBtn = document
  .querySelector(".clear")
  .addEventListener("click", (eo) => {
    inputScreen.value = "";
  });




  // when click "* , / , + , - " view Screen
let operatorBtn = document.querySelectorAll(".operator");

const operatorCalc = () => {
  operatorBtn.forEach((items) => {
    items.addEventListener("click", (eo) => {
      inputScreen.value += items.textContent;
    });
  });
};
operatorCalc();






let equalBtn = document.querySelector(".equal");

const equalValue = ()=>{
    equalBtn.addEventListener("click" , (eo)=>{

        try{
            inputScreen.value = eval(inputScreen.value);
        }catch{
            inputScreen.value = `عمليةحسابية خاطئة`
        }
    
    })
    
}

equalValue()