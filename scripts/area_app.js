const Side1 = document.querySelector(".input-side1");
const Side2 = document.querySelector(".input-side2");
const Side3 = document.querySelector(".input-side3");

const button = document.querySelector(".submit");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{
    var firstSideValue = Number(Side1.value);
    var secondSideValue = Number(Side2.value);
    var thirdSideValue = Number(Side3.value);
    if(firstSideValue <=0 || secondSideValue <=0 || thirdSideValue <=0){
      output.innerText = "Invalid values";
  }
  else{

    if (
        firstSideValue + secondSideValue > thirdSideValue &&
        secondSideValue + thirdSideValue > firstSideValue &&
        firstSideValue + thirdSideValue > secondSideValue
      ) {
        const semiPerimeter =
          (firstSideValue + secondSideValue + thirdSideValue) / 2;
    
        const result = Math.sqrt(
          semiPerimeter *
            (semiPerimeter - firstSideValue) *
            (semiPerimeter - secondSideValue) *
            (semiPerimeter - thirdSideValue)
        ).toFixed(4);
        output.innerText = "Area of a triangle using heron's formula is "+ result +" units";
      } else {
        output.innerText = "Enter valid side lengths such that each side lengths";
      }
  }
})