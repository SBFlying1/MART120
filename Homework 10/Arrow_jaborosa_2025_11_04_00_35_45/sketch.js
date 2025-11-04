var movement;
var movement2;
var movement3;
var movement4;
var movement5;
var movement6;
var textbase = 12;
var textchange = 5;
var a = 75;
var b = 325;
var c = 285;
var d = 285;
var e = 125;
var f = 300;

function setup() {
  createCanvas(400, 400);
  movement = floor(random() * 10) + 1;
  movement2 = floor(random() * 10) + 1;
  movement3 = floor(random() * 10) + 1;
  movement4 = floor(random() * 10) + 1;
  movement5 = floor(random() * 10) + 1;
  movement6 = floor(random() * 10) + 1;
}

function draw() {
  background(123,25,19);
  
  ellipse(a,200,30,80);
  if(a >= 85 || a <= 65){
    movement *= -1;
  }
  a += movement;
  
  ellipse(b,200,30,80);
  if(b >= 335 || b <= 315){
    movement2 *= -1;
  }
  b += movement2;
  
  square(e,f,150);
  if(e >= 150 || e <= 100){
    movement5 *= -1;
  }
  e += movement5;
  
  if(f >= 330 || f <= 270){
    movement6 *= -1;
  }
  f += movement6;
  
  ellipse(200,200,250,300);
  ellipse(150,175,50,30);
  ellipse(250,175,50,30);
  circle(150,175,30);
  circle(250,175,30);
  point(150,175);
  point(250,175);
  triangle(175,250,200,200,225,250);
  square(185,240,10);
  square(205,240,10);
  
  ellipse(200,c,60,30);
  if(c >= 290 || c <= 280){
    movement3 *= -1;
  }
  c += movement3;
  
  line(170,d,230,d);
  if(d >= 290 || d <= 280){
    movement4 *= -1;
  }
  d += movement4;
  
  ellipse(215,65,60,30);
  ellipse(235,75,60,30);
  ellipse(255,85,60,30);
  ellipse(275,95,60,30);
  ellipse(285,105,60,30);
  ellipse(290,115,60,30);
  ellipse(215,75,60,30);
  ellipse(235,85,60,30);
  ellipse(255,95,60,30);
  ellipse(275,105,60,30);
  ellipse(285,115,60,30);
  ellipse(290,125,60,30);
  ellipse(215,85,60,30);
  ellipse(235,95,60,30);
  ellipse(255,105,60,30);
  ellipse(275,115,60,30);
  ellipse(285,125,60,30);
  ellipse(290,135,60,30);
  ellipse(215,95,60,30);
  ellipse(235,105,60,30);
  ellipse(255,115,60,30);
  ellipse(275,125,60,30);
  ellipse(285,135,60,30);
  ellipse(290,145,60,30);
  ellipse(200,60,60,30);
  ellipse(190,62,60,30);
  ellipse(180,64,60,30);
  ellipse(170,66,60,30);
  ellipse(160,68,60,30);
  ellipse(150,70,60,30);
  ellipse(200,70,60,30);
  ellipse(190,72,60,30);
  ellipse(180,74,60,30);
  ellipse(170,76,60,30);
  ellipse(160,78,60,30);
  ellipse(150,80,60,30);
  ellipse(140,82,60,30);
  ellipse(200,80,60,30);
  ellipse(190,82,60,30);
  ellipse(180,84,60,30);
  ellipse(170,86,60,30);
  ellipse(160,88,60,30);
  ellipse(150,90,60,30);
  ellipse(140,92,60,30);
  ellipse(130,94,60,30);
  ellipse(200,90,60,30);
  ellipse(190,92,60,30);
  ellipse(180,94,60,30);
  ellipse(170,96,60,30);
  ellipse(160,98,60,30);
  ellipse(150,100,60,30);
  ellipse(140,102,60,30);
  ellipse(130,104,60,30);
  ellipse(120,106,60,30);
  ellipse(200,100,60,30);
  ellipse(190,102,60,30);
  ellipse(180,104,60,30);
  ellipse(170,106,60,30);
  ellipse(160,108,60,30);
  ellipse(150,110,60,30);
  ellipse(140,112,60,30);
  ellipse(130,114,60,30);
  ellipse(120,116,60,30);
  ellipse(110,118,60,30);
  ellipse(200,110,60,30);
  ellipse(190,112,60,30);
  ellipse(180,114,60,30);
  ellipse(170,116,60,30);
  ellipse(160,118,60,30);
  ellipse(150,120,60,30);
  ellipse(140,122,60,30);
  ellipse(130,124,60,30);
  ellipse(120,126,60,30);
  ellipse(110,128,60,30);
  ellipse(100,130,60,30);
  ellipse(200,120,60,30);
  ellipse(190,122,60,30);
  ellipse(180,124,60,30);
  ellipse(170,126,60,30);
  ellipse(160,128,60,30);
  ellipse(150,130,60,30);
  ellipse(140,132,60,30);
  ellipse(130,134,60,30);
  ellipse(120,136,60,30);
  ellipse(110,138,60,30);
  ellipse(100,140,60,30);
  ellipse(90,142,60,30);
  ellipse(200,130,60,30);
  ellipse(190,132,60,30);
  ellipse(180,134,60,30);
  ellipse(170,136,60,30);
  ellipse(160,138,60,30);
  ellipse(150,140,60,30);
  ellipse(140,142,60,30);
  ellipse(130,144,60,30);
  ellipse(120,146,60,30);
  ellipse(110,148,60,30);
  ellipse(100,150,60,30);
  ellipse(90,152,60,30);
  ellipse(80,154,60,30);
  
  textSize(12);
  text("Flynn",365,395);
  
  textSize(textbase);
  if(textbase >= 37 || textbase <= 7){
    textchange *= -1;
  }
  textbase += textchange;
  text("My Self Portrait!",155,25);
}