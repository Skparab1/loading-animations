function setup() {
  createCanvas(1023,430);  
}

var tickercount = -155;
var bouncecount = -100;

var ballbouncer = 200;
var bouncecolor = 0;

var ball2 = 200;

var frames = -400;
var size = 50;

var t = 0;

var which;

function draw() {
  background(0);
  textSize(25);
  stroke(0);
  fill(255);
  strokeWeight(3);
  text('Loading',500,75);
  
  if (t == 0){
    which = round(random(1,4));
  }
  t += 1;
  
  text(which,400,200);
  
  if (which == 3){
    strokeWeight(8);
    
    stroke(255-Math.abs(100-tickercount));
    fill(255-Math.abs(100-tickercount));
    ellipse(500,150,10,10);
    
    stroke(255-Math.abs(200-tickercount));
    fill(255-Math.abs(200-tickercount));
    ellipse(535.33,200-35.33,10,10);
    
    stroke(255-Math.abs(300-tickercount));
    fill(255-Math.abs(300-tickercount));
    ellipse(550,200,10,10);
    
    stroke(255-Math.abs(400-tickercount));
    fill(255-Math.abs(400-tickercount));
    ellipse(535.33,235.33,10,10);
    
    stroke(255-Math.abs(500-tickercount));
    fill(255-Math.abs(500-tickercount));
    ellipse(500,250,10,10);
    
    stroke(255-Math.abs(600-tickercount));
    fill(255-Math.abs(600-tickercount));
    ellipse(500-35.33,235.33,10,10);
    
    stroke(255-Math.abs(700-tickercount));
    fill(255-Math.abs(700-tickercount));
    ellipse(450,200,10,10);
    
    stroke(255-Math.abs(800-tickercount));
    fill(255-Math.abs(800-tickercount));
    ellipse(500-35.33,200-35.33,10,10);
      
    if (tickercount < 300){
       stroke(255-Math.abs(-300-tickercount));
      fill(255-Math.abs(-300-tickercount));
      ellipse(500,250,10,10);
      
      stroke(255-Math.abs(-200-tickercount));
      fill(255-Math.abs(-200-tickercount));
      ellipse(500-35.33,235.33,10,10);
    
      stroke(255-Math.abs(-100-tickercount));
      fill(255-Math.abs(-100-tickercount));
      ellipse(450,200,10,10);
      
      stroke(255-Math.abs(0-tickercount));
      fill(255-Math.abs(0-tickercount));
      ellipse(500-35.33,200-35.33,10,10);    
    }
    }
  
    tickercount += 10;
    bouncecount += 10;
    ballbouncer += 7;
    ball2 += 10;
    
    let i = 0;
    while (i < 21){
      let h = 400-Math.abs((i*50)-ballbouncer);
      if (h < 325){
        fill(h/2);
        stroke(h/2);
        h = 325;
      } else {
        fill(100+(4*(h-350)),100+(2*(h-350)),100+(1*(h-350)));
        stroke(100+(4*(h-350)),100+(2*(h-350)),100+(1*(h-350)));
      }
      ellipse(i*50,h,10,10);
      i += 1;
    }
    
    i = 0;
    while (i < 3){
      let h = 200-Math.abs((i*100)-ball2)+200;
      if (h < 300){
        fill(255);
        stroke(255);
        h = 125;
      } else {
        fill(100+(4*(h-150)),100+(2*(h-150)),100+(1*(h-150)));
        stroke(100+(4*(h-150)),100+(2*(h-150)),100+(1*(h-150)));
      }
      
      h = 600 - h;
      ellipse(i*50+100,h,10,10);
      i += 1;
    }
   
    if (tickercount > 600){
      tickercount = -155;
    }
    if (bouncecount > 1500){
      bouncecount = -100;
    }
    if (ballbouncer > 1500){
      ballbouncer = -100;
    }
    if (ball2 > 300){
      ball2 = -100;
    }
    
    i = 0;
    while (i < 50){
      fill(bouncecount/4+i/4);
      stroke(bouncecount/4+i/4);
      let addheight = Math.abs((i*30)-bouncecount)/10;
      if (addheight > 6){
        addheight = 0;
        addheight = Math.abs((i*30)-(bouncecount+500))/10;
        if (addheight > 6){
          addheight = 0;
        } else {
          addheight = -addheight+20;
        }
      } else {
        addheight = -addheight+20;
      }
      
      //ellipse(i*30,300-addheight,10,10);
      i += 1;
    }
}
