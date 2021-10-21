let state = 0;
let timer = 0;
let carX = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background(255);
  fill(200);
  rect(width / 2, height / 2 - 50, 200, 500);
  fill("pink");
  rect(carX,750,75,20);
  switch (state) {

    case 0:
      text("0", 100, 100);
      fill("red");
      ellipse(width / 2, height / 2 - 200, 100);
      fill(100);
      ellipse(width / 2, height / 2 - 50, 100);
      fill(100);
      ellipse(width / 2, height / 2 + 100, 100);

      break;

    case 1:
      text("1", 100, 100);
      fill(100);
      ellipse(width / 2, height / 2 - 200, 100);
      fill(100);
      ellipse(width / 2, height / 2 - 50, 100);
      fill(0, 255, 0);
      ellipse(width / 2, height / 2 + 100, 100);
      break;

    case 2:
      text("2", 100, 100);
      fill(100);
      ellipse(width / 2, height / 2 - 200, 100);
      fill(255, 255, 0);
      ellipse(width / 2, height / 2 - 50, 100);
      fill(100);
      ellipse(width / 2, height / 2 + 100, 100);
      break;

  }
  timer++;
  if (timer > 90) {
    state ++;
    if (state > 2) state = 0;
    timer = 0;
  }
}
