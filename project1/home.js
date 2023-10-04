let catimg;
let shibaimg;
let bg;

function preload(){
    catimg = loadImage('cat.png');
    shibaimg = loadImage('shiba.png');
    bg = loadImage('0063T.gif');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(255, 206, 107);
}

function draw(){
    background(255, 206, 107);
    image(catimg, windowWidth*0.65,50,250,250);
    image(shibaimg, windowWidth*0.2,100,150,150);
    image(bg,0,0,windowWidth, windowWidth);
}