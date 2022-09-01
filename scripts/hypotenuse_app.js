const inputbase = document.querySelector(".input-base");
const inputheight = document.querySelector(".input-height");
const button = document.querySelector(".submit");
const output = document.querySelector(".output");

button.addEventListener("click",()=>{
    var base = Number(inputbase.value);
    var height = Number(inputheight.value);
    if(base <=0 || height <=0 ){
        output.innerText = "Invalid values";
    }
    else{
    var result =Math.hypot(base,height);
    output.innerText = "Hypotenuse is: "+result;
    }
})