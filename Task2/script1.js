let colors=["red","blue","green","yellow"];
let compSeq=[];
let userSeq=[];
let result=document.getElementById("message");
let sound = new Audio("click.mp3");

for(let i=0;i<3;i++){
    let randomIndex= Math.floor(Math.random()*colors.length);
    compSeq.push(colors[randomIndex]);
}
console.log("Computer Sequence:", compSeq);

for(let i=0;i<compSeq.length;i++){
    setTimeout(function(){
       let btn=document.getElementById(compSeq[i]);
       btn.classList.add("active");

       setTimeout(function(){
       btn.classList.remove("active");
    },500);
   },i*1000);
}
document.getElementById("red").onclick = function () { check("red"); };
document.getElementById("blue").onclick = function () { check("blue"); };
document.getElementById("green").onclick = function () { check("green"); };
document.getElementById("yellow").onclick = function () { check("yellow"); };

function check(color) {
    userSeq.push(color);
    sound.currentTime = 0; 
    sound.play();

    let btn = document.getElementById(color);
    btn.classList.add("active");
    
    setTimeout(function () {
        btn.classList.remove("active");
    }, 300);
    
   if (userSeq.length == 3) {
    if (userSeq[0] == compSeq[0] && userSeq[1] == compSeq[1] && userSeq[2] == compSeq[2]) {
        result.innerHTML = "Correct!";
    } else {
        result.innerHTML = "Incorrect!";
    }
    userSeq = [];
   }
}

