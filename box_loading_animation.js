function setup() {
  createCanvas(1023,430);  
}

var frames = -400;
var size = 50;

function draw() {
  background(0);
  
  fill(((50-size)*8.8),220,0);
  stroke(((50-size)*8.8),220,0);
  rect(frames+300,150+size,size,size);
  fill(220,((50-size)*8.8),0);
  stroke(220,((50-size)*8.8),0);
  rect(600-frames+size,150,size,size);
  fill(220,220,0);
  stroke(220,220,0);
  rect(450,150,size,size);
  fill(((50-size)*8.8),((50-size)*8.8),220-((50-size)*8.8));
  stroke(((50-size)*8.8),((50-size)*8.8),220-((50-size)*8.8));
  rect(450+size,300-frames+size,size,size);
  
  if (frames < 149.5){
    frames += (150-frames)/2;
  } else if (size > 25){
    size -= 1;
  } else {
    size = 50;
    frames = -400;
  }
}
