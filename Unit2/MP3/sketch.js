// let myCar;
let doubts = [];
let frogPos;
let objectsLeft = 0;
let stage = 0;
let stageOneImage = [];
let currentTrans = 0;
let secondTimer = 0;


function setup() {
  createCanvas(800, 800);

    stageOneImage[1] = loadImage("assets/doubt_01.png");
    stageOneImage[2] = loadImage("assets/doubt_02.png");
    stageOneImage[3] = loadImage("assets/doubt_03.png");
    stageOneImage[4] = loadImage("assets/doubt_04.png");
    stageOneImage[5] = loadImage("assets/doubt_05.png");
    stageOneImage[6] = loadImage("assets/doubt_06.png");
    stageOneImage[7] = loadImage("assets/doubt_07.png");
    stageOneImage[8] = loadImage("assets/doubt_08.png");
    stageOneImage[9] = loadImage("assets/doubt_09.png");
    stageOneImage[10] = loadImage("assets/doubt_10.png");



  imgBlack = loadImage("assets/black.png");
  // Spawn an object

  //myCar = new Car();
  for (let i = 0; i < 10; i++) {
    doubts.push(new Doubt());

  }
  frogPos = createVector(width / 2, height - 80);


}

function draw() {

  game();
  //text("Left: " + objectsLeft,100, 60);
}

//Game Function
function game() {
  background(0);
  //need to create a way to track and reset transparency.
  switch (stage) {


    case 0:
      textSize(60);
      textAlign(CENTER);
      fill("orange");
      text("Press Space to Start", width / 2, height / 2);


      break;


    case 1:
      //TRY DOING MULTIOLE IMAGES INSTEAD OF THE TRANSPARENCY.
      for (let i = 0; i < doubts.length; i++) {
        doubts[i].display();
        doubts[i].move();
        objectsLeft = doubts.length;
        //print(doubts[i].pos.y + " FP " + frogPos.y);
        if ((doubts[i].pos.x <= frogPos.x) && (doubts[i].pos.x + 210 >= frogPos.x)) {

          if ((doubts[i].pos.y <= frogPos.y - 25) && (doubts[i].pos.y + 30 >= frogPos.y)) {
            doubts.splice(i, 1);
            objectsLeft--;
            if (objectsLeft == 0) {
                image(stageOneImage[10],0,0,800,800);
            } else {
            image(stageOneImage[11-doubts.length],0,0,800,800);
          }
            print(objectsLeft);

          }
          if (objectsLeft <= 0) {
            stage = 2;


          }
        }
      }

      break;

    case 2:
      image(stageOneImage[10],0,0,800,800);
      textSize(40);
      fill("pink");
      textAlign(CENTER);
      text("Believe in yourself because I believe in you.",width/2,height-80);
      if (secondTimer > 1 * 10 * 60) {
        secondTimer = 0;
        currentTrans = 0;
        stage = 3;

      }

      secondTimer++;
      break;

  }




  // frog
  fill('green');
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();

}


//Key Check
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    frogPos.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    frogPos.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    frogPos.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    frogPos.y += 5;
  }


}

function keyPressed() {
  if ((keyCode == 32) && (stage == 0)) { // 32 is key code for spacebar
    //insert first image for stage stageOneImage
    image(stageOneImage[1],0,0,800,800);
    stage = 1;
  }
}

// Car class
class Doubt {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width - 200), random(100));
    this.vel = createVector(0, random(3, 8));

    this.blueColor = random(128, 256);
    this.doubtOpacity = random(128, 256);
  }

  // methods

  display() {
    fill(40, 40, this.blueColor, this.doubtOpacity);
    //hit box
    //rect(this.pos.x, this.pos.y - 50, 210, 55);
    textSize(60);
    textAlign(LEFT);
    text("DOUBT", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) {
      this.pos.x = 0;

    }
    if (this.pos.x < -100) {
      this.pos.x = width;

    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.blueColor = random(128, 256);
      this.doubtOpacity = random(128, 256);
    }
    if (this.pos.y < -100) {
      this.pos.y = height;

    }

  }



}


class Anxiety {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width - 100), random(100));
    this.vel = createVector(0, random(3, 8));
    this.redColor = random(128, 256);
    this.blueColor = random(128, 256);
    this.greenColor = random(128, 256);
    this.doubtOpacity = random(230, 256);
  }

  // methods

  display() {
    fill(this.redColor, this.greenColor, this.blueColor, this.doubtOpacity);
    //hit box
    //rect(this.pos.x, this.pos.y - 50, 210, 55);
    textSize(60);
    textAlign(LEFT);
    text("Anxiety", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) {
      this.pos.x = 0;

    }
    if (this.pos.x < -100) {
      this.pos.x = width;

    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.blueColor = random(128, 256);
      this.doubtOpacity = random(128, 256);
    }
    if (this.pos.y < -100) {
      this.pos.y = height;

    }

  }



}
