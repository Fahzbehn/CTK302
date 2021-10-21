let numberOfTouches ;
let img_01, img_02, img_03;

function setup() {
  createCanvas(400, 400);
  img_01 = loadImage("assets/img_01.png");
  img_02 = loadImage("assets/img_02.png");
  img_03 = loadImage("assets/img_03.png");
}

function draw() {
  clear();
  textSize(30);
  fill("green");
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", width/2, 100) ;
      break ;

      case 1:
       text("it's kind of lonely here", width/2, 200) ;
       image(img_01,0,0,400,400);
      // put a picture here
      break ;

      case 2:
      text("two fingers are touching the screen", width/2, 300) ;
      image(img_02,0,0,400,400);
            // put a picture here
      break ;

      case 3:
     text("Three fingers are touching the screen", width/2, 350) ;
     image(img_03,0,0,400,400);
            // put a picture here
      break ;


  }

}
