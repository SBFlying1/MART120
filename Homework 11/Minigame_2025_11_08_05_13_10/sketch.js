//Variables
var x = 25;
var y = 25;
var ob1x = 200;
var ob1y = 150;
var ob2x = 250;
var ob2y = 300;
var mousex = 0;
var mousey = 0;
var ob1xmovement;
var ob1ymovement;
var ob2xmovement;
var ob2ymovement;

function setup() {
  createCanvas(400, 400);
  ob1xmovement = floor(random(-4, 5));
  ob1ymovement = floor(random(-4, 5));
  ob2xmovement = floor(random(-4, 5));
  ob2ymovement = floor(random(-4, 5));
}

function draw() {
  background(123,28,38);
  
  //Square Obstacle (Mouse-Placed Obstacle)
  fill("white");
  strokeWeight(2);
  stroke("black");
  square(mousex, mousey, 25);
  
  //Elliptical Obstacle
  fill("red");
  strokeWeight(2);
  stroke("black");
  ellipse(ob1x,ob1y,25,50);
  
  //Rectangular Obstacle
  fill("blue");
  stroke("white");
  rect(ob2x,ob2y,50,100);
  
  //Starting Area
  fill("lime");
  strokeWeight(4);
  stroke(120, 60, 30);
  square(0,0,50);
  
  //Start Text
  fill("black");
  noStroke();
  textStyle(BOLD);
  textSize(12);
  text("START", 5, 27);
  
  //Player
  fill("white");
  strokeWeight(1);
  stroke("grey");
  circle(x,y,25);
  
  //Exit Area
  noStroke();
  fill("lime");
  rect(395,350,400,400);
  
  //Exit Text
  fill("black");
  strokeWeight(4);
  stroke("white");
  text("EXIT -->", 340, 380);
  
  //Player Movement
  if(keyIsDown(87)){
    y -= 5;
  }
  if(keyIsDown(65)){
    x -= 5;
  }
  if(keyIsDown(83)){
    y += 5;
  }
  if(keyIsDown(68)){
    x += 5;
  }
  
  //Escaped Message + Out Of Bounds Tracker for Player
  if(x > 400){
    if(y >= 350){
      ob1xmovement = 0;
      ob1ymovement = 0;
      ob2xmovement = 0;
      ob2ymovement = 0;
      fill("white");
      stroke("black");
      textSize(30);
      text("YOU ESCAPED!", 95, 200);
    }
    else{
      x = 0;
    }
  }
  else if(y > 400){
    y = 0;
  }
  else if(x > 400 && y > 400){
    x = 0;
    y = 0;
  }
  else if(x < 0){
    x = 400;
  }
  else if(y < 0){
    y = 400;
  }
  else if(x < 0 && y < 0){
    x = 400;
    y = 400;
  }
  else if(x > 400 && y < 0){
    x = 0;
    y = 400;
  }
  else if(x < 0 && y > 400){
    x = 400;
    y = 0;
  }
  
  //Obstacle 1 Movement
  ob1x += ob1xmovement;
  ob1y += ob1ymovement;
  
  //Out of Bounds Tracker for Obstacle 1
  if(ob1x > 400){
    ob1x = 0;
  }
  else if(ob1y > 400){
    ob1y = 0;
  }
  else if(ob1x > 400 && ob1y > 400){
    ob1x = 0;
    ob1y = 0;
  }
  else if(ob1x < 0){
    ob1x = 400;
  }
  else if(ob1y < 0){
    ob1y = 400;
  }
  else if(ob1x < 0 && ob1y < 0){
    ob1x = 400;
    ob1y = 400;
  }
  else if(ob1x > 400 && ob1y < 0){
    ob1x = 0;
    ob1y = 400;
  }
  else if(ob1x < 0 && ob1y > 400){
    ob1x = 400;
    ob1y = 0;
  }
  
  //Obstacle 2 Movement
  ob2x += ob2xmovement;
  ob2y += ob2ymovement;
  
  //Out of Bounds Tracker for Obstacle 2
  if(ob2x > 400){
    ob2x = 0;
  }
  else if(ob2y > 400){
    ob2y = 0;
  }
  else if(ob2x > 400 && ob2y > 400){
    ob2x = 0;
    ob2y = 0;
  }
  else if(ob2x < 0){
    ob2x = 400;
  }
  else if(ob2y < 0){
    ob2y = 400;
  }
  else if(ob2x < 0 && ob2y < 0){
    ob2x = 400;
    ob2y = 400;
  }
  else if(ob2x > 400 && ob2y < 0){
    ob2x = 0;
    ob2y = 400;
  }
  else if(ob2x < 0 && ob2y > 400){
    ob2x = 400;
    ob2y = 0;
  }
}

//Mouse Pressing (For Obstacle Placement)
function mousePressed(){
  mousex = mouseX;
  mousey = mouseY;
}