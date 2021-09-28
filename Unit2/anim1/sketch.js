let x = 0;
let r = 255;
let g = 0;
let b = 0;
let y = 100;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(250);
  fill(r,g,b);
  rect (x,y,100,100);

  x=x+4;
  if (x > width) {
    x = 0;
    r = random(255);
    g = random(255);
    b = random(255);
    y = random (100,300);
  }
}
