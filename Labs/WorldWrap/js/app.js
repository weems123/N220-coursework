
//variables for where to start the circle
var cPosition = 0;
var yStart = 300;

//speed at which the circle moves across the screen
var xPace = 5;

//setting up the "starting point" (needed for all p5 drawings)
function setup() {
    createCanvas(800, 600);
//background color of the canvas
    background(136, 61, 186);
}

//starts the drawing (runs 60 times per second)
function draw() {

//starting position plus the speed the ball moves
cPosition = cPosition + xPace;

//if circle reaches the end of the canvas start back at zero
if(cPosition >= 800) {
    cPosition = 0;
}

//background color of the circle
background(136, 61, 186);

//circle 
ellipse(cPosition, yStart, 50);

}

