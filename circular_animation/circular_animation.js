function setup() {
  createCanvas(1023,430);  
}

const center = [500,250];

var ballx = 0;
var bally = 200;
var xdirection = 'right';

function draw() {
  background(0);
  fill(50,200,255);
  ellipse(ballx,bally,10,10);
  
  fill(0);

  if (xdirection == 'right'){bally += (300-bally)/15+1; ballx = Math.sqrt(2500 - (bally-250)*(bally-250))+500;} else {bally -= (bally-200)/15+1; ballx = 500-Math.sqrt(2500 - (bally-250)*(bally-250));}
   
  if (bally < 200){ xdirection = 'right';} else if (bally > 300){ xdirection = 'left';}
  }
