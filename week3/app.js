console.log("hello");

let isLightOn = false;
let secondTextColor = 255;
let button;
button = document.getElementById('button');

button.addEventListener("click", lightOn);

function lightOn(){
    isLightOn = !isLightOn;

    if(isLightOn == true){
        document.getElementById("bg").style.backgroundImage = "url('bg.jpg')";
        document.getElementById("first").style.color = "black";
        console.log("on");
    }else{
        console.log("off");
        document.getElementById("bg").style.backgroundImage = "none";
        document.getElementById("first").style.color = "white";
    }
}

window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    document.getElementById("second").style.color = "hsl(" + window.scrollY%360 + "50%,50%)";
})

document.getElementById('second').addEventListener('mouseover', function MouseOverC(){
    document.getElementById('second').style.color = "yellow";
})

document.getElementById('second').addEventListener('mouseout', function MouseOutC(){
    document.getElementById('second').style.color = "gray";
})

