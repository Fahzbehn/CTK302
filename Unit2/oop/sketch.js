// let myCar;
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Spawn an object

  //myCar = new Car();
  for (let i = 0; i < 10; i++) {
    cars.push(new Car());

  }

}

function draw() {
  background(220);

  //myCar.display();
  //myCar.move();
  //myCar.changeColor();

  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    //cars[i].changeColor();
    cars[i].move();

  }

}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(random(100), random(100));
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.redColor = random(255);
    this.greenColor = random(255);
    this.blueColor = random(255);
    this.carOpacity = random(255);
  }

  // methods

  display() {
    fill(this.redColor, this.greenColor, this.blueColor, this.carOpacity);
    //rect(this.pos.x, this.pos.y, 75, 25);
    textSize(60);
    text("I WORK!",this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.redColor = random(255);
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.greenColor = random(255);
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.blueColor = random(255);
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.carOpacity = random(255);
    }

  }



}
