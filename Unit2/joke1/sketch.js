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
      text("When does a pun become a dad joke?",40,40);
      break;

    case 1:
      background("yellow");
      fill(0);
      text("When it becomes apparent.",60,60);
      break;

  }
}

function mouseReleased() {

  state = state + 1;
  if (state > 1) {
    state = 0;
  }
}
