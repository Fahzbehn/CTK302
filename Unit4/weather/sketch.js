// Note - you must change line 19 to your own APPID to get this to work!

var weather = [];
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = [];
var temperature = [];
var desc;
var roundedTemp = 0;
var tempRed = [129, 204, 255, 253, 250, 246, 225, 177, 140,  12,  20,  35,  51,  65, 150,  33,  50,  62, 100, 140, 180, 250, 249, 245, 247, 240, 220, 180, 140, 240, 250, 253];
var tempGreen = [130, 204, 255, 230, 200, 100, 4,   100, 1,     0,   0,  60, 140, 181, 231, 120, 161, 200, 231, 255, 255, 251, 246, 221, 180, 140,  80,  39,   1,  39, 200, 240];
var tempBlue = [129, 205, 255, 255, 254, 253, 226, 192, 175, 150, 200, 253, 240, 253, 254,   2,  49,   5, 100, 140, 181, 160, 115,  90,  41,  18,   4,   3,   1,  60, 200, 240];
var cityState = 0;


function setup() {
  createCanvas(400, 400);

  // HERE is the call to get the weather.

  var myCityStringOne =
    "https://api.openweathermap.org/data/2.5/weather?q=Normal,IL,US&units=imperial&";
  var myCityStringTwo =
      "https://api.openweathermap.org/data/2.5/weather?q=Miami,FL,US&units=imperial&";
  var myCityStringThree =
        "https://api.openweathermap.org/data/2.5/weather?q=Tokyo,Japan&units=imperial&";

  //You can also use "zipcode" - var myIDString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = "appid=f6cee7c46776235fd6141a2173f81587"; // USE YOUR ID HERE, take out the x's!!!

  var myBigStringOne = myCityStringOne + myIDString;
  var myBigStringTwo = myCityStringTwo + myIDString;
  var myBigStringThree = myCityStringThree + myIDString;

  loadJSON(myBigStringOne, gotDataOne);
  loadJSON(myBigStringTwo, gotDataTwo);
  loadJSON(myBigStringThree, gotDataThree);
   // that gotData function happens when JSON comes back.
}

function gotData(data) {
  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  desc = weather.weather[0].description;
}

function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:

      background(200);
      fill("black");
      roundedTemp = Math.floor(temperature/5+8);
      //roundedTemp = -2;
      if (roundedTemp >= 31) {roundedTemp = 31};
      if (roundedTemp <= 0) {roundedTemp = 0};

      text("What is the weather in " + weather.name + "?", 20, 20);
      text("The windspeed is " + windspeed + ".", 20, 40);
      text("The temperature is " + temperature +"º F.", 20, 60);
      text("The overall weather is " + desc +".", 20, 80);
      text("The rounded temp is " + roundedTemp, 20, 100);


      // cloud
      fill(255);
      noStroke();
      ellipse(x, 325, 150, 50);
      ellipse(x-10, 300, 100, 50);
      ellipse(x+30, 305, 50, 50);

      // move the cloud's x position
      x = x + windspeed;
      if (x > width+200) x = -200;

      // Temperature block
      fill(0);
      rect(350,20,20,265);
      fill(tempRed[roundedTemp], tempGreen[roundedTemp], tempBlue[roundedTemp]);
      rect(352,265-roundedTemp*8,16,roundedTemp*8+18);


      break;
  }

  function mouseReleased() {

    state++;
    if (state > 2) {
      state = 0;
    }
  }
}
