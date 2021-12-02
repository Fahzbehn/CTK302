var num;
var distance;
var font1, font2;
var closestTree = 0;
var locationData;
var distanceCheck = .00333;
var latData = [40.5060193, 40.5049787, 40.5058053, 40.5058144, 40.5057178, 40.506136, 40.5053913, 40.5061093, 40.5060312, 40.5061878, 40.5062703, 40.5072098];
var longData = [-88.9895816, -88.9899921, -88.9908394, -88.9907217, -88.9908407, -88.9904096, -88.9910597, -88.9895816, -88.9906742, -88.9902529, -88.9909276, -88.9903699];
var arbortracker = [59, 110, 110, 109, 64, 35, 108, 78, 63, 108, 63, 55]
var speciesData = ["Quercus imbricaria","Cornus mas","Cornus mas","Tilia tomentosa", "Gleditsia triacanthos var.inermis", "Ginko Biloba", "Tilia tomentosa", "Picea abies \'PENDULA\'", "Picea pungens f. glauca", "Tilia tomentosa", "Picea pungens f. glauca", "Cladrastis kentukea"];
//"Gleditsia triacanthos var.inermis","Gleditsia triacanthos var.inermis", "Picea pungens f. glauca", "Acer rubrum", "Quercus imbricaria", "Acer saccharum", "Acer saccharum", "Acer rebrum \'SUN VALLEY\'", "Acer rebrum \'SUN VALLEY\'", "Cercis canadensis \'LAVENDER TWIST\'", "Acer rebrum \'SUN VALLEY\'","Acer rebrum \'SUN VALLEY\'", "Quercus macrocarpa", "Quercus macrocarpa", "Celtis occidentalis", "Fagys sylvatica pendula", "Malus cultivar"];
var knownAs = ["Shingle Oak", "Cornelian Cherry Dogwood", "Cornelian Cherry Dogwood", "Silver Linden", "Honeylocust", "Ginko", "Silver Linden", "Weeping Normay Spruce","Colorado Blue Spruce", "Silver Linden", "Colorado Blue Spruce", "American Yellowwood"];
//"Honeylocust","Honeylocust", "Colorado Blue Spruce", "Red Maple", "Shingle Oak", "Sugar Maple", "Sugar Maple", "Sun Valley Red Maple", "Sun Valley Red Maple", "Lavender Twist Redbud","Acer rebrum \'SUN VALLEY\'","Acer rebrum \'SUN VALLEY\'","Bur Oak", "Bur Oak", "Common Hackberry", "Weeping European Beech", "Crabapple"];
let treeImage = [];
var imgWidth = 360;
var imgHeight = 520;
var treeFound = 0;
let noTree;

function preload() {
  locationData = getCurrentPosition();
  font1 = loadFont("assets/Oxygen-Regular.ttf");
}

function setup() {
  // createCanvas(windowWidth, windowHeight);
    createCanvas(displayWidth, displayHeight);
  num = 0;
  textFont(font1, 36);
  intervalCurrentPosition(positionPing, 1000); // this is what calls positionPing function
  treeImage[0] = loadImage("assets/59-SE Corner.jpg");
treeImage[1] = loadImage("assets/110-left-SE.jpg");
treeImage[2] = loadImage("assets/110-right-SE.jpg");
treeImage[3] = loadImage("assets/109-S.jpg");
treeImage[4] = loadImage("assets/64-s.jpg");
treeImage[5] = loadImage("assets/35-south.jpg");
treeImage[6] = loadImage("assets/108-southwest.jpg");
treeImage[7] = loadImage("assets/78_south.jpg");
treeImage[8] = loadImage("assets/63-southwest.jpg");
treeImage[9] = loadImage("assets/108-southwest.jpg");
treeImage[10] = loadImage("assets/63-west.jpg");
treeImage[11] = loadImage("assets/pac_test.jpg");
noTree = loadImage("assets/notrees.png");
}

function draw() {

}

function positionPing(position) {
  // textSize(36);
  num++;
  intervalCurrentPosition(positionPing, 500); // this is what calls positionPing function

  distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');

  background("red");
  fill("white");
  // text("lat: " + position.latitude, 10, 40);
  // text("long: " + position.longitude, 10, 90);
//For loop i from 1-150 to check if (position.latitude is within latData[i] +/- distanceCheck) && (position.longitude is within longData[i] +/- distanceCheck))
//add debug for closestTree before for loop
for (let i = 0; i < 12; i++) {
  if ((position.latitude > latData[i] - distanceCheck)&&(position.latitude < latData[i] + distanceCheck)&&(position.longitude > longData[i] - distanceCheck)&&(position.longitude < longData[i] + distanceCheck)){
    //checking if closeness to this tree is closer than any other tree in array
    if (((abs(latData[i]-position.latitude))+(abs(latData[i]-position.latitude)))/2 < treeDistance){
      //sets treeDistance to the distance to the tree
      treeDistance = ((abs(latData[i]-position.latitude))+(abs(latData[i]-position.latitude)))/2;
      closestTree = i;
      treeFound = 1;
    }
    If (treeFound==1)
    {
    image(treeImage[i], 0, 250, 780, 1040);
    text("Species: " + speciesData[i], 10, 40);
    text("Common: " + knownAs[i], 10, 90);
    }
    //show image of that tree
    //show species of that tree
  } else
    {
      treeDistance = 1;
      if (treeFound==0){
        //If no tree is found, show the placeholder image.
        image(noTree, 0, 250, 780, 1040);
      }
    }
  }
  //add debug for closestTree after for loop
  //image down slightly to put naming text above.
  //text of normal name
  //text of species.
}

//   text("number of updates " + num, 10, 140);
//
//   text("you have moved " + distance, 10, 190);
// fill('red') ;
//   text("remember to take a screenshot before you take a picture of your surroundings!", 10, 260, 400);
