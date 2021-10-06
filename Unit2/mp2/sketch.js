let state = 0;
let img1_1, img1_2, img1_3, img1_4, img1_5, img2_1, img9_1;
let caseZeroLocation = 800;
let caseZeroDirection = 0;
let caseOneState = 0;
let relocateState = 0;
let xScale = 1;
let fadeAmount = 0;
let caseOneTimer = 0;
let secondTimer = 0;
let windowTracker = 0;
let song1;
let song2;
let waveCheckTotal = 0;
let waveCheckClear = 0;
let spaceState = 0;
let mouseClickCheck = 0;
let picnicTracker = 0;
let faceTracker = 0;
let chestTracker = 0;
let goodEnding = 0;
let eightCase = 0;
let nineCase = 0;

function preload() {
  soundFormats('ogg', 'mp3');
  song1 = loadSound("assets/Lyrical.mp3");
  song2 = loadSound("assets/ctk_loop.mp3");
}



function setup() {
  createCanvas(1920, 1080);
  img1_1 = loadImage("assets/ctk302_01.png");
  img1_2 = loadImage("assets/ctk302_02.png");
  img1_3 = loadImage("assets/ctk302_03.png");
  img1_4 = loadImage("assets/ctk302_04.png");
  img1_5 = loadImage("assets/case1_7_temp.png");
  img2_1 = loadImage("assets/ctk302_05.png");
  img3_1 = loadImage("assets/ctk302_06.png");
  img4_1 = loadImage("assets/ctk302_case4a.png")
  img4_2 = loadImage("assets/ctk_case4b.png")
  img4_3 = loadImage("assets/ctk_case4c.png")
  img4_4 = loadImage("assets/ctk_case4d.png");
  img5_1 = loadImage("assets/ctk302_case5.png");
  img7_1 = loadImage("assets/ctk_case7.png");
  img8_1 = loadImage("assets/ctk_case8a.png");
  img8_2 = loadImage("assets/ctk_case8b.png");
  img_black = loadImage("assets/black.png");
  image11_1 = loadImage("assets/ctk_case8a.png");
  //initialize auido in
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

}

function draw() {

  switch (state) {
    case 0:
      sceneZero();
      break;

    case 1:
      sceneOne();
      break;

    case 2:
      sceneTwo();
      break;

    case 3:
      sceneThree();
      break;

    case 4:
      sceneFour();
      break;

    case 5:
      sceneFive();
      break;

    case 6:
      sceneSix();
      break;

    case 7:
      sceneSeven();
      break;

    case 8:
      sceneEight();
      break;

    case 9:
      sceneNine();
      break;

    case 10:
      sceneTen();
      break;

    case 11:
      sceneEleven();
      break;


  }
}




function mouseClicked() {

  //picnic bench (X = 900 to 1225; y = 870 to 1025)
  if ((((mouseX > 900) && (mouseX < 1225)) && ((mouseY > 870) && (mouseY < 1025))) && ((caseOneState == 6) && (state == 1))) {
    mouseClickCheck = 1;
  }
  //Scene Three bench click check
  if ((mouseY > 870) && (state == 3)) {

    state = 4;
  }
  if ((mouseY > 870) && (state == 6)) {
    state = 4;
  }


}

function keyPressed() {
  if ((state == 0) && (keyCode === 32)) {
    secondTime = 0;
    spaceState = 1;

  }

  if ((state == 10) && (keyCode === 32)) {
    secondTime = 0;
    spaceState = 2;
  }
}


function sceneZero() {

  background(0, 50, 175);
  image(img1_1, caseZeroLocation - 1200, 0, 2400, 1080);
  //location tracker
  fill(255);
  //text('caseZeroLocation = ' + caseZeroLocation, 20, 20);
  //  visual check for position
  //  text(caseZeroLocation,40,40);
  if (caseZeroDirection == 1) {
    caseZeroLocation = caseZeroLocation + 1;
    if (caseZeroLocation >= 1200) {
      caseZeroDirection = 0;
    }
  } else {
    caseZeroLocation = caseZeroLocation - 1;
    if (caseZeroLocation <= 800) {
      caseZeroDirection = 1;
    }
  }
  textSize(40);

  fill(0, 80 + caseZeroLocation / 8, 80 + caseZeroLocation / 8);

  textAlign(CENTER);

  if (spaceState == 0) {
    text('Press space to begin', width / 2, 800);
  } else {
    state = 1;
    caseOneState = 0;
  }

}

