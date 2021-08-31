var font1;
var font2;

function setup() {
  createCanvas(500, 500);
  font1 = loadFont("assets/FredokaOne-Regular.ttf");
  font2 = loadFont("assets/PermanentMarker-Regular.ttf");
}

function draw() {
  background(240);
  textFont(font1);
  textSize(48);
  text("Hello everyone!",100,100);
}
