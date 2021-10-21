let cars = [];

function setup() {
  createCanvas(500, 500);
  noStroke();

  // for (let i = 0; i < 40; i++) {
  //   cars.push(new Car());
  // }
}

function draw() {
  background(0);
  cars.push(new Car());
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    if (cars[i].a <= 0){
      cars.splice(i, 1);

    }
  }

  print(cars.length);
}

class Car {
  constructor() {
    // attributes
    this.pos = createVector(width / 4, height / 4);
    this.vel = createVector(random(0,2), random(0, 2));
    this.a = random (200,256);
    this.r = random (0,65);
    this.g = random (128,256);
    this.b = random (172,256);
    this.size = random (2,5);
  }

  // methods
  display() {
    fill(this.r, this.g, this.b, this.a);

    triangle(this.pos.x, this.pos.y, this.pos.x+15, this.pos.y-15, this.pos.x +15, this.pos.y);

  }
  move() {
    this.pos.add(this.vel);
    this.a -= 3;

    scale(1/this.size);
    this.size = 1/this.size;

    // if (this.pos.x > width) this.pos.x = 0;
    // if (this.pos.x < 0) this.pos.x = width;
    // if (this.pos.y > height) this.pos.y = 0;
    // if (this.pos.y < 0) this.pos.y = height;
  }
}