function sceneOne() {
  //main case 1
  //move image to show leftmost portion.
  switch (caseOneState) {
    //main case 1.0
    case 0:
      moveToLeft();
      break;
    case 1:
      //text('case1.1', 60, 60);
      //fade in and wait
      tint(255, 255, 255, fadeAmount);
      if (fadeAmount < 255) {
        fadeAmount++;
        image(img1_2, 0, 0, 1920, 1080);
      }
      fill(255);

      if (millis() - caseOneTimer > 1000) {
        caseOneTimer = millis();
        secondTimer++;
      }
      if (secondTimer >= 5) {
        image(img1_2, 0, 0, 1920, 1080);
        //text ('done waiting',40,40);
        fadeAmount = 0;
        caseOneState = 2;
      }
      //caseOneState = 2;
      break;
      //end case 1.1

    case 2:
      //case 1.2
      //check to see if mouse is over window
      image(img1_2, 0, 0, 1920, 1080);
      fill(255, 255, 255);
      //text(mouseX + ", " + mouseY, 60, 60);
      if (((mouseX >= 1070) && (mouseX <= 1185)) && ((mouseY >= 25) && (mouseY <= 250))) {
        windowTracker++;
        //remove next two lines after checking
        //image(img1_2, 0, 0, 1920, 1080);
        //text('windowTracker = ' + windowTracker,60,200);
      } else {
        windowTracker = 0;
      }
      if (windowTracker >= 60) {
        //image(img1_3, 0, 0, 1920, 1080);
        //text('state achieved',60,60);
        //start song 1 and go to state 1.3
        windowTracker = 0;
        song1.loop();
        caseOneTimer = 0;
        fadeAmount = 0;
        caseOneState = 3;
      }
      break;

    case 3:
      //case 1.3
      //change image to woman in window
      tint(255, 255, 255, fadeAmount);
      if (fadeAmount < 255) {
        fadeAmount++;
        image(img1_3, 0, 0, 1920, 1080);
        fill(0, 175, 240);
        //text('case 1.3', 60, 60);
        text('I remember watching her from across the street.  I\'d seen her a dozen times.', width / 2, 1000);
      } else {
        secondTimer = 0;
        caseOneState = 4;
      }


      break;

    case 4:
      //case 1.4
      //show text and wait
      if (secondTimer > 1 * 60) {
        secondTimer = 0;
        caseOneState = 5;

      }
      image(img1_3, 0, 0, 1920, 1080);
      text('I thought that maybe, if I waved at her, she might wave back.', width / 2, 1000);
      text('I had no idea if she could even see me much less was even looking for me.', width / 2, 1040);

      secondTimer++;
      break;

    case 5:
      //case 1.5
      //check if mouse has moved back and forth to the left or right
      secondTimer++;
      if ((mouseX < 925) && (waveCheckClear == 0)) {
        waveCheckClear = 1;
        waveCheckTotal++;
        /* image(img1_3, 0, 0, 1920, 1080);
        text('X: ' + mouseX, 20, 20);
        text('Y: ' + mouseY, 20, 60);
        text('WC: ' + waveCheckTotal, 60, 100); */

      }
      if ((mouseX > 1000) && (waveCheckClear == 1)) {
        waveCheckClear = 0;
        waveCheckTotal++;
        /*image(img1_3, 0, 0, 1920, 1080);
        text('X: ' + mouseX, 20, 20);
        text('Y: ' + mouseY, 20, 60);
        text('WC: ' + waveCheckTotal, 60, 100); */

      }
      if ((secondTimer > 5 * 60) && (waveCheckTotal <= 7)) {
        secondTimer = 0;
        fadeAmount = 0;
        state = 9;
        //fail state, game over
      } else if ((secondTimer > 8 * 60) && (waveCheckTotal > 7)) {

        fadeAmount = 0;
        caseOneState = 6;
        secondTimer = 0;
      }


      break;

    case 6:
      //case 1.6
      if (fadeAmount < 255) {
        fadeAmount++;
        tint(255, 255, 255, fadeAmount);
        image(img1_4, 0, 0, 1920, 1080);
      }
      fill(0, 175, 240);
      text('To my surprise, she waved back at me.', width / 2, 1000);
      //click picnic table in time or bad ending
      if ((secondTimer <= 15 * 60) && (mouseClickCheck == 1)) {

        song1.stop();
        song2.loop();
        state = 2;
        secondTimer = 0;
        fadeAmount = 0;
      } else if (secondTimer >= 15 * 60) {
        secondTimer = 0;
        state = 9;
      }
      break;
  }
}

