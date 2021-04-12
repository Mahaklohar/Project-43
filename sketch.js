var hrs, minutes, seconds;
var secAngle, minAngle, hrAngle

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES);

  /*rotate(90);
  textSize(150)
  text("🙄", -100, 50);*/ 

}

function draw() {
  background("pink");
  
  translate(200, 200);
  rotate(-90);

  //drawSprites();
  push()
  rotate(90);
  textSize(150)
  text("🙄", -100, 50); 
  pop()

  textSize(40);

  //camera.position.x = 0;
  //camera.position.y = 0;

  hrs = hour();
  min = minute();
  sec = second();

  secAngle = map(sec,0 , 60, 0, 360)
  minAngle = map(min,0 , 60, 0, 360)
  hrAngle = map(hrs%12,0 , 12, 0, 360)

// The code for The Hands: 

// Second Hand: 
  push();
  rotate(secAngle); 
  strokeWeight(9);
  stroke("Cyan")
  line(0, 0, 153, 0);
  pop();

// Minute Hand: 
  push();
  rotate(minAngle);
  strokeWeight(9);
  stroke("Yellow")
  line(0, 0, 103, 0);
  pop();

// Hour Hand: 
  push();
  rotate(hrAngle);
  strokeWeight(9);
  stroke(126, 217, 21)
  line(0, 0, 78, 0);
  pop();




// The Code for the arcs:

// Arc 1: 
  push();
  strokeWeight(9);
  stroke("Cyan")
  noFill();
  arc(0, 0, 300, 300, 270, secAngle);
  pop();

// Arc 2: 
  push();
  strokeWeight(9);
  stroke("Yellow")
  noFill();
  arc(0, 0, 220, 220, 270, minAngle);
  pop();

// Arc 3: 
  push();
  strokeWeight(9);
  stroke(126, 217, 21)
  noFill();
  arc(0, 0, 185, 185, 270, hrAngle);
  pop();

  Border();

  fill("Black");
  stroke("Black");
  strokeWeight(5);
  ellipseMode(RADIUS)
  ellipse(0, 0, 5, 5);


}

function Border(){

  rotate(90)
  text("💓", -205, -160)

  text("💓", -205, -110)
  text("💓", -205, -60)
  text("💓", -205, -10)
  text("💓", -205, 40)
  text("💓", -205, 90)
  text("💓", -205, 140)

  text("💓", -205, 190)

  text("💓", -150, -160)
  text("💓", -100, -160)
  text("💓", -50, -160)
  text("💓", 0, -160)
  text("💓", 50, -160)
  text("💓", 100, -160)
  text("💓", 150, -160)

  text("💓", -159, 190);
  text("💓", -100, 190);
  text("💓", -50, 190);
  text("💓", 0, 190);
  text("💓", 50, 190);
  text("💓", 100, 190);
  text("💓", 150, 190);

  text("💓", 150, -110)
  text("💓", 150, -60)
  text("💓", 150, -10)
  text("💓", 150, 40)
  text("💓", 150, 90)
  text("💓", 150, 140)
}