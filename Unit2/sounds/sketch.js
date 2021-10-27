let song1, song2, song3;
let stage = 0;

function preload() {
  soundFormats('ogg', 'mp3');
  song1 = loadSound("assets/Lyrical.mp3");
  song2 = loadSound("assets/ctk_loop.mp3");
  song3 = loadSound("assets/let_it_in.ogg");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

}

function mouseReleased() {
  switch (stage) {
    case 0:
      song3.stop();
      song1.loop();
      stage = 1;
      break;

    case 1:
    song1.stop();
      textSize(40);
      fill(20,20,0);
      text("case 1",60,60)
      song2.loop();
      stage = 2;
      break;

    case 2:
    song2.stop();
      song3.loop();
      stage = 0;
      break;

  }


}
