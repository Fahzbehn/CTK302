// arays for words;
let doubts = [];
let worries = [];
let heart;
let heartPos;
let objectsLeft = 0;
let stage = 0;
//let stageOneImage = [];
let currentTrans = 0;
let secondTimer = 0;

let img_01, img_02, img_03;
let bgLevel = 0;
let fadeAmount = 0;
let song1, song2;
let songStarted = false;

function preload() {
  soundFormats('ogg', 'mp3');
  song1 = loadSound("assets/home_to_you.mp3");
  song2 = loadSound("assets/cheerful.mp3");
}


function setup() {
  createCanvas(800, 800);


  img_01 = loadImage("assets/doubt.png");
  img_02 = loadImage("assets/friends.png");
  heart = loadImage("assets/heart.png");
  // Spawn an object


  for (let i = 0; i < 10; i++) {
    doubts.push(new Doubt());

  }
  for (let i = 0; i < 10; i++) {
    worries.push(new Worry());

  }

  heartPos = createVector(width / 2, height - 80);
}

function draw() {
  background(bgLevel);
  game();
  if (stage == 3) {
    image(img_01, 0, 0, 800, 800);
    textSize(40);
    fill("pink");
    textAlign(CENTER);
    if (songStarted == false){
    song1.loop();
  } else {
    songStarted = true;
  }
    text("Believe in yourself because I believe in you.", width / 2, height - 160);
    text("Press space to continue...", width / 2, height - 80);
  }
  if (stage == 6) {

    if (songStarted == false){
    song2.loop();
  } else {
    songStarted = true;
  }
    song2.loop();
    textSize(40);
    fill("pink");
    textAlign(CENTER);
    image(img_02, 0, 0, 800, 800);
    text("Don't worry, because we're here for you.", width / 2, height - 120);
    text("Press space to restart.", width / 2, height - 80);
  }
  //text("Left: " + objectsLeft,100, 60);
}

//Game Function
function game() {

  //need to create a way to track and reset transparency.
  switch (stage) {


    case 0:

      textSize(60);
      textAlign(CENTER);
      fill("orange");
      text("Press Space to Start", width / 2, height / 2);


      break;


    case 1:

      for (let i = 0; i < doubts.length; i++) {
        doubts[i].display();
        doubts[i].move();
        objectsLeft = doubts.length;
        //print(doubts[i].pos.y + " FP " + heartPos.y);
        if ((doubts[i].pos.x <= heartPos.x) && (doubts[i].pos.x + 210 >= heartPos.x)) {

          if ((doubts[i].pos.y <= heartPos.y - 25) && (doubts[i].pos.y + 30 >= heartPos.y)) {
            doubts.splice(i, 1);
            objectsLeft--;
            if (objectsLeft == 0) {
              bgLevel = 255;

            } else {
              bgLevel = 255 - (26 * doubts.length);
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

      tint(255, 255, 255, fadeAmount);
      if (fadeAmount < 255) {
        fadeAmount++;
        print(fadeAmount);
        image(img_01, 0, 0, 800, 800);
      }

      //image(img_01, 0, 0, 800, 800);
      textSize(40);
      fill("pink");
      textAlign(CENTER);
      text("Believe in yourself because I believe in you.", width / 2, height - 160);

      if (fadeAmount >= 255) {

        stage = 3;
      }
      objectsLeft = 10;

      break;

    case 3:

      break;

    case 4:
      song1.stop();
      songStarted = false;
      background(bgLevel);
      //text("stage 4", width / 2, 200);
      //spawn anxietys
      for (let i = 0; i < worries.length; i++) {
        worries[i].display();
        worries[i].move();
        objectsLeft = worries.length;
        //worries[i].tint(255);
        //print(doubts[i].pos.y + " FP " + heartPos.y);
        if ((worries[i].pos.x <= heartPos.x) && (worries[i].pos.x + 210 >= heartPos.x)) {

          if ((worries[i].pos.y <= heartPos.y - 25) && (worries[i].pos.y + 30 >= heartPos.y)) {
            worries.splice(i, 1);
            objectsLeft--;
            if (objectsLeft == 0) {
              bgLevel = 255;
              //text("obj left = 0", width / 2, 400);
            } else {
              bgLevel = 255 - (26 * worries.length);
            }
            //print(objectsLeft);

          }
          if (objectsLeft <= 0) {
            stage = 5;


          }
        }
      }

      break;

    case 5:
      tint(255, 255, 255, fadeAmount);
      if (fadeAmount < 255) {
        fadeAmount++;
        //print(fadeAmount);
        image(img_02, 0, 0, 800, 800);
      }

      textSize(40);
      fill("pink");
      textAlign(CENTER);
      text("Don't worry, because we're here for you.", width / 2, height - 120);

      if (fadeAmount >= 255) {

        stage = 6;
      }
      break;

    case 6:

      break;
  }




  // frog
  //fill('green');
  image(heart, heartPos.x, heartPos.y, 46, 46);
  checkForKeys();

}


//Key Check
function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) {
    heartPos.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    heartPos.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    heartPos.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    heartPos.y += 5;
  }


}

function keyPressed() {
  if ((keyCode == 32) && (stage == 0)) { // 32 is key code for spacebar

    stage = 1;
  }
  if ((keyCode == 32) && (stage == 3)) {
    bgLevel=0;
    fadeAmount=0;
    objectsLeft=10;
    stage = 4;
    //
  }

  if ((keyCode == 32) && (stage == 6)) {
      song2.stop();
      songStarted = false;
      location.reload();
      //
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


class Worry {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width - 100), random(100));
    this.vel = createVector(random(-8, 8), random(-8, 8));
    this.redColor = random(128, 256);
    this.blueColor = random(128, 256);
    this.greenColor = random(128, 256);
    this.worryOpacity = 255;
  }

  // methods

  display() {
    fill(this.redColor, this.greenColor, this.blueColor, this.worryOpacity);
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
    }
    if (this.pos.y < -100) {
      this.pos.y = height;
    }
  }

}
