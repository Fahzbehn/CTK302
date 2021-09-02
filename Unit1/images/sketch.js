let img1, img2, img3;


function setup() {
  createCanvas(500, 500);
  img1 = loadImage("assets/fighter_test.png");
  img2 = loadImage("assets/summoning.png");
  img3 = loadImage("assets/workout.png");

  imageMode(CENTER);
}

function draw() {
  background(220);
  image(img1,width/2,height/2-140,120,120);
  image(img2,width/2,height/2,120,120);
  image(img3,width/2,height/2+140,120,120);

}
