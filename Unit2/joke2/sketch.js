let state = 0;
let timer = 0;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  textSize(20);
  switch (state) {
    case 0:
      background("red");
      fill(255);
      text("A rattlesnake once bit Chuck Norris...", 40, 40);
      break;

    case 1:
      background("yellow");
      fill(0);
      text("After three days of agonizing pain,", 60, 60);
      text("the snake died.",100,85);
      break;

  }
  timer++;
  if (timer > 5 * 60) {
    timer = 0;
    state++;
    if (state > 1) {
      state = 0;
    }
  }

}

function mouseReleased() {

  state = state + 1;
  if (state > 1) {
    state = 0;
  }
}
