function setup() {
  createCanvas(1023,430);  
}

const center = [500,250];

var ballx = 450;
var bally = 200;
var xdirection = 'right';

var bx1 = 475;
var by1 = 0;
var bx2 = 500;
var by2 = 0;
var bx3 = 525;
var by3 = 0;
var bx4 = 550;
var by4 = 0;
var bx5 = 525;
var by5 = 0;
var bx6 = 500;
var by6 = 0;
var bx7 = 475;
var by7 = 0;

var d1 = 'right';
var d2 = 'right';
var d3 = 'right';
var d4 = 'left';
var d5 = 'left';
var d6 = 'left';
var d7 = 'left';

function draw() {
  background(0);
  fill(50,200,255);
  
  ellipse(ballx,bally,10,10);
  ellipse(bx1,by1,10,10);
  ellipse(bx2,by2,10,10);
  ellipse(bx3,by3,10,10);
  ellipse(bx4,by4,10,10);
  ellipse(bx5,by5,10,10);
  ellipse(bx6,by6,10,10);
  ellipse(bx7,by7,10,10);

  if (xdirection == 'right'){ballx += 2; bally = Math.sqrt(2500 - (ballx-500)*(ballx-500))+200;} else {ballx -= 2; bally = 200-Math.sqrt(2500 - (ballx-500)*(ballx-500));}
  if (d1 == 'right'){bx1 += 2; by1 = Math.sqrt(2500 - (bx1-500)*(bx1-500))+200;} else {bx1 -= 2; by1 = 200-Math.sqrt(2500 - (bx1-500)*(bx1-500));}
  if (d2 == 'right'){bx2 += 2; by2 = Math.sqrt(2500 - (bx2-500)*(bx2-500))+200;} else {bx2 -= 2; by2 = 200-Math.sqrt(2500 - (bx2-500)*(bx2-500));}
  if (d3 == 'right'){bx3 += 2; by3 = Math.sqrt(2500 - (bx3-500)*(bx3-500))+200;} else {bx3 -= 2; by3 = 200-Math.sqrt(2500 - (bx3-500)*(bx3-500));}
  if (d4 == 'right'){bx4 += 2; by4 = Math.sqrt(2500 - (bx4-500)*(bx4-500))+200;} else {bx4 -= 2; by4 = 200-Math.sqrt(2500 - (bx4-500)*(bx4-500));}
  if (d5 == 'right'){bx5 += 2; by5 = Math.sqrt(2500 - (bx5-500)*(bx5-500))+200;} else {bx5 -= 2; by5 = 200-Math.sqrt(2500 - (bx5-500)*(bx5-500));}
  if (d6 == 'right'){bx6 += 2; by6 = Math.sqrt(2500 - (bx6-500)*(bx6-500))+200;} else {bx6 -= 2; by6 = 200-Math.sqrt(2500 - (bx6-500)*(bx6-500));}
  if (d7 == 'right'){bx7 += 2; by7 = Math.sqrt(2500 - (bx7-500)*(bx7-500))+200;} else {bx7 -= 2; by7 = 200-Math.sqrt(2500 - (bx7-500)*(bx7-500));}
  
  if (ballx > 550){ xdirection = 'left'; } else if (ballx < 450){ xdirection = 'right';}
  if (bx1 > 550){d1 = 'left';} else if (bx1 < 450){d1 = 'right';}
  if (bx2 > 550){d2 = 'left';} else if (bx2 < 450){d2 = 'right';}
  if (bx3 > 550){d3 = 'left';} else if (bx3 < 450){d3 = 'right';}
  if (bx4 > 550){d4 = 'left';} else if (bx4 < 450){d4 = 'right';}
  if (bx5 > 550){d5 = 'left';} else if (bx5 < 450){d5 = 'right';}
  if (bx6 > 550){d6 = 'left';} else if (bx6 < 450){d6 = 'right';}
  if (bx7 > 550){d7 = 'left';} else if (bx7 < 450){d7 = 'right';}
  
}
