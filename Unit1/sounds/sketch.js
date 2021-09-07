let song1;
var font1;

function preload() {
  soundFormats('ogg', 'mp3');
  song1 = loadSound("assets/Let_It_In_and_Let_It_Out.ogg");
  font1 = loadFont("assets/PermanentMarker-Regular.ttf");

}


function setup() {
  createCanvas(500, 500);
  background("red");
  textFont(font1);
  textSize(48);
  song1.loop();
}

function draw() {


}

function touchStarted() {
  getAudioContext().resume();
}

function mouseReleased() {
  if (song1.isPlaying()) {
    song1.pause();
    background("red");
    text("Song Paused!",100,100);
  } else {
    song1.loop();
    background("red");
    text("Song Playing",100,100);

  }
}
