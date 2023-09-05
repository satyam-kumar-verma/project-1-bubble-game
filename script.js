var timer = 60;
let score =0;
let hitrn =0;

function makeBubble(){
    let clutter = "";

    for(let i=1; i<=168; i++){
        let bubbleNumber = Math.ceil(Math.random()*10);
        clutter += `<div id="bubble">${bubbleNumber}</div>`;
    };

    document.querySelector("#pannelBottom").innerHTML= clutter;

}

function runTimer(){
    var timeInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.getElementById("timerValue").textContent = timer;
        }
        else{
            clearInterval(timeInterval);
            document.querySelector("#pannelBottom").innerHTML=`<h1>Game over<br><br>Your score is ${score}</h1>`
        }
    },1000);
}

function getHitValue(){
    hitrn= Math.ceil(Math.random()*10);
    let hitValue=document.getElementById("hitValue");
    hitValue.textContent=hitrn;
}

function increaseScore(){
    score+=10;
    document.getElementById("scoreValue").textContent=score;
}

document.getElementById("pannelBottom").addEventListener("click",function(details){
    let clickedItem=parseInt(details.target.textContent);
    if( clickedItem === hitrn){
        increaseScore();
        makeBubble();
        getHitValue();
    }
});



makeBubble();
runTimer();
getHitValue();
