const formData = document.querySelector(".form-data");
const submit =document.querySelector(".submit");
const scoredisplay = document.querySelector(".score-display");

const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°",
]

submit.addEventListener("click",()=>{
    var formlist = new FormData(formData);
    var score =0;
    var index=0;
    for(let answer of formlist.values()){
        if(answer===correctAnswers[index]){
            score+=1;
        }
        index+=1;
    }
    scoredisplay.innerText = "Your socre is "+score;
})