function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw() {

  background(180,180,255);
  noStroke();

  //Sun Start
  fill(255,255,0);
  ellipse(600, 280, 120, 120);
  //Sun End

  //start mountains layer 1
  fill(167,160,160);
  triangle(150, 180, 20, 360, 480, 360);

  fill(147,120,120);
  triangle(155, 190, 20, 360, 480, 360);
  //end mountains layer 1



  //Ground Start
  fill(0,160,0);
  rect(0,280,720,200);
  fill(75, 40, 10);
  ellipse(115,345,100,70);
  //Ground End


  //start path
  fill(145, 82, 47);
  triangle(315,215, 400, 415, 470, 415);
  //end path

  //mountain layer two

  fill(167,160,160);
  triangle(250, 100, 100, 280, 480, 280);
  fill(147,150,150);
  triangle(250, 120, 100, 280, 480, 280);
  fill(137,140,150);
  triangle(250, 150, 120, 280, 480, 280);
  fill(127,120,130);
  triangle(260, 170, 160, 280, 440, 280);

  fill(147,130,150);
  triangle(400, 200, 200, 280, 520, 280);
  fill(117,130,150);
  triangle(400, 220, 200, 280, 520, 280);
  fill(187,180,150);
  triangle(400, 260, 260, 280, 520, 280);
  //end mountain layer two


  //start clouds

  noStroke();
  fill(240);
  ellipse(170, 100, 140, 80);
  ellipse(220, 60, 140, 80);
  ellipse(260, 90, 120, 90);
  fill(230);
  ellipse(170, 100, 135, 70);
  ellipse(220, 64, 130, 75);
  ellipse(255, 87, 110, 80);
  //end clouds


  //tree one start
  fill(165, 102, 67);
  rect(65, 175, 30, 120);
  fill(125, 62, 42);
  rect(70, 175, 20, 120);
  fill(0,220,0);
  ellipse(80, 140, 120, 120);
  fill(0,180,0);
  ellipse(85, 140, 110, 110);
  fill(0,140,0);
  ellipse(88, 140, 95, 100);

  //tree one end

  //tree two start
  push();
  translate(400,20);
  fill(165, 102, 67);
  rect(65, 175, 30, 100);
  fill(125, 42, 27);
  rect(70, 175, 20, 100);
  fill(0,150,0);
  ellipse(80, 140, 120, 100);
  fill(25,125,25);
  ellipse(83, 140, 110, 80);
  pop();
  //tree two end


  //coordinate tracker start
  fill(255,255,255);
  text(mouseX + ", " + mouseY, 15, 15);
  //coordinate tracker end

  //start campfire
  push();
  scale(.5,.5);
  translate(0,350);

  //start firewood
  push();
  translate(0,-20);
  push();
  rotate(75 * Math.PI / 180);
  fill(165, 102, 67);
  rect(400, -200, 25, 150);
  pop();
  push();
  rotate(120 * Math.PI / 180);
  fill(185, 122, 87);
  rect(190, -450, 25, 150);
  pop();
  pop();
  //end firewood

  //start flame
  push();
  translate(180,-20);
  fill(255,0,0);
  triangle(50, 180, 20, 360, 80, 360);
  fill(255,128, 0);
  triangle(50, 240, 20, 360, 80, 360);

  fill(255,255, 0);
  triangle(50, 270, 20, 360, 80, 360);
  fill(255,255, 255);
  triangle(50, 300, 20, 360, 80, 360);


  fill(255,0,0);
  triangle(50, 390, 20, 360, 80, 360);
  fill(255,128, 0);
  triangle(50, 385, 20, 360, 80, 360);

  fill(255,255, 0);
  triangle(50, 380, 20, 360, 80, 360);
  fill(255,255, 255);
  triangle(50, 375, 20, 360, 80, 360);

  pop();
  //end flame

  pop();
  //end campfire


  //start tent
  strokeWeight(2);
  stroke(0);
  fill(240,240,220);
  triangle(245, 245, 190, 375, 300, 375);
  line(245, 320, 245, 375);
  //end tent


}
