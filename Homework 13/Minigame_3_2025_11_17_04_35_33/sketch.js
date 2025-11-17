//Variables
var xArray = [0,0,200,175,150,125,100,5,25,395,340,95]; //X Values
var yArray = [0,0,150,125,100,75,50,27,25,350,380,200]; //Y Values
var movementArray = []; //Movement Values
var oneSizeArray = [400,25,20,40,50,25]; //Size Values for Shapes Needing One Size Parameter
var twoSizeArray = [25,50,50,100,10,15,5,50]; //Size Values for Shapes Needing Two Size Parameters

function setup() {
  createCanvas(400, 400);
  movementArray[0] = floor(random(-4, 5));
  movementArray[1] = floor(random(-4, 5));
  movementArray[2] = floor(random(-4, 5));
  movementArray[3] = floor(random(-4, 5));
  movementArray[4] = floor(random(-4, 5));
  movementArray[5] = floor(random(-4, 5));
  movementArray[6] = floor(random(-4, 5));
  movementArray[7] = floor(random(-4, 5));
  movementArray[8] = floor(random(-4, 5));
  movementArray[9] = floor(random(-4, 5));
}

function border(){
  fill("maroon");
  strokeWeight(6);
  stroke("grey");
  square(xArray[0], yArray[0], oneSizeArray[0]);
}

//Mouse Pressing (For Obstacle Placement)
function mousePressed(){
  xArray[1] = mouseX;
  yArray[1] = mouseY;
}

function placedObstacle(){
  fill("white");
  strokeWeight(2);
  stroke("black");
  square(xArray[1], yArray[1], oneSizeArray[1]);
}

function obstacle(){
  fill("red");
  strokeWeight(2);
  stroke("black");
  ellipse(xArray[2], yArray[2], twoSizeArray[0], twoSizeArray[1]);
  
  fill("blue");
  stroke("white");
  rect(xArray[3], yArray[3], twoSizeArray[2], twoSizeArray[3]);
  
  fill("purple");
  square(xArray[4], yArray[4], oneSizeArray[2]);
  
  fill("orange");
  stroke("black");
  circle(xArray[5], yArray[5], oneSizeArray[3]);
  
  fill("green");
  stroke("white");
  rect(xArray[6], yArray[6], twoSizeArray[4], twoSizeArray[5])
  
}

function start(){
  //Start Area
  fill("lime");
  strokeWeight(4);
  stroke(120, 60, 30);
  square(xArray[0], yArray[0], oneSizeArray[4]);
  
  //Start Text
  fill("black");
  noStroke();
  textStyle(BOLD);
  textSize(12);
  text("START", xArray[7], yArray[7]);
}

function player(){
  //Create
  fill("white");
  strokeWeight(1);
  stroke("grey");
  circle(xArray[8], yArray[8], oneSizeArray[5]);
  
  //Movement
  if(keyIsDown(87)){
    yArray[8] -= 5;
  }
  if(keyIsDown(65)){
    xArray[8] -= 5;
  }
  if(keyIsDown(83)){
    yArray[8] += 5;
  }
  if(keyIsDown(68)){
    xArray[8] += 5;
  }
}

function exit(){
  //Exit Area
  noStroke();
  fill("lime");
  rect(xArray[9], yArray[9], twoSizeArray[6], twoSizeArray[7]);
  
  //Exit Text
  fill("black");
  strokeWeight(4);
  stroke("white");
  text("EXIT -->", xArray[10], yArray[10]);
}

function win(){
  movementArray[0] = 0;
  movementArray[1] = 0;
  movementArray[2] = 0;
  movementArray[3] = 0;
  movementArray[4] = 0;
  movementArray[5] = 0;
  movementArray[6] = 0;
  movementArray[7] = 0;
  movementArray[8] = 0;
  movementArray[9] = 0;
  fill("white");
  stroke("black");
  textSize(30);
  text("YOU ESCAPED!", xArray[11], yArray[11]);
}
function boundsAndEscape(){
  if(xArray[8] > 400){
    if(yArray[8] >= 350){
      win();
    }
    else{
      xArray[8] = 0;
    }
  }
  else if(yArray[8] > 400){
    yArray[8] = 0;
  }
  else if(xArray[8] > 400 && yArray[8] > 400){
    xArray[8] = 0;
    yArray[8] = 0;
  }
  else if(xArray[8] < 0){
    xArray[8] = 400;
  }
  else if(yArray[8] < 0){
    yArray[8] = 400;
  }
  else if(xArray[8] < 0 && yArray[8] < 0){
    xArray[8] = 400;
    yArray[8] = 400;
  }
  else if(xArray[8] > 400 && yArray[8] < 0){
    xArray[8] = 0;
    yArray[8] = 400;
  }
  else if(xArray[8] < 0 && yArray[8] > 400){
    xArray[8] = 400;
    yArray[8] = 0;
  }
}

function ob1Movement(){
  xArray[2] += movementArray[0];
  yArray[2] += movementArray[1];
}

