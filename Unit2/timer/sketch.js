let state = 0;
let timer = 0;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  if (millis() - timer > 1000) {
    timer = millis();
    state++;

    if (state >= 4) {
      state = 0;
    }

    switch (state) {
      case 0:
        fill(255, 0, 0);
        rect(0, 0, 100, 100);
        rect(200, 0, 100, 100);
        rect(100, 100, 100, 100);
        rect(0, 200, 100, 100);
        rect(200, 200, 100, 100);
        break;
      case 1:
        fill(0, 255, 0);
        rect(100, 0, 100, 100);
        rect(0, 100, 100, 100);
        rect(200, 100, 100, 100);
        rect(100, 200, 100, 100);
        break;
      case 2:
        fill(0, 0, 255);
        rect(0, 0, 100, 100);
        rect(200, 0, 100, 100);
        rect(100, 100, 100, 100);
        rect(0, 200, 100, 100);
        rect(200, 200, 100, 100);

        break;
      case 3:
        fill(255, 0, 255);
        rect(100, 0, 100, 100);
        rect(0, 100, 100, 100);
        rect(200, 100, 100, 100);
        rect(100, 200, 100, 100);
        break;

    }
  }

}