function moveToLeft() {
  switch (relocateState) {
    //case 1.0.0-
    case 0:
      if ((caseZeroLocation <= 1200) && (caseZeroLocation >= 800)) {
        //move over four pixels
        //image to corner
        image(img1_1, caseZeroLocation - 1200, 0, 2400, 1080);
        //case tracking

        fill(255);
        //text('caseZeroLocation = ' + caseZeroLocation, 20, 20);
        caseZeroLocation = caseZeroLocation + 1;
        //fill(255);
        //text('case1.0.0', 60, 60);
      } else {
        relocateState = 1;
      }
      //check placement.  If placement is correct, case 1.1.
      break;
      //end 1.0.0

    case 1:
      //case 1.0.1
      //image(img1_1, 0, 0, 2400, 1080);
      //zoom in

      if (xScale < 100) {
        //image(img1_1, caseZeroLocation - 1200, 0, 2400, 1080);
        //text('case 1.0.1', 20, 100);
        xScale++;
        image(img1_1, caseZeroLocation - 1200 - xScale, 0 - xScale * 5.9, width * (1 + xScale / 160), height * (1 + xScale / 160));

        //text('xScale = ' + xScale, 20, 180);
      } else {
        caseOneState = 1;
      }
      break;
      //end 1.0.1
  }
  //end 1.0
  //start case 1.1

}

function sceneTwo() {
  //case 2.0
  if (fadeAmount < 255) {
    fadeAmount++;
    tint(255, 255, 255, fadeAmount);
    image(img2_1, 0, 0, 1920, 1080);
    text('She must have seen me pointing at the picnic tables.  I don\'t know who was more surprised: her or me?', width / 2, 1000);
  } else {
    image(img2_1, 0, 0, 1920, 1080);
    text("x = " + mouseX, 40, 40);
    text("y = " + mouseY, 40, 80);
  }

  checkStare();
}

function checkStare() {
  //check to see where the mouse cursor is or "stare"
  if (((mouseX >= 825) && (mouseX <= 959)) && ((mouseY >= 75) && (mouseY <= 230))) {
    //face area
    faceTracker++;
    //remove next two lines after checking
    //image(img1_2, 0, 0, 1920, 1080);
    //text('windowTracker = ' + windowTracker,60,200);
  } else {
    faceTracker = 0;
  }
  if (((mouseX >= 770) && (mouseX <= 1000)) && ((mouseY >= 270) && (mouseY <= 425))) {
    //face area
    chestTracker++;
    //remove next two lines after checking
    //image(img1_2, 0, 0, 1920, 1080);
    //text('windowTracker = ' + windowTracker,60,200);
  } else {
    chestTracker = 0;
  }
  if (chestTracker >= 120) {
    state = 7;
  } else if (faceTracker >= 120) {
    state = 3;
  }
  if ((faceTracker == 0) && (chestTracker == 0)) {
    secondTimer++;
    if (secondTimer >= 599) {
      secondTimer = 0;
      state = 5;
    }

  }
}

function sceneThree() {
  image(img3_1, 0, 0, 1920, 1080);
  text("x = " + mouseX, 40, 40);
  text("y = " + mouseY, 40, 80);
  text("\"You're not what I expected,\" she said with a smile.  \"I like the unexpected.\"", width / 2, 1000);
  //mousClicked is tracking to see if we click the bench to switch to scene four
  //if no clicks in the right place in fifteen seconds, scene 5.
  if (secondTimer >= 15 * 60) {
    state = 5;

  }
}

