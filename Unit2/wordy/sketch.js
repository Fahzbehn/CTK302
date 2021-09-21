function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  textSize(24);
  fill(mouseX,random(255),400-mouseY,random(255));
  if (mouseIsPressed) {
    text("Trippy",mouseX,mouseY);
  }
}

function mouseReleased() {
  background(220);

}
