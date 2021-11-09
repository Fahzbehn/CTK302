var bubbles = [];
let url = "";

function setup() {
  let key = "1w9OLXiEIf-j5xK8hGF6ycBLlOZbIltBoa07oUU-bfbE"; // this is KEY of the URL from the sheet

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["How important is fixing climate change to you?"],
        data[i]["How often do you recycle?"],
        data[i]["Do you consider yourself a fan of major league sports?"],
        data[i]["How often do you watch YouTube?"]));// THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {


    constructor(climate, recycle, sportsFan, watching) {
    // only the order of these parameters matters!
    this.climate = climate;
    this.recycle = recycle;
    this.sportsFan = sportsFan;
    this.watching = watching;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector((Math.round((this.climate-3)/2)*3), Math.round((this.sportsFan-3)/2), 0);
  }


  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 200, 80);
    fill("white");
    text(
      this.watching + "\n" + this.recycle,
      this.pos.x,
      this.pos.y+10
    );
    this.pos.add(this.vel);
    if(this.pos.x > width) {
      this.pos.x = 0;
    }
    if(this.pos.x <= -200) {
      this.pos.x = width;
    }
    if(this.pos.y > height) {

      this.pos.y = 0;
    }
    if(this.pos.y <= -200) {
      print(this.pos.y);
      this.pos.y = height-1;
    }


  }
}