function sceneFour() {
  //Good Ending
  switch (goodEnding) {

    case 0:
      image(img4_1, 0, 0, 1920, 1080);
      text("She told me her name was Tracy.", width / 2, 1000);
      text("As we sat there and talked, I realized we both had a lot in common.", width / 2, 1050);
      secondTimer++;
      if (secondTimer >= 8 *60) {
        secondTimer = 0;
        goodEnding = 1;
      }
      break;

    case 1:
      image(img4_2, 0, 0, 1920, 1080);
      text("She even laughed at my favorite joke.", width / 2, 1000);

      secondTimer++;
      if (secondTimer >= 5 *60) {
        secondTimer = 0;
        goodEnding = 2;
      }

      break;

    case 2:
      image(img4_3, 0, 0, 1920, 1080);
      text("She asked if I'd like to join her for a cup of coffee.", width / 2, 1000);

      secondTimer++;
      if (secondTimer >= 5 *60) {
        secondTimer = 0;
        goodEnding = 3;
      }

      break;

    case 3:
      image(img4_4, 0, 0, 1920, 1080);
      text("It was our first date.", width / 2, 1000);
      secondTimer++;
      if (secondTimer >= 15*60) {
        secondTimer = 0;
        goodEnding = 4;
      }

      break;

    case 4:
      image(img_black, 0, 0, 1920, 1080);
      text("The End.", width / 2, height / 2);
      secondTimer++;
      if (secondTimer >= 15*60) {
        secondTimer = 0;
        state = 10;
      }

      break;

  }
}

function sceneFive() {
  image(img5_1, 0, 0, 1920, 1080);
  text("\"Well, it was nice meeting you,\" she said.", width / 2, 1000);
  secondTimer++;
  vol = (mic.getLevel().toFixed(2)); // returned level is between 0 and 1

  // check how loud the input is
  if (vol > .20) { // if the volume is LOUD?
    // do something

    state = 6; // here I'm setting the background to a random color
  }
  if (secondTimer >= 8*60) {
    secondTimer = 0;
    state = 9;
  }
}

function sceneSix() {
  image(img6_1, 0, 0, 1920, 1080);
  text("\"Yes?\"", width / 2, 1000);
  if (secondTimer >= 8*60) {
    secondTimer = 0;
    state = 11;
  }
  //mouseClicked is watching to change to scen four.
}

function sceneSeven() {
  image(img7_1, 0, 0, 1920, 1080);
  text("\"My eyes are up here.\"", width/2, 1080);
  secondTimer++;
  if (((mouseX >= 825) && (mouseX <= 959)) && ((mouseY >= 75) && (mouseY <= 230))) {
    //face area
    faceTracker++;
    //remove next two lines after checking
    //image(img1_2, 0, 0, 1920, 1080);
    //text('windowTracker = ' + windowTracker,60,200);
  } else {
    faceTracker = 0;
    if (secondTimer >= 8*60) {
      secondTimer = 0;
      state = 8;
    }
  }
}


function sceneEight() {

  switch (eightCase) {
    case 0:

      image(img8_1, 0, 0, 1920, 1080);
      text("\"You\'re such a pig.\"", width / 2, 1000);
      secondTimer++;
      if (secondTimer >= 7*60) {
        secondTimer = 0;
        eightCase = 1;
      }
      break;

    case 1:

      image(img8_2, 0, 0, 1920, 1080);
      text("With that, she walked out of my life.", width / 2, 1000);
      secondTimer++;
      if (secondTimer >= 7*60) {
        secondTimer = 0;
        fadeAmount = 0;
        state = 9;
      }

      break;
  }
}

function sceneNine() {

  switch(nineCase){

    case 0:

    tint(255, 255, 255, fadeAmount);
    image(img_black, 0, 0, 1920, 1080);
    if (fadeAmount < 255) {
      fadeAmount++;
    }

    secondTimer++;
    text("She must have moved not long after as I never saw her again.", width / 2, 1000);
    if (secondTimer >= 7*60) {
      secondTimer = 0;
      song1.stop();
      song2.stop();
      nineCase = 1;
    }
    break;

    case 1:
    secondTimer++;
    image(img_black, 0, 0, 1920, 1080);

    text("The End.", width / 2, 1000);
    if (secondTimer >= 7*60) {
    secondTimer = 0;
    state = 10;
    break;

  }
  }
}


function sceneTen() {
  image(img_black, 0, 0, 1920, 1080);

  text("Press Space to Restart.", width / 2, height / 2);
  if (spaceState == 2) {
    song2.stop();
    tint(255, 255, 255);
    spaceState=0;
    caseZeroDirection=0;
    caseOneState = 0;
    state = 0;

  }
}

function sceneEleven() {
  image(img8_2, 0, 0, 1920, 1080);
  text("With that, she walked out of my life.", width / 2, 1000);
  secondTimer++;
  if (secondTimer >= 15) {
    secondTimer = 0;
    state = 9;
  }
}
