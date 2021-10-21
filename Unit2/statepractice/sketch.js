let cars = [];
let frogPos;
let stage = 0;
let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn many object

  for (let i = 0; i < 100; i++) {
    cars.push(new Car());
  }

  frogPos = createVector(width / 2, height - 80);

}

function draw() {

  switch (stage) {

    case 0:
    background('blue')
      fill("pink");
      textSize(40);
      textAlign(CENTER);
      text("Welcome", width/2, 100);

    break;

    case 1: //Game state
      game() ;
    break;

    case 2: // Win State
      background("green");
      fill("white");
      textSize(40);
      text("You Win!");
    break;

    case 3: // Loss State
         background("red");
      fill("white");
      textSize(40);
      text("You Lost!");
    break;
  }




}
//Mouse checker
function mouseReleased() {
  switch(stage) {
    case 0:
      state = 1;
    break;

    case 2:
      state = 0;
    break;

    case 3:
      state = 0;
    break;

  }


}




function game() {
    background("orange");
    for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if ((cars[i].pos.dist(frogPos)) < 50) {
      cars.splice(i, 1) ;
    }
  }

  // frog
  fill("green");
  ellipse(frogPos.x, frogPos.y, 50, 50);
  checkForKeys();
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

// Car class
class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(200, 200);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.col = color(0, random(50, 100), random(100, 255), random(255));
    this.size = random(50, 80);
  }

  // methods

  display() {
    fill(this.col);
    textSize(this.size);
    text("HELLO", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
