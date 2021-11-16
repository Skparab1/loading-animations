function setup() {
  createCanvas(1023,430);  
}

const center = [500,250];

var ballx = 0;
var bally = 200;
var xdirection = 'right';

var bx1;
var by1 = 226;
var bx2;
var by2 = 250;
var bx3;
var by3 = 276;
var bx4;
var by4 = 300;
var bx5;
var by5 = 276;
var bx6;
var by6 = 250;
var bx7;
var by7 = 226;

var d1 = 'right';
var d2 = 'right';
var d3 = 'right';
var d4 = 'left';
var d5 = 'left';
var d6 = 'left';
var d7 = 'left';

var cyclecount = 0;
var disabledots = [1,1,1,1,1,1,1];

function draw() {
  background(0);
  fill(50,200,255);
  if (disabledots[5] == 1){ ellipse(bx6,by6,10,10);}
  if (disabledots[6] == 1){ ellipse(bx7,by7,10,10);}
  if (disabledots[0] == 1){ ellipse(ballx,bally,10,10);}
  if (disabledots[1] == 1){ ellipse(bx1,by1,10,10);}
  if (disabledots[2] == 1){ ellipse(bx2,by2,10,10);}
  if (disabledots[3] == 1){ ellipse(bx3,by3,10,10);}
  if (disabledots[4] == 1){ }//ellipse(bx4,by4,10,10);}
  //if (disabledots[4] == 1){ ellipse(bx5,by5,10,10);}
  //ellipse(bx5,by5,10,10);
  
  //
  
  fill(0);
  
  if (bx5 == 500 && by5 == 200){
    //cyclecount += 1;
  }

  if (xdirection == 'right'){bally += 2; ballx = Math.sqrt(2500 - (bally-250)*(bally-250))+500;} else {bally -= 2; ballx = 500-Math.sqrt(2500 - (bally-250)*(bally-250));}
  if (d1 == 'right'){by1 += 2; bx1 = Math.sqrt(2500 - (by1-250)*(by1-250))+500;} else {by1 -= 2; bx1 = 500-Math.sqrt(2500 - (by1-250)*(by1-250));}
  if (d2 == 'right'){by2 += 2; bx2 = Math.sqrt(2500 - (by2-250)*(by2-250))+500;} else {by2 -= 2; bx2 = 500-Math.sqrt(2500 - (by2-250)*(by2-250));}
  if (d3 == 'right'){by3 += 2; bx3 = Math.sqrt(2500 - (by3-250)*(by3-250))+500;} else {by3 -= 2; bx3 = 500-Math.sqrt(2500 - (by3-250)*(by3-250));}
  if (d4 == 'right'){by4 += 2; bx4 = Math.sqrt(2500 - (by4-250)*(by4-250))+500;} else {by4 -= 2; bx4 = 500-Math.sqrt(2500 - (by4-250)*(by4-250));}
  if (d5 == 'right'){by5 += 2; bx5 = Math.sqrt(2500 - (by5-250)*(by5-250))+500;} else {by5 -= 2; bx5 = 500-Math.sqrt(2500 - (by5-250)*(by5-250));}
  if (d6 == 'right'){by6 += 2; bx6 = Math.sqrt(2500 - (by6-250)*(by6-250))+500;} else {by6 -= 2; bx6 = 500-Math.sqrt(2500 - (by6-250)*(by6-250));}
  if (d7 == 'right'){by7 += 2; bx7 = Math.sqrt(2500 - (by7-250)*(by7-250))+500;} else {by7 -= 2; bx7 = 500-Math.sqrt(2500 - (by7-250)*(by7-250));}
  
  if (bally < 200){ xdirection = 'right';} else if (bally > 300){ xdirection = 'left'; if (cyclecount % 3 == 0){disabledots = [0,disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [1,disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];}}
  if (by1 < 200){d1 = 'right';} else if (by1 > 300){d1 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],0,disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],1,disabledots[2],disabledots[3],disabledots[4],disabledots[5],disabledots[6]];}}
  if (by2 < 200){d2 = 'right';} else if (by2 > 300){d2 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],0,disabledots[3],disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],1,disabledots[3],disabledots[4],disabledots[5],disabledots[6]];}}
  if (by3 < 200){d3 = 'right';} else if (by3 > 300){d3 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],0,disabledots[4],disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],1,disabledots[4],disabledots[5],disabledots[6]];}}
  if (by4 < 200){d4 = 'right';} else if (by4 > 300){d4 = 'left'; cyclecount += 1; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],0,disabledots[5],disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],1,disabledots[5],disabledots[6]];}}
  if (by5 < 200){d5 = 'right';} else if (by5 > 300){d5 = 'left';}
  if (by6 < 200){d6 = 'right';} else if (by6 > 300){d6 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],0,disabledots[6]];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],1,disabledots[6]];}}
  if (by7 < 200){d7 = 'right';} else if (by7 > 300){d7 = 'left'; if (cyclecount % 3 == 0){disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],0];} else {disabledots = [disabledots[0],disabledots[1],disabledots[2],disabledots[3],disabledots[4],disabledots[5],1];}}
  
}
