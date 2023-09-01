function bubbleCreator(){
var count = "";
for(let i=0;i<=159;i++){
    var digit = Math.floor(Math.random() * 10);/*Creats a single digit random number after getting multiplied by 10 and Math.floor removes the part after decimal. */
    count += `<div class="bubble">${digit}</div>`
}

document.querySelector("#pbtm").innerHTML = count; /*If you write .innerText here...it will show div class bubble digit div in the webpage... and not the real css */
/* .innerHTML vs .textContent vs .innerText
.innerHTML = shows the element with the spacing and HTML tags(like <div><span><button>)
.textContext = shows the element with the spacings but without HTML tags with styling.
.innerText = shows the element without any spacings and HTML tags without styling.*/
getHit();
}

var timer=60;
function Timer(){
    var timerinterval = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timer").innerText = timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
}

var rn;
function getHit(){
    rn = Math.floor(Math.random() * 10);
    document.querySelector(".hit").innerText = rn;
}

var score=0;
function getScore(){
    score+=1;
    document.querySelector(".score").innerText=score;
}

function bubble(){
    document.querySelector("#pbtm").addEventListener("click", function(event)/*event is just a variable..you can give any name for it,be it details or hey hi anything*/{
        var clickedNumber = Number(event.target.innerText);
        if( clickedNumber === rn){ /*.target.innerText gets the value inside the bubble you have clicked on */
            getScore();
            bubbleCreator();
        }
    })
}

bubbleCreator();
Timer();
bubble();