function ob2Movement(){
  xArray[3] += movementArray[2];
  yArray[3] += movementArray[3];
}

function ob3Movement(){
  xArray[4] += movementArray[4];
  yArray[4] += movementArray[5];
}

function ob4Movement(){
  xArray[5] += movementArray[6];
  yArray[5] += movementArray[7];
}

function ob5Movement(){
  xArray[6] += movementArray[8];
  yArray[6] += movementArray[9];
}

function bounds1(){
  if(xArray[2] > 400){
    xArray[2] = 0;
  }
  else if(yArray[2] > 400){
    yArray[2] = 0;
  }
  else if(xArray[2] > 400 && yArray[2] > 400){
    xArray[2] = 0;
    yArray[2] = 0;
  }
  else if(xArray[2] < 0){
    xArray[2] = 400;
  }
  else if(yArray[2] < 0){
    yArray[2] = 400;
  }
  else if(xArray[2] < 0 && yArray[2] < 0){
    xArray[2] = 400;
    yArray[2] = 400;
  }
  else if(xArray[2] > 400 && yArray[2] < 0){
    xArray[2] = 0;
    yArray[2] = 400;
  }
  else if(xArray[2] < 0 && yArray[2] > 400){
    xArray[2] = 400;
    yArray[2] = 0;
  }
}

function bounds2(){
  if(xArray[3] > 400){
    xArray[3] = 0;
  }
  else if(yArray[3] > 400){
    yArray[3] = 0;
  }
  else if(xArray[3] > 400 && yArray[3] > 400){
    xArray[3] = 0;
    yArray[3] = 0;
  }
  else if(xArray[3] < 0){
    xArray[3] = 400;
  }
  else if(yArray[3] < 0){
    yArray[3] = 400;
  }
  else if(xArray[3] < 0 && yArray[3] < 0){
    xArray[3] = 400;
    yArray[3] = 400;
  }
  else if(xArray[3] > 400 && yArray[3] < 0){
    xArray[3] = 0;
    yArray[3] = 400;
  }
  else if(xArray[3] < 0 && yArray[3] > 400){
    xArray[3] = 400;
    yArray[3] = 0;
  }
}

function bounds3(){
  if(xArray[4] > 400){
    xArray[4] = 0;
  }
  else if(yArray[4] > 400){
    yArray[4] = 0;
  }
  else if(xArray[4] > 400 && yArray[4] > 400){
    xArray[4] = 0;
    yArray[4] = 0;
  }
  else if(xArray[4] < 0){
    xArray[4] = 400;
  }
  else if(yArray[4] < 0){
    yArray[4] = 400;
  }
  else if(xArray[4] < 0 && yArray[4] < 0){
    xArray[4] = 400;
    yArray[4] = 400;
  }
  else if(xArray[4] > 400 && yArray[4] < 0){
    xArray[4] = 0;
    yArray[4] = 400;
  }
  else if(xArray[4] < 0 && yArray[4] > 400){
    xArray[4] = 400;
    yArray[4] = 0;
  }
}

function bounds4(){
  if(xArray[5] > 400){
    xArray[5] = 0;
  }
  else if(yArray[5] > 400){
    yArray[5] = 0;
  }
  else if(xArray[5] > 400 && yArray[5] > 400){
    xArray[5] = 0;
    yArray[5] = 0;
  }
  else if(xArray[5] < 0){
    xArray[5] = 400;
  }
  else if(yArray[5] < 0){
    yArray[5] = 400;
  }
  else if(xArray[5] < 0 && yArray[5] < 0){
    xArray[5] = 400;
    yArray[5] = 400;
  }
  else if(xArray[5] > 400 && yArray[5] < 0){
    xArray[5] = 0;
    yArray[5] = 400;
  }
  else if(xArray[5] < 0 && yArray[5] > 400){
    xArray[5] = 400;
    yArray[5] = 0;
  }
}

function bounds5(){
  if(xArray[6] > 400){
    xArray[6] = 0;
  }
  else if(yArray[6] > 400){
    yArray[6] = 0;
  }
  else if(xArray[6] > 400 && yArray[6] > 400){
    xArray[6] = 0;
    yArray[6] = 0;
  }
  else if(xArray[6] < 0){
    xArray[6] = 400;
  }
  else if(yArray[6] < 0){
    yArray[6] = 400;
  }
  else if(xArray[6] < 0 && yArray[6] < 0){
    xArray[6] = 400;
    yArray[6] = 400;
  }
  else if(xArray[6] > 400 && yArray[6] < 0){
    xArray[6] = 0;
    yArray[6] = 400;
  }
  else if(xArray[6] < 0 && yArray[6] > 400){
    xArray[6] = 400;
    yArray[6] = 0;
  }
}

function draw() {
  background(123,28,38);
  border();
  placedObstacle();
  obstacle();
  start();
  player();
  exit();
  boundsAndEscape();
  ob1Movement();
  ob2Movement();
  ob3Movement();
  ob4Movement();
  ob5Movement();
  bounds1();
  bounds2();
  bounds3();
  bounds4();
  bounds5();
}