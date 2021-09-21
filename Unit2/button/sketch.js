let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  textSize(40);
  background(255);
  switch (state) {

    case 0:
      fill(0)
      text("0", 250, 250);
      fill(255, 0, 0);
      rect(100, 100, 100, 100);
      break;

    case 1:
      fill(0);
      text("1", 250, 250);
      fill(0, 255, 0);
      rect(100, 100, 100, 100);
      break;

    case 2:
      fill(0);
      text("2", 250, 250);
      fill(0, 0, 255);
      rect(100, 100, 100, 100);
      break;

  }

}

function mouseReleased() {

  if (((mouseX > 100) && (mouseX < 200)) && ((mouseY > 100) && (mouseY < 200))) {

    state++;
    if (state > 2) state = 0;
  }
}
