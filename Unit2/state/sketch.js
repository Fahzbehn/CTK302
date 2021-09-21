let state = 0;
let x = 0;
let moveThree = 0;
let moveFour = 0;
let pauseFour = 0;
let upDown = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  switch(state) {
    case 0:
      background("red");

      for (let k = 0; k <= 10; k++) {
        for (let j = 0; j <= 10; j++) {
      push();
          translate(0,k*60);
          rotate(-30*j);
          for (let i = 0; i <= 10; i++) {
              // triangle(k*i*20, k*i*20, k*j*20, k*j*20, k*k*20, k*k*20);
            push();
            fill(k*25,j*25,i*25);
            translate(k*60,0);
            push();
            rotate(30*i);
            triangle(20, 20, 60, 60, 20, 60);
            pop();
            pop();
          }
          pop();

        }


      }
      fill(255);
      textSize(40);
      text("State 0",40,80);
      break;


    case 1:
      background("yellow");
      fill(250);
      for (let k = 0; k <= 30; k++) {
          for (let i = 0; i <= 30; i++) {
              // triangle(k*i*20, k*i*20, k*j*20, k*j*20, k*k*20, k*k*20);
            push()
            translate(0,i*60);
            push();
            translate(k*60,0);
            triangle(20, 20, 60, 60, 20, 60);
            pop();
            pop();
          }
      }
      fill(0);
      textSize(40);
      text("State 1",80,80);
      break;



    case 2:
      background("green");
      fill(255);
      text("State 2",40,40);
      //move base point to center.
      push();
      translate(200,200);
      //create inner ring prims
        rotate(x);
        push();
          for (let j = 0; j <= 12; j++) {
            push();
              rotate(j*30);
              fill(255,0,255);
              for (let i = 0; i <= 12; i++) {
              push();
                rect(0,-60,20,20);
                rotate(i*30);
              pop();
            }
            pop();
            }
        pop();
      push();
      rotate(-x*2);
        push();
          for (let j = 0; j <= 12; j++) {
            push();
              rotate(j*30);
              fill(255,0,255);
              for (let i = 0; i <= 12; i++) {
              push();
                rect(0,-120,20,20);
                rotate(i*30);
              pop();
            }
            pop();
            }
      pop();
        pop();
      push();
      rotate(-x*2);
      rect(-20,-20,40,40);
      pop();
        x=x+1;
      pop();
      break;

    case 3:

      background(255);
      push();
      //ROYGBIV
      noStroke();
      translate(moveThree,0);
      for (let j = 0; j <= 4; j++) {
      push();
      translate(j*140,0);
      //initial seven
      //red
        fill(255,0,0);
        rect(0,0,20,400);
      //orange
        fill(255,128,0);
        rect(20,0,20,400);
      //yellow
        fill(255,255,0);
        rect(40,0,20,400);
      //green
        fill(0,255,0);
        rect(60,0,20,400);
      //blue
        fill(0,0,255);
        rect(80,0,20,400);
      //indigo
        fill(128,0,255);
        rect(100,0,20,400);
      //violet
        fill(255,0,255);
        rect(120,0,20,400);
      //back seven
        push();
        translate(-140,0);
        fill(255,0,0);
        rect(0,0,20,400);
      //orange
        fill(255,128,0);
        rect(20,0,20,400);
      //yellow
        fill(255,255,0);
        rect(40,0,20,400);
      //green
        fill(0,255,0);
        rect(60,0,20,400);
      //blue
        fill(0,0,255);
        rect(80,0,20,400);
      //indigo
        fill(128,0,255);
        rect(100,0,20,400);
      //violet
        fill(255,0,255);
        rect(120,0,20,400);
        pop();

      pop();
      }
      pop();
      fill(255);
      textSize(80);
      text("State 3",80,80);
      moveThree++;
      if (moveThree >= 140) {
        moveThree = 0;

      }


      break;

    case 4:
      background("purple");
      textSize(60);
      text("State 4",140,140);
      //cat
      noStroke();
      push();
      if (upDown == 0) {
        moveFour++;
      }
      if (upDown == 1) {
      moveFour--;
      }
      translate(0,moveFour)

      if (moveFour >= 120){
        upDown = 1;
      }
      if (moveFour == 0) {

        upDown = 0;
      }
      fill(255,255,0);
      ellipse(200,400,200,200);
      //eyes
      fill(0);
      ellipse(160,375,25,25);
      ellipse(240,375,25,25);



      pop();


      break;



         }


}

function mouseReleased() {

  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}
