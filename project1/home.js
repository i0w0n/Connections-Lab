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
    image(catimg, 950,50,250,250);
    image(shibaimg, 300,100,150,150);
    background(255, 206, 107);
    image(bg,0,0,windowWidth, windowWidth);
}