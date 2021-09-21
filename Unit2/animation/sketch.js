let x = 0;

function setup() {
  createCanvas(600, 600);

}

function draw() {


  if (mouseIsPressed) {
    background(20,20,100);

    //start moon
  fill(220,220,190);
  ellipse(140,120,150);
  noStroke();
  push();
  fill(240);
  ellipse(170, 100, 140, 80);
  ellipse(220, 60, 140, 80);
  ellipse(260, 90, 120, 90);
  fill(230);
  ellipse(170, 100, 135, 70);
  ellipse(220, 64, 130, 75);
  ellipse(255, 87, 110, 80);
  pop();
  fill(220,220,190,100);
  ellipse(140,120,150);
    //end moon
    //start body
  push();
    translate(x,0);
    //neck start
  fill(210,170,170);
  triangle(300, 235, 280, 305, 320, 305);
  //neck end

  //body start
  fill(175,0,0);
  triangle(240,310,360,310,300,450);
  triangle(240,310,360,310,300,300);
  triangle(300,300,240,450,360,450);
  rect(240,450,120,20);
  fill(210,170,170);
  triangle(280,300,320,300,300,320);

  //body end

  //arms start
  //temp fill
  fill(175,0,0);
  //240,310 is top left shoulder.  360,310 is top right shoulder.
  //left arm
  triangle(240,310,180,400,255,340);
  triangle(255,340,180,400,220,400);
  triangle(180,400,200,380,280,400);
  //left arm end

  //right arm end
  triangle(360,310,345,340,420,400);
  triangle(345,340,420,400,390,400);
  triangle(420,400,320,400,380,380);
  //right arm end

  //arms end

  //pants start
  noStroke();
  fill(50,50,120);
  rect(240,470,120,20);
  triangle(240,490,300,490,275,800);
  triangle(300,490,360,490,325,800);
  //pants end

  //stake start
    stroke(0);
    fill(100,100,40);
    triangle(252,370,268,370,260,460);

  //hands start
  fill(210,170,170);
  ellipse(260,400,30);
  ellipse(340,400,30);
    noStroke();
  //hands end

     //hair start

  fill(190,180,70);
  ellipse(300,185,30);

  fill(200,190,80);
  ellipse(300,230,80);

  fill(180,180,100);
  ellipse(290,240,80);
  fill(160,160,100);
  ellipse(310,240,80);


  //hair end

  //face start

  fill(220,180,180);
  ellipse(300,250,80);

  //eyes start
    fill(230);
    ellipse(285,245,20);
    ellipse(315,245,20);

    push();
    translate(0,-4);
  //iris start
    fill(110,120,220);
    ellipse(285,250,8);
    ellipse(315,250,8);
  //iris end

  //eyebrows start

    stroke(0);
    line(275,230,290,235);
    line(310,235,325,230);
    noStroke();

  //eyebrows end

  //pupil start
    fill(20);
    ellipse(285,250,3);
    ellipse(315,250,3);
  //pupil end
    pop();

  //nose start
  stroke(20);
  line(300, 250, 295, 263);
  line(295, 263, 300, 265);
  //nose end

  //mouth start
  line(290,273,310,270);
  //mouth end
    pop();
  } else

  {
    //do that
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
  push();
  translate(200,100);
  fill(240);
  ellipse(170, 100, 140, 80);
  ellipse(220, 60, 140, 80);
  ellipse(260, 90, 120, 90);
  fill(230);
  ellipse(170, 100, 135, 70);
  ellipse(220, 64, 130, 75);
  ellipse(255, 87, 110, 80);
  pop();
  push();
  translate(300,50);
  scale(.33,.33);
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



  push();
    translate(x,0);
  //neck start
  fill(210,170,170);
  triangle(300, 235, 280, 305, 320, 305);
  //neck end

  //body start
  fill(0,170,170);
  triangle(240,310,360,310,300,450);
  triangle(240,310,360,310,300,300);
  triangle(300,300,240,450,360,450);
  rect(240,450,120,20);
  fill(210,170,170);
  triangle(280,300,320,300,300,320);

  //body end

  //arms start
  //temp fill
  fill(0,170,170);
  //240,310 is top left shoulder.  360,310 is top right shoulder.
  //left arm
  triangle(240,310,180,400,255,340);
  triangle(255,340,180,400,220,400);
  triangle(180,400,200,380,280,400);
  //left arm end

  //right arm end
  triangle(360,310,345,340,420,400);
  triangle(345,340,420,400,390,400);
  triangle(420,400,320,400,380,380);
  //right arm end

  //arms end

  //book start
  fill(120,100,60);
  //275,350 to 300,370 to 300,350
  triangle(265,350,300,370,265,370);
  triangle(335,350,300,370,335,370);
  rect(265,370,70,60);
  triangle(265,430,335,430,300,450);
  stroke(0);
  line(265,350,300,370);
  line(300,370,335,350);
  line(265,350,265,430);
  line(335,350,335,430);
  line(300,370,300,450);
  line(265,430,300,450);
  line(300,450,335,430);
  //book end

  //hands start
  fill(210,170,170);
  ellipse(260,400,30);
  ellipse(340,400,30);
  //hands end

  //pants start
  noStroke();
  fill(210,210,180);
  rect(240,470,120,20);
  triangle(240,490,300,490,275,800);
  triangle(300,490,360,490,325,800);

  //pants end


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

  //face start

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

  //eyebrows start
    stroke(0);
    line(275,230,290,230);
    line(310,230,325,230);
    noStroke();

  //eyebrows end

  //pupil start
    fill(20);
    ellipse(285,250,3);
    ellipse(315,250,3);
  //pupil end

  //nose start
  stroke(20);
  line(300, 250, 295, 263);
  line(295, 263, 300, 265);
  //nose end

  //mouth start
  line(290,273,310,273);
  //mouth end
  pop();

  //mouse tracker
  //text("x = " + mouseX + ",  y = " + mouseY, 50, 50);

  //End Mouse click transisition


  }
  x=x+10;
    if(x>width){
      x= -360;
    }
}
