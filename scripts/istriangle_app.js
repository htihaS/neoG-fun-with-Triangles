const angle1 = document.querySelector(".input-angle1");
const angle2 = document.querySelector(".input-angle2");
const angle3 = document.querySelector(".input-angle3");

const submit =document.querySelector(".submit");
const output = document.querySelector(".output");

submit.addEventListener("click",function checkIsTriangle(){
    if(angle1.value <=0 || angle2.value <=0 || angle3.value <=0){
        output.innerText = "Invalid values";
    }
    else{
        var sum=0;
        sum=Number(angle1.value)+Number(angle2.value)+Number(angle3.value);
        if(sum===180){
            output.innerText = "This is a Triangle"
        }
        else{
            output.innerText = "This is not a Triangle"
        }
}
})