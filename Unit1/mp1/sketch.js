function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(120,120,220);

  //start clouds

  noStroke();
  push();
  scale(.75,.75);
  fill(240);
  ellipse(170, 100, 140, 80);
  ellipse(220, 60, 140, 80);
  ellipse(260, 90, 120, 90);
  fill(230);
  ellipse(170, 100, 135, 70);
  ellipse(220, 64, 130, 75);
  ellipse(255, 87, 110, 80);
  pop();
  //end clouds

  //face start


  //hair start

  fill(90,80,70);
  ellipse(300,185,30);

  fill(100,90,80);
  ellipse(300,230,80);

  fill(80,80,100);
  ellipse(290,240,80);
  fill(60,60,100);
  ellipse(310,240,80);


  //hair end

  fill(220,180,180);
  ellipse(300,250,80);

  //eyes start
  fill(230);
  ellipse(285,245,20);
  ellipse(315,245,20);

  //iris start
  fill(110,120,220);
  ellipse(285,250,8);
  ellipse(315,250,8);
  //iris end

  //Mouse click transisition
if (mouseIsPressed) {
    //do this
  } else {
    //do that

  }
}